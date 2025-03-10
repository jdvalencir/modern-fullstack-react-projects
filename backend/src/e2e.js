import globalSetup from './test/globalSetup.js'
import { app } from './app.js'
import { initDatabase } from './db/init.js'

process.loadEnvFile()

async function runTestingServer() {
  await globalSetup()
  await initDatabase()
  const PORT = process.env.PORT
  app.listen(PORT)
  console.info(`TESTING express server running on http://localhost:${PORT}`)
}

runTestingServer()
