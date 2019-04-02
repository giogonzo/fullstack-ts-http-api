import { Request, Response } from 'express'
import * as service from './service'
import {
  GetPostByIdInput,
  GetPostByIdOutput,
  GetPostsInput,
  GetPostsOutput
} from './model'
import { failure } from 'io-ts/lib/PathReporter'

export function getPostById(req: Request, res: Response) {
  const validatedInput = GetPostByIdInput.decode(req.query)
  validatedInput.fold(
    errors => {
      res.status(422).send(failure(errors).join('\n'))
    },
    input => {
      service
        .getById(input.id)
        .then(post => res.status(200).send(GetPostByIdOutput.encode(post)))
    }
  )
}

export function getPosts(req: Request, res: Response) {
  const validatedInput = GetPostsInput.decode(req.query)
  validatedInput.fold(
    errors => {
      res.status(422).send(failure(errors).join('\n'))
    },
    input => {
      service
        .list(input.count)
        .then(posts => res.status(200).send(GetPostsOutput.encode(posts)))
    }
  )
}
