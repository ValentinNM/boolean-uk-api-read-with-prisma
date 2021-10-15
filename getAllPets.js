// const { PrismaClient } = require('@prisma/client')

// const prisma = new PrismaClient()

// async function main() {
//   // ... you will write your Prisma Client queries here
//   const books = await prisma.pet.findMany({})
//   console.log("working: ", books);
// }

// main()
//   .catch((e) => {
//     throw e
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })

const {PrismaClient} = require(`@prisma/client`)

const prisma = new PrismaClient()

async function getAllPets(){ 


}