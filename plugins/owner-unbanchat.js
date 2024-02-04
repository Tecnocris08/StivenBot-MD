const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('✅ 𝙀𝙡 𝙘𝙝𝙖𝙩 𝙛𝙪𝙚 𝙙𝙚𝙨𝙗𝙖𝙣𝙚𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤, 𝙮𝙖 𝙥𝙪𝙚𝙙𝙚𝙣 𝙪𝙨𝙖𝙧 𝙚𝙡 𝙗𝙤𝙩.');
};
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^unbanchat$/i;
handler.rowner = true;
export default handler;

