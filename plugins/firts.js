export async function before(m) {

const username = conn.getName(m.sender)
  const fkontak = {
    'key': {
      'participants': '0@s.whatsapp.net',
      'remoteJid': 'status@broadcast',
      'fromMe': false,
      'id': 'Halo',
    },
    'message': {
      'contactMessage': {
        'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
    'participant': '0@s.whatsapp.net',
  };
const pp = './Menu2.jpg'

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let user = global.db.data.users[m.sender] 
if (new Date() - user.pc < 21600000) return
await m.reply(`╔╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•
┃   👑 𝙎𝙩𝙞𝙫𝙚𝙣 𝘽𝙤𝙩 - 𝙈𝘿 𝙊𝙁𝘾 👑
╚╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•

🌹 𝘏𝘰𝘭𝘢 𝘶𝘴𝘶𝘢𝘳𝘪𝘰/𝘢: ${username}
𝘣𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘰/𝘢 𝘢 𝘚𝘵𝘪𝘷𝘦𝘯𝘉𝘰𝘵-𝘔𝘋 🍀
𝘶𝘯 𝘣𝘰𝘵 𝘱𝘢𝘳𝘢 𝘶𝘴𝘰 𝘱𝘶𝘣𝘭𝘪𝘤𝘰! 🎋


¿𝘘𝘶𝘪𝘦𝘳𝘦𝘴 𝘷𝘦𝘳 𝘭𝘰𝘴 𝘤𝘰𝘮𝘢𝘯𝘥𝘰𝘴?
🌲 𝘌𝘴𝘤𝘳𝘪𝘣𝘢 𝘦𝘴𝘵𝘰𝘴 𝘤𝘰𝘮𝘢𝘯𝘥𝘰𝘴:

*.menu*
• 𝘝𝘦𝘳 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘤𝘰𝘮𝘱𝘭𝘦𝘵𝘰.

*.sticker / .s*
• 𝘔𝘢𝘯𝘥𝘢 𝘰 𝘳𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘢 𝘶𝘯𝘢 𝘪𝘮𝘢𝘨𝘦𝘯 𝘤𝘰𝘯 𝘦𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘱𝘢𝘳𝘢 𝘤𝘳𝘦𝘢𝘳 𝘴𝘵𝘪𝘤𝘬𝘦𝘳.

*.play*
• 𝘌𝘴𝘤𝘳𝘪𝘣𝘦 𝘦𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘮𝘢𝘴 𝘦𝘭 𝘯𝘰𝘮𝘣𝘳𝘦 𝘥𝘦 𝘭𝘢 𝘤𝘢𝘯𝘤𝘪𝘰𝘯 𝘲𝘶𝘦 𝘣𝘶𝘴𝘲𝘶𝘦𝘴. 𝘗𝘢𝘳𝘢 𝘶𝘯 𝘧𝘰𝘳𝘮𝘢𝘵𝘰 𝘥𝘦 𝘈𝘶𝘥𝘪𝘰.

*.play2*
• 𝘌𝘴𝘤𝘳𝘪𝘣𝘦 𝘦𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘮𝘢𝘴 𝘦𝘭 𝘯𝘰𝘮𝘣𝘳𝘦 𝘥𝘦𝘭 𝘷𝘪𝘥𝘦𝘰 𝘰 𝘦𝘯𝘭𝘢𝘤𝘦 𝘥𝘦 𝘺𝘰𝘶𝘵𝘶𝘣𝘦 𝘱𝘢𝘳𝘢 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳𝘭𝘰 𝘦𝘯 𝘧𝘰𝘳𝘮𝘢𝘵𝘰 𝘥𝘦 𝘷𝘪𝘥𝘦𝘰.

*.fb*
• 𝘌𝘴𝘤𝘳𝘪𝘣𝘦 𝘦𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘮𝘢𝘴 𝘦𝘭 𝘦𝘯𝘭𝘢𝘤𝘦 𝘥𝘦 𝘶𝘯 𝘷𝘪𝘥𝘦𝘰 𝘥𝘦 𝘧𝘢𝘤𝘦𝘣𝘰𝘰𝘬 𝘱𝘢𝘳𝘢 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳𝘭𝘰.


👑 𝐃𝐄𝐒𝐀𝐑𝐑𝐎𝐋𝐋𝐀𝐃𝐎𝐑𝐄𝐒 👑

*Creador:*
• wa.me/573148624888

*SupportBots:*
• wa.me/5493873687620

*GuardianBot:*
• wa.me/19145948340`) 
  await conn.sendFile(m.chat, pp, 'stiven.jpg', text, m);
user.pc = new Date * 1
}