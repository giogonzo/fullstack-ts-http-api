import { Type } from 'io-ts'
import { Application, Request, Response } from 'express'
import { failure } from 'io-ts/lib/PathReporter'

export interface APICallDefinition<IA, IO, OA, OO> {
  path: string
  input: Type<IA, IO>
  output: Type<OA, OO>
}

export function defineAPICall<IA, IO, OA, OO>(
  config: APICallDefinition<IA, IO, OA, OO>
): APICallDefinition<IA, IO, OA, OO> {
  return config
}

interface APICall<IA, IO, OA, OO> extends APICallDefinition<IA, IO, OA, OO> {
  implementation: (input: IA) => Promise<OA>
}

export function implementAPICall<IA, IO, OA, OO>(
  apiCall: APICallDefinition<IA, IO, OA, OO>,
  implementation: (input: IA) => Promise<OA>
): APICall<IA, IO, OA, OO> {
  return {
    ...apiCall,
    implementation
  }
}

export function addToExpress<IA, IO, OA, OO>(
  app: Application,
  apiCall: APICall<IA, IO, OA, OO>
) {
  app.get(apiCall.path, (req: Request, res: Response) => {
    const validatedInput = apiCall.input.decode(req.query)
    validatedInput.fold(
      errors => {
        res.status(422).send(failure(errors).join('\n'))
      },
      input => {
        apiCall
          .implementation(input)
          .then(post => res.status(200).send(apiCall.output.encode(post)))
      }
    )
  })
}
