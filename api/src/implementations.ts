import * as definitions from './definitions'
import * as service from './service'
import { implementAPICall } from './lib'

export const getPostById = implementAPICall(definitions.getPostById, input =>
  service.getById(input.id)
)

export const getPosts = implementAPICall(definitions.getPosts, input =>
  service.list(input.count)
)
