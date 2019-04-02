import { APICallDefinition } from '../../api/src/lib'
import { stringify } from 'querystring'

export function makeAPICall<IA, IO, OA, OO>(
  apiEndpoint: string,
  apiCall: APICallDefinition<IA, IO, OA, OO>
): (input: IA) => Promise<OA> {
  return input => {
    const queryString = stringify(apiCall.input.encode(input))
    const url = `${apiEndpoint}${apiCall.path}?${queryString}`
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
