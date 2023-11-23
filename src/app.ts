import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { StudentRoutes } from './app/modules/student/student.route'
const app: Application = express()

app.use(cors())
app.use(express.json())
//routes
app.use('/api/v1/students', StudentRoutes)
app.get('/', (req: Request, res: Response) => {
  const a = 99
  res.send(a)
})

export default app
