import { APICallDefinition } from '../../api/src/lib'
import { stringify } from 'querystring'
import { mapWithKey } from 'fp-ts/lib/Record'

function makeAPICall<IA, IO, OA, OO>(
  apiEndpoint: string,
  path: string,
  apiCall: APICallDefinition<IA, IO, OA, OO>
): (input: IA) => Promise<OA> {
  return input => {
    const queryString = stringify(apiCall.input.encode(input))
    const url = `${apiEndpoint}/${path}?${queryString}`
    return window
      .fetch(url)
      .then(res => {
        if (res.status !== 200) {
          throw res
        }
        return res
      })
      .then(res => res.json())
      .then(json =>
        apiCall.output
          .decode(json)
          .fold(errors => Promise.reject(errors), post => Promise.resolve(post))
      )
  }
}

export function makeAPI<
  R extends Record<string, APICallDefinition<any, any, any, any>>
>(
  apiEndpoint: string,
  apiCalls: R
): {
  [K in keyof R]: R[K] extends APICallDefinition<infer IA, any, infer OA, any>
    ? (input: IA) => Promise<OA>
    : never
} {
  return mapWithKey(apiCalls, (path, apiCall) =>
    makeAPICall(apiEndpoint, path, apiCall)
  ) as any
}
