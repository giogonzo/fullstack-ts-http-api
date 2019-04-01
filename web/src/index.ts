import { Post } from '../../api/src/model'
import { getPostById } from './api'

function renderPost(post: Post): string {
  return `
    <h1>${post.title}</h1>
    <i>${post.date.toLocaleDateString()}</i>
    <p>${post.body}</p>
  `
}

getPostById({ id: '1' }).then(post => {
  document.body.innerHTML = renderPost(post)
})
