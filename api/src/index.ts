import * as express from 'express'
import * as cors from 'cors'
import * as implementations from './implementations'
import { addAllToExpress } from './lib'

const app = express()

app.use(cors())

addAllToExpress(app, implementations)

app.listen(3000)
