const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `[❗] 𝗜𝗻𝗴𝗿𝗲𝘀𝗮 𝗲𝗹 𝗿𝗲𝗽𝗼𝗿𝘁𝗲\n\n𝗘𝗷𝗲𝗺𝗽𝗹𝗼:\n*${usedPrefix + command}* 𝗘𝗹 𝗰𝗼𝗺𝗮𝗻𝗱𝗼 ${usedPrefix}𝗠𝗲𝗻𝘂 𝗺𝗮𝗻𝗱𝗮 𝗲𝗿𝗿𝗼𝗿`;
  if (text.length < 10) throw `[❗] 𝐑𝐞𝐩𝐨𝐫𝐭𝐞 𝐦𝐢𝐧𝐢𝐦𝐨 𝐝𝐞 10 𝐜𝐚𝐫𝐚𝐜𝐭𝐞𝐫𝐞𝐬`;
  if (text.length > 1000) throw `[❗] 𝐑𝐞𝐩𝐨𝐫𝐭𝐞 𝐦𝐚𝐱𝐢𝐦𝐨 𝐝𝐞 1000 𝐜𝐚𝐫𝐚𝐜𝐭𝐞𝐫𝐞𝐬`;
  const teks = `
•───❲🌲 𝙎𝙩𝙞𝙫𝙚𝙣𝘽𝙤𝙩-𝙈𝘿 🌲❳───•

❮👤 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 👤❯:
• wa.me/${m.sender.split`@`[0]}


❮✉️ 𝐓𝐄𝐗𝐓𝐎 ✉️❯:
• ${text}


❮🎋 𝐁𝐎𝐓 🎋❯:
• StivenBot-MD

•───❲🍃   𝙍𝙀𝙋𝙊𝙍𝙏𝙀𝙎   🍃❳───•`;
  conn.reply('573148624888@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  conn.reply('5493873687620@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedjid: [m.sender]}});
  conn.reply('5491130362550@s.whatsapp.net',m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedjid: [m.sender]}});
  m.reply(`✅ 𝐓𝐔 𝐑𝐄𝐏𝐎𝐑𝐓𝐄 𝐅𝐔𝐄 𝐄𝐍𝐕𝐈𝐀𝐃𝐎 𝐀 𝐋𝐎𝐒 𝐃𝐄𝐒𝐀𝐑𝐑𝐎𝐋𝐋𝐀𝐃𝐎𝐑𝐄𝐒 𝐃𝐄𝐋 𝐁𝐎𝐓,,, 𝐃𝐄 𝐒𝐄𝐑 𝐅𝐀𝐋𝐒𝐎 𝐒𝐄 𝐈𝐆𝐍𝐎𝐑𝐀𝐑𝐀 𝐄𝐋 𝐂𝐎𝐌𝐄𝐍𝐓𝐀𝐑𝐈𝐎,,, 𝐃𝐄 𝐒𝐄𝐑 𝐕𝐄𝐑𝐃𝐀𝐃 𝐒𝐄 𝐓𝐄 𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐄𝐑𝐀 𝐄𝐋 𝐌𝐄𝐍𝐒𝐀𝐉𝐄.`);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(report|reportar|reporte|bugs|bug|report-owner|reportes)$/i;
export default handler;