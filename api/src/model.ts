import * as t from 'io-ts'
import { DateFromISOString } from 'io-ts-types/lib/Date/DateFromISOString'
import { IntegerFromString } from 'io-ts-types/lib/number/IntegerFromString'

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

export const GetPostsInput = t.type(
  {
    count: IntegerFromString
  },
  'GetPostsInput'
)

export type GetPostsInput = t.TypeOf<typeof GetPostsInput>

export const GetPostsOutput = t.array(Post, 'GetPostsOutput')

export type GetPostsOutput = t.TypeOf<typeof GetPostsOutput>
