import { stringify } from 'querystring'
import { Post } from '../../api/src/model'

const apiEndpoint = 'http://localhost:3000'

export function getPostById(query: { id: string }): Promise<Post> {
  const queryString = stringify(query)
  const url = `${apiEndpoint}/getPostById?${queryString}`
  return window
    .fetch(url)
    .then(res => {
      if (res.status !== 200) {
        throw res
      }
      return res
    })
    .then(res => res.json())
}
