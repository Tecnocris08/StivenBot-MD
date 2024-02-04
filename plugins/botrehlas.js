/*import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'*/
let handler = async (m, { conn, usedPrefix, command}) => {


let Reglas = `
┏┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝑹𝑬𝑮𝑳𝑨𝑺 𝑺𝑻𝑰𝑽𝑬𝑵 𝑩𝑶𝑻
┗┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
Atento:

1️⃣ - No insultar al creador.

2️⃣ - No hacer spam al bot.

3️⃣ - No llamar al bot, eso saturaria al bot.

4️⃣ - No videollamar al bot, eso saturaria al bot.

5️⃣ - No mandar virus al bot.

6️⃣ - No insistir en unir al bot en un grupo si el creador no lo acepta.

Las dudas que tengas o quieres comentar, no olvides contactar a estos numeros:

*CREADOR:*
• wa.me/573148624888

*SUPPORT BOTS:*
• wa.me/5493873687620

*GUARDIAN-BOT:*
• wa.me/19145948340
`.trim()
await conn.sendFile(m.chat, imagen1, 'gata.mp4', Reglas)
}
handler.customPrefix = /reglas|Reglas|reglasbot, botreglas|uso, usobot|uso del bot/i
handler.command = new RegExp
handler.register = true
handler.exp = 70
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}