import { defineAPICall } from './lib'
import {
  GetPostByIdInput,
  GetPostByIdOutput,
  GetPostsInput,
  GetPostsOutput
} from './model'

export const getPostById = defineAPICall({
  input: GetPostByIdInput,
  output: GetPostByIdOutput
})

export const getPosts = defineAPICall({
  input: GetPostsInput,
  output: GetPostsOutput
})
