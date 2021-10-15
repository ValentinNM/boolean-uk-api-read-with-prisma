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

function getOnebyId(req, res) { 

    // console.log("req.params: ", req.params.id);

    const id = req.params.id; 
    // const id = parseiInt(req.params.id); 
    // console.log("id:", id);
    // let params = req.params;
    // const smth = params.parsInt(parmas);

    prisma.pet.findUnique({ 
        where: { 
            id: parseInt(id),
            // id: id,  // prisma will get the id value as a string, hence we are converting it to a int
        },
    })
    .then(result => res.json({one_by_id : result}))
    .catch(error => { 
        console.error({error})

        res.status(500).json({ error : error.message })
    })
}

module.exports = {getAll, getOnebyId};