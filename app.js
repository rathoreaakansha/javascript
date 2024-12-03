import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const app=express()

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

app.set('view engine','ejs')
// app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}))

app.use(express.static('public'))

app.get('/home',(request,response)=>{
    response.render("home")

})
app.get('/about',(request,response)=>{
    response.render("about")

})
app.get('/contact',(request,response)=>{
    response.render("contact")

})
.listen(3000,()=>{
    console.log("server is running")
})
