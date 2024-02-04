import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  let user = db.data.users[m.sender]
  let time = user.lastmining + 10000 //tiempo de espera en min
if (new Date - user.lastmiming < 10000) return await conn.reply(m.chat, `❮⏳ 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀 / 𝐓𝐈𝐌𝐄 𝐖𝐀𝐑𝐍 ⏳❯:\n\n❲⚙️❳ ➜ 𝙀𝙎𝙋𝙀𝙍𝙀 3 𝙎𝙀𝙂𝙐𝙉𝘿𝙊𝙎 𝙋𝘼𝙍𝘼 𝙐𝙎𝘼𝙍 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍.`,  m)
  try {
  	
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 10) return m.reply('❮🎋 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀 / 𝐕𝐈𝐃𝐄𝐎 𝐖𝐀𝐑𝐍 🎋❯:\n\n❲🍁❳ ➜ 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊 𝙉𝙊 𝘿𝙀𝘽𝙀 𝘿𝙀 𝘿𝙐𝙍𝘼𝙍 𝙈𝘼𝙎 𝘿𝙀 8 𝙎𝙀𝙂𝙐𝙉𝘿𝙊𝙎, 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙍𝙀𝘾𝙊𝙍𝙏𝙀 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊.')
      let img = await q.download?.()
      if (!img) throw `❮🍁 𝐈𝐍𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐎 / 𝐁𝐎𝐓 𝐖𝐀𝐑𝐍 🍁❯:\n\n❲🎋❳ ➜ 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝘼 𝘼 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉, 𝙑𝙄𝘿𝙀𝙊, 𝙂𝙄𝙁 𝙋𝘼𝙍𝘼 𝙐𝙎𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊.`
      let out
      try {
        stiker = await sticker(img, false, global.packname, global.author)
      } catch (e) {
        console.error(e)
      } finally {
      await conn.reply(m.chat, `❮♻️ 𝐂𝐑𝐄𝐀𝐍𝐃𝐎 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 ♻️❯:\n\n❲🥪❳ ➜ 𝙌𝙪𝙚𝙧𝙚𝙨 𝙨𝙖𝙣𝙙𝙬𝙞𝙘𝙝? 𝙨𝙚 𝙚𝙨𝙩𝙖 𝙘𝙧𝙚𝙖𝙣𝙙𝙤 𝙨𝙪 𝙨𝙩𝙞𝙘𝙠𝙚𝙧. :3`, m)
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/image/g.test(mime)) out = await uploadImage(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
          if (typeof out !== 'string') out = await uploadImage(img)
          stiker = await sticker(false, out, global.packname, global.author)
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
      else return m.reply('❮⬇️ 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀 / 𝐔𝐑𝐋 𝐖𝐀𝐑𝐍 ⬇️❯:\n\n❲🍂❳ ➜ 𝙀𝙇 𝙀𝙉𝙇𝘼𝘾𝙀 𝙄𝙉𝙂𝙍𝙀𝙎𝘼𝘿𝙊 𝙉𝙊 𝙀𝙎 𝙑𝘼𝙇𝙄𝘿𝙊 𝙋𝘼𝙍𝘼 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊.')
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
     if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: 'https://chat.whatsapp.com/GtUSgN0j6ctJfLIUfCwGgL', thumbnail: './Menu2.jpg'}}}, { quoted: m })
    else throw '❮🍀 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀 / 𝐁𝐎𝐓 𝐖𝐀𝐑𝐍 🍀❯:\n\n❲🍏❳ ➜ 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊, 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝘼 𝘼 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉, 𝙑𝙄𝘿𝙀𝙊, 𝙂𝙄𝙁, 𝙋𝘼𝙍𝘼 𝙀𝙎𝙏𝙀 𝙐𝙎𝙊 𝘿𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊.'
  }
user.lastmiming = new Date * 1
}
handler.help = ['sticker']
handler.tags = ['sticker']
handler.command = ['s', 'sticker', 'stiker'] 

export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
