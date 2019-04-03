import * as fs from 'fs'
import * as path from 'path'
import { range, catOptions } from 'fp-ts/lib/Array'
import { Post } from './model'
import { Option, fromNullable } from 'fp-ts/lib/Option'

const posts = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../data/posts.json'), 'utf8')
)

export function getById(id: string): Promise<Option<Post>> {
  return Promise.resolve(
    fromNullable(posts[id]).map(post => ({
      ...post,
      date: new Date(post.date)
    }))
  )
}

export function list(count: number): Promise<Array<Post>> {
  return Promise.all(
    range(1, count)
      .map(String)
      .map(getById)
  ).then(catOptions)
}
