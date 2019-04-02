import { stringify } from 'querystring'
import {
  GetPostByIdOutput,
  GetPostByIdInput,
  GetPostsInput,
  GetPostsOutput
} from '../../api/src/model'

const apiEndpoint = 'http://localhost:3000'

export function getPostById(
  query: GetPostByIdInput
): Promise<GetPostByIdOutput> {
  const queryString = stringify(GetPostByIdInput.encode(query))
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
    .then(json =>
      GetPostByIdOutput.decode(json).fold(
        errors => Promise.reject(errors),
        post => Promise.resolve(post)
      )
    )
}

export function getPosts(query: GetPostsInput): Promise<GetPostsOutput> {
  const queryString = stringify(GetPostsInput.encode(query))
  const url = `${apiEndpoint}/getPosts?${queryString}`
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
      GetPostsOutput.decode(json).fold(
        errors => Promise.reject(errors),
        posts => Promise.resolve(posts)
      )
    )
}
