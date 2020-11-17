import fs from 'fs'
import path from 'path'

let __dirname = path.resolve();
const logStreamFile = fs.createWriteStream(path.join(__dirname, 'server.log'), { flags: 'a' })

export default logStreamFile