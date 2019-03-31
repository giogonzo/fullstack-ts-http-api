import { Request, Response } from 'express'
import * as service from './service'

export function getPostById(req: Request, res: Response) {
  const postId = req.query.id
  service.getById(postId).then(post => res.status(200).send(post))
}
