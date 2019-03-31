import * as fs from 'fs'
import * as path from 'path'
import { Post } from './model'

const posts = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../data/posts.json'), 'utf8')
)

export function getById(id: string): Promise<Post> {
  return Promise.resolve({
    ...posts[id],
    date: new Date(posts[id].date)
  })
}
