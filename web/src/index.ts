import { Post } from '../../api/src/model'
import { getPostById, getPosts } from './api'

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

Promise.all([getPostById({ id: '1' }), getPosts({ count: 3 })]).then(
  ([post, posts]) => {
    document.body.innerHTML = renderPost(post) + renderPosts(posts)
  }
)
