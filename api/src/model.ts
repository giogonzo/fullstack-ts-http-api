import * as t from 'io-ts'

export type Post = {
  title: string
  body: string
  date: Date
}

export const GetPostByIdInput = t.type(
  {
    id: t.string
  },
  'GetPostByIdInput'
)

export type GetPostByIdInput = t.TypeOf<typeof GetPostByIdInput>
