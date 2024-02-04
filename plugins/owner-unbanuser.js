const handler = async (m, {conn, text}) => {
  if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 @𝚝𝚊𝚐 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*';
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 @𝚝𝚊𝚐 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*';
  const users = global.db.data.users;
  users[who].banned = false;
  conn.reply(m.chat, `✅ 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙛𝙪𝙚 𝙙𝙚𝙨𝙗𝙖𝙣𝙚𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤, 𝙥𝙪𝙚𝙙𝙚 𝙪𝙨𝙖𝙧 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙪𝙚𝙫𝙖𝙢𝙚𝙣𝙩𝙚.`, m);
};
handler.help = ['unbanuser'];
handler.tags = ['owner'];
handler.command = /^unbanuser$/i;
handler.rowner = true;
export default handler;