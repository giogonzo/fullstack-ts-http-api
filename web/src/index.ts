import { Post } from '../../api/src/model'
import { makeAPICall } from './lib'
import * as definitions from '../../api/src/definitions'

const getPostById = makeAPICall(
  'http://localhost:3000',
  definitions.getPostById
)
const getPosts = makeAPICall('http://localhost:3000', definitions.getPosts)

function renderPost(post: Post): string {
  return `
    <h1>${post.title}</h1>
    <i>${post.date.toLocaleDateString()}</i>
    <p>${post.body}</p>
  `
}

function renderPosts(posts: Array<Post>): string {
  return `
    <h2>All posts</h2>
    <ul>
      ${posts.map(post => `<li>${post.title}</li>`).join('\n')}
    </ul>
  `
}

Promise.all([getPostById({ id: '42' }), getPosts({ count: 3 })]).then(
  ([post, posts]) => {
    document.body.innerHTML =
      post.fold('<h1>Post not found :(</h1>', renderPost) + renderPosts(posts)
  }
)
