import { defineAPICall } from './lib'
import {
  GetPostByIdInput,
  GetPostByIdOutput,
  GetPostsInput,
  GetPostsOutput
} from './model'

export const getPostById = defineAPICall({
  path: '/getPostById',
  input: GetPostByIdInput,
  output: GetPostByIdOutput
})

export const getPosts = defineAPICall({
  path: '/getPosts',
  input: GetPostsInput,
  output: GetPostsOutput
})
