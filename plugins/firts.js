export async function before(m) {

const username = conn.getName(m.sender)

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await m.reply(`╔╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•
┃   👑 𝙎𝙩𝙞𝙫𝙚𝙣 𝘽𝙤𝙩 - 𝙈𝘿 𝙊𝙁𝘾 👑
╚╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•

🌹 𝘏𝘰𝘭𝘢 𝘶𝘴𝘶𝘢𝘳𝘪𝘰/𝘢: ${username}
𝘣𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘰/𝘢 𝘢 𝘚𝘵𝘪𝘷𝘦𝘯𝘉𝘰𝘵-𝘔𝘋 🍀
𝘶𝘯 𝘣𝘰𝘵 𝘱𝘢𝘳𝘢 𝘶𝘴𝘰 𝘱𝘶𝘣𝘭𝘪𝘤𝘰! 🎋

👑 𝐃𝐄𝐒𝐀𝐑𝐑𝐎𝐋𝐋𝐀𝐃𝐎𝐑𝐄𝐒 👑

*Creador:*
• wa.me/573148624888

*SupportBots:*
• wa.me/5493873687620

*GuardianBot:*
• wa.me/19145948340

🥳 Disfruta de StivenBot-MD 🎋`) 
user.pc = new Date * 1
}
