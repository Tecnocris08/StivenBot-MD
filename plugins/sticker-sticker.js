import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
let stiker = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let autor = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''

if (!/webp|image|video/g.test(mime) && !text) return m.reply(`❮🍁 𝐈𝐍𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐎 / 𝐁𝐎𝐓 𝐖𝐀𝐑𝐍 🍁❯:\n\n❲🎋❳ ➜ 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝘼 𝘼 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉, 𝙑𝙄𝘿𝙀𝙊, 𝙂𝙄𝙁 𝙋𝘼𝙍𝘼 𝙐𝙎𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊.`)
if (/video/g.test(mime)) if ((q.msg || q).seconds > 10) return m.reply('❮🎋 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀 / 𝐕𝐈𝐃𝐄𝐎 𝐖𝐀𝐑𝐍 🎋❯:\n\n❲🍁❳ ➜ 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊 𝙉𝙊 𝘿𝙀𝘽𝙀 𝘿𝙀 𝘿𝙐𝙍𝘼𝙍 𝙈𝘼𝙎 𝘿𝙀 8 𝙎𝙀𝙂𝙐𝙉𝘿𝙊𝙎, 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙍𝙀𝘾𝙊𝙍𝙏𝙀 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊.')

if (/webp|image|video/g.test(mime)) {
let img = await q.download?.()
let out
stiker = await sticker(img, false, global.packname, global.author)
await conn.reply(m.chat, `❮♻️ 𝐂𝐑𝐄𝐀𝐍𝐃𝐎 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 ♻️❯:\n\n❲🎋❳ ➜ 𝘾𝙧𝙚𝙖𝙣𝙙𝙤 𝙚𝙡 𝙨𝙩𝙞𝙘𝙠𝙚𝙧, 𝙚𝙨𝙥𝙚𝙧𝙚 𝙪𝙣𝙤𝙨 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨...`, m)

if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, global.packname, global.author)

if (!stiker) errorMessage = 'ERROR'
}} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
else return m.reply('❮⬇️ 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀 / 𝐔𝐑𝐋 𝐖𝐀𝐑𝐍 ⬇️❯:\n\n❲🍂❳ ➜ 𝙀𝙇 𝙀𝙉𝙇𝘼𝘾𝙀 𝙄𝙉𝙂𝙍𝙀𝙎𝘼𝘿𝙊 𝙉𝙊 𝙀𝙎 𝙑𝘼𝙇𝙄𝘿𝙊 𝙋𝘼𝙍𝘼 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊.')}

if (stiker) {
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
} else {
console.log(stiker)
}}

handler.command = /^(s(tickers?)?(image|video|gif|img)?)$/i
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
