let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
const pp = './Menu2.jpg'

let love = `\t\t🎋 𝐂𝐀𝐋𝐂𝐔𝐋𝐀𝐃𝐎𝐑 𝐒𝐄 𝐀𝐌𝐎𝐑 🎋

𝐸𝑙 𝑎𝑚𝑜𝑟 𝑑𝑒: ${name} 𝑝𝑜𝑟 𝑡𝑖 𝑒𝑠: *${Math.floor(Math.random() * 100)}%*
𝑑𝑒 𝑢𝑛: *100%*

𝑬𝒍 𝒔𝒐𝒍 𝒚 𝒍𝒂 𝒍𝒖𝒏𝒂 𝒏𝒐 𝒔𝒐𝒏
𝒊𝒏𝒑𝒆𝒓𝒇𝒆𝒄𝒕𝒐𝒔 𝒑𝒐𝒓 𝒒𝒖𝒆 𝒆𝒍
𝒐𝒕𝒓𝒐 𝒑𝒖𝒆𝒅𝒆 𝒅𝒆𝒔𝒕𝒓𝒖𝒊𝒓 𝒄𝒐𝒏
𝒔𝒖 𝒇𝒖𝒆𝒈𝒐 𝒚 𝒆𝒍 𝒐𝒕𝒓𝒐 𝒔𝒊𝒎𝒑𝒍𝒆𝒎𝒆𝒏𝒕𝒆
𝒏𝒐 𝒑𝒖𝒆𝒅𝒆 𝒅𝒂𝒏̃𝒂𝒓 𝒂 𝒍𝒐𝒔 𝒐𝒕𝒓𝒐𝒔.
𝒑𝒆𝒓𝒐 𝒅𝒆𝒔𝒅𝒆 𝒔𝒖 𝒄𝒓𝒆𝒂𝒄𝒊𝒐𝒏 𝒔𝒆
𝒂𝒎𝒂𝒓𝒐𝒏 𝒆𝒏 𝒔𝒆𝒄𝒓𝒆𝒕𝒐.
`

conn.sendMessage(m.chat,{image: {url: pp}, caption: love, mentions: [m.sender]}, {quoted: m}) 
}

handler.help = ['love  @user']
handler.tags = ['fun']
handler.command = /^(love)$/i
export default handler