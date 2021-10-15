const { prisma } = require("../../utils/database");


function getAll(req, res) { 

    // const allPets = prisma.pet.findMany()

    prisma.pet.findMany()
    .then(result => res.json({ data: result }))
    .catch(error => {
      console.error({ error })

      res.status(500).json({ error: error.message })
    })
}

module.exports = {getAll};