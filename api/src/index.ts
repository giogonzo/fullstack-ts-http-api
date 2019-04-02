import * as express from 'express'
import * as cors from 'cors'
import * as implementations from './implementations'
import { addToExpress } from './lib'

const app = express()

app.use(cors())

addToExpress(app, implementations.getPostById)
addToExpress(app, implementations.getPosts)

app.listen(3000)
