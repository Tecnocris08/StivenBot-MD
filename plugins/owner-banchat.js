const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('𝐄𝐋 𝐂𝐇𝐀𝐓 𝐅𝐔𝐄 𝐁𝐀𝐍𝐄𝐀𝐃𝐎 𝐂𝐎𝐍 𝐄𝐗𝐈𝐓𝐎, 𝐍𝐀𝐃𝐈𝐄 𝐏𝐎𝐃𝐑𝐀 𝐔𝐒𝐀𝐑 𝐒𝐓𝐈𝐕𝐄𝐍 𝐁𝐎𝐓 𝐌𝐃.');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^banchat$/i;
handler.rowner = true;
export default handler;
