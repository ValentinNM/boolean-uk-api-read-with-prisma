// const { PrismaClient } = require("@prisma/client")

// const prisma = new PrismaClient({
//     log: ["query"],
//   })

// module.exports = {prisma};

/*
if you want to also see the database
params for your query in the log, you can
replace your database.js file like so:
*/

const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient({
    log : [{
        emit: 'event',
        level: 'query',
    }]
})

prisma.$on("query", async (e) => {
    console.log(e);
});

module.exports = { prisma: prisma}