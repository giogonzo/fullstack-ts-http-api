import * as t from 'io-ts'
import { DateFromISOString } from 'io-ts-types/lib/Date/DateFromISOString'

export const Post = t.type({
  title: t.string,
  body: t.string,
  date: DateFromISOString
})

export type Post = t.TypeOf<typeof Post>

export const GetPostByIdInput = t.type(
  {
    id: t.string
  },
  'GetPostByIdInput'
)

export type GetPostByIdInput = t.TypeOf<typeof GetPostByIdInput>

export const GetPostByIdOutput = Post

export type GetPostByIdOutput = Post
