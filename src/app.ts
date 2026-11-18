import express from 'express'
import useGraph from "./services/graph.ai.service.js"

const app = express()

app.use(express.json())

app.get("/health",(req,res)=>{
  res.status(200).json({
    status: 'ok'
  })  
})

app.post("/use-graph",async(req,res)=>{
   await useGraph("what is the captial of france?")
})

export default app