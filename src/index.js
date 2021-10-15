// Inside src/index.js
require("dotenv").config()

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

const booksRouter = require("./resources/books/router");
const petsRouter = require("./resources/pets/router");
/* SETUP MIDDLEWARE */

app.disable("x-powered-by")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

/* SETUP ROUTES */
app.use('/books',booksRouter);
app.use("/pets", petsRouter);

app.get("*", (req, res) => {
  res.json({ ok: true })
})

/* START SERVER */

const port = process.env.PORT || 3030

app.listen(port, () => {
  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`)
})


// const { PrismaClient } = require('@prisma/client')

// const prisma = new PrismaClient()

// async function main() {
//   // ... you will write your Prisma Client queries here

//   const users = await prisma.user.findMany()

//   console.log(users);
// }

// main()
//   .catch((e) => {
//     throw e
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })