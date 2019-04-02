import * as express from 'express'
import * as cors from 'cors'
import * as implementations from './implementations'

const app = express()

app.use(cors())

app.get('/getPostById', implementations.getPostById)

app.get('/getPosts', implementations.getPosts)

app.listen(3000)
