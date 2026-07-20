// Rasterize the owl favicon.svg into the PNG/ICO assets the browser needs.
//   node scripts/gen_favicon.mjs
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pub = path.join(root, 'public')
const svg = fs.readFileSync(path.join(pub, 'favicon.svg'))

// Transparent-background PNGs for browser tabs.
await sharp(svg, { density: 384 }).resize(16, 16).png().toFile(path.join(pub, 'favicon-16.png'))
await sharp(svg, { density: 384 }).resize(32, 32).png().toFile(path.join(pub, 'favicon-32.png'))

// Apple touch icon: iOS paints transparency black, so flatten the owl onto
// the dark PrepOS badge with rounded corners.
const owl = await sharp(svg, { density: 512 }).resize(150, 150).png().toBuffer()
const rounded = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180"><rect width="180" height="180" rx="40" fill="#0A0A0F"/></svg>')
await sharp(rounded)
  .composite([{ input: owl, top: 15, left: 15 }])
  .png()
  .toFile(path.join(pub, 'apple-touch-icon.png'))

// favicon.ico — wrap the 32px PNG in an ICO container (PNG-in-ICO, supported
// by every modern browser). sharp can't emit .ico, so build the header by hand.
const png32 = await sharp(svg, { density: 384 }).resize(32, 32).png().toBuffer()
const header = Buffer.alloc(6)
header.writeUInt16LE(0, 0)      // reserved
header.writeUInt16LE(1, 2)      // type: icon
header.writeUInt16LE(1, 4)      // image count
const entry = Buffer.alloc(16)
entry.writeUInt8(32, 0)         // width
entry.writeUInt8(32, 1)         // height
entry.writeUInt8(0, 2)          // palette
entry.writeUInt8(0, 3)          // reserved
entry.writeUInt16LE(1, 4)       // color planes
entry.writeUInt16LE(32, 6)      // bits per pixel
entry.writeUInt32LE(png32.length, 8)
entry.writeUInt32LE(22, 12)     // offset (6 + 16)
fs.writeFileSync(path.join(pub, 'favicon.ico'), Buffer.concat([header, entry, png32]))

console.log('✓ favicon assets written to /public:',
  ['favicon.svg', 'favicon-16.png', 'favicon-32.png', 'apple-touch-icon.png', 'favicon.ico'].join(', '))
