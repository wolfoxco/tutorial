require('dotenv').config()

const MilleFeuille = require('@frenchpastries/millefeuille')
const Assemble = require('@frenchpastries/assemble')

const allRoutes = Assemble.routes([
  Assemble.notFound(() => ({ statusCode: 404 }))
])

// eslint-disable-next-line
const server = MilleFeuille.create(allRoutes)
console.log(`-----> Server started on port ${process.env.PORT}.`)
