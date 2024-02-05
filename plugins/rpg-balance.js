const handler = async (m, {usedPrefix}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const name = conn.getName(who);
  m.reply(`
┌┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
┃🌌 𝙎𝙩𝙞𝙫𝙚𝙣𝘽𝙤𝙩-𝙈𝘿 - 𝘽𝙖𝙡𝙖𝙣𝙘𝙚 🌌
└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
╭•╥•╌•╌•╌•╌•╌•╌•╌•╌•╌•╌•╌•╌•╮
╎•║❲👤❳ ➛ *Nombre:*
╎•║◊ ${name}
╎•║•┈┈┈┈┈┈┈┈┈┈┈┈┈┈•
╎•║❲💎❳ ➛ *Diamante*:
╎•║◊ ${global.db.data.users[who].diamond}
╎•║•┈┈┈┈┈┈┈┈┈┈┈┈┈┈•
╎•║❲✨❳ ➛ *Exp:*
╎•║◊ ${global.db.data.users[who].exp}
╰•╨•╌•╌•╌•╌•╌•╌•╌•╌•╌•╌•╌•╌•╯

╭•╥•╌•╌•╌•╌•╌•╌•╌•╌•╌•╌•╌•╌•╮
╎•║ *_NOTA / NOTE_*
╎•║•┈┈┈┈┈┈┈┈┈┈┈┈┈┈•
╎•║ *𝙿𝚞𝚎𝚍𝚎𝚜 𝚌𝚘𝚖𝚙𝚛𝚊𝚛 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜 💎*
╎•║ *𝚞𝚜𝚊𝚗𝚍𝚘 𝚕𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜*
╎•║ *${usedPrefix}buy <cantidad>*
╎•║ *${usedPrefix}buyall*
╰•╨•╌•╌•╌•╌•╌•╌•╌•╌•╌•╌•╌•╌•╯`)
};
handler.help = ['bal'];
handler.tags = ['xp'];
handler.command = ['bal', 'diamantes', 'diamond', 'balance'];
export default handler;
