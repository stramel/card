import { readFileSync } from 'fs'
import { join } from 'path'

const output = readFileSync(join(__dirname, 'output'), 'utf8')
console.log(output)

export const autoRun = true
