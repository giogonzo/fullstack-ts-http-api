import * as express from 'express'
import * as cors from 'cors'
import * as implementations from './implementations'

const app = express()

app.use(cors())

app.get('/getPostById', implementations.getPostById)

app.listen(3000)
