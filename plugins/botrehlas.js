/*import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'*/
let handler = async (m, { conn, usedPrefix, command}) => {


let Reglas = ` ⚠️𝗥𝗘𝗦𝗣𝗘𝗧𝗔 𝗟𝗔𝗦 𝗥𝗘𝗚𝗟𝗔𝗦⚠️\n
1: ¡Nᴏ Lʟᴀᴍᴀʀ Aʟ Bᴏᴛ!,
2: ¡Nɪɴɢᴜɴ Mᴏᴛɪᴠᴏ Asᴇʀʟᴇ Sᴘᴀᴍ!,
3: ¡Cᴏɴᴛᴀᴄᴛᴀ A Lᴏs Cʀᴇᴀᴅᴏʀᴇs Sɪ Vᴇs Uɴ Eʀʀᴏʀ!,
4: ¡Nᴏ Esᴄʀɪʙᴀs Aʟ Pʀɪᴠᴀᴅᴏ Dᴇʟ Bᴏᴛ!,
5: ¡Rᴇsᴘᴇᴛᴀ Lᴏs Tᴇʀᴍɪɴᴏs Dᴇʟ Bᴏᴛ!,
6: ¡Nᴏ Iɴsᴜʟᴛᴇs Eʟ Bᴏᴛ!

🩵 𝗶𝗻𝗳𝗼 : 𝚂𝙸 𝚂𝙴 𝚀𝚄𝙴𝙱𝚁𝙰𝙽𝚃𝙰 𝙰𝙻𝙶𝚄𝙽𝙰 𝙳𝙴 𝙻𝙰𝚂 𝚁𝙴𝙶𝙻𝙰𝚂,
𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝚈 𝙱𝙻𝙾𝚀𝚄𝙴𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃.

📝𝗡𝗼𝘁𝗮 : 𝚁𝙴𝙲𝚄𝙴𝚁𝙳𝙰 𝚀𝚄𝙴 𝚂𝙰𝙺𝚄𝚁𝙰𝙱𝙾𝚃 𝚂𝙸𝙴𝙼𝙿𝚁𝙴 𝙴𝚂𝚃𝙰𝚁𝙰
𝙴𝙽 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 (𝙾𝙵𝙲) 𝙳𝙴𝙻 𝙱𝙾𝚃 𝚂𝙰𝙺𝚄𝚁𝙰𝙱𝙾𝚃, 𝙿𝙾𝚁 𝚃𝙰𝙽𝚃𝙾 𝙽𝙾 𝙽𝙾𝚂 𝙷𝙰𝙲𝙴𝙼𝙾𝚂
𝚁𝙴𝚂𝙿𝙾𝙽𝚂𝙰𝙱𝙻𝙴𝚂 𝙿𝙾𝚁 𝙾𝚃𝚁𝙾𝚂 "𝙱𝙾𝚃𝚂" 𝚀𝚄𝙴 𝚂𝙴 𝙷𝙰𝙶𝙰𝙽 𝙿𝙰𝚂𝙰𝚁 𝙿𝙾𝚁 
"𝙾𝙵𝙲", 𝙿𝙰𝚁𝙰 𝙸𝙳𝙴𝙽𝚃𝙸𝙵𝙸𝙲𝙰𝚁 𝙰𝙻 𝚂𝚃𝙰𝙵𝙵 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙾𝙵𝙸𝙲𝙸𝙰𝙻 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 
𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 .𝗼𝘄𝗻𝗲𝗿 𝚈 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰 𝚀𝚄𝙴 𝙴𝚂𝚃𝙴 𝙴𝙻 𝙿𝚁𝙾𝙿𝙸𝚁𝚃𝙰𝚁𝙸𝙾 (Diego).

𝚂𝙸 𝚃𝙴 𝙶𝚄𝚂𝚃𝙰 𝙴𝙻 𝙱𝙾𝚃 , 𝚃𝙰𝙼𝙱𝙸𝙴𝙽 𝙿𝚄𝙴𝙳𝙴𝚂 𝙸𝚁 𝙰𝙻 𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝙸𝙾 𝚈 𝙳𝙴𝙹𝙰𝚁 𝚄𝙽𝙰 🌟
${md}
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