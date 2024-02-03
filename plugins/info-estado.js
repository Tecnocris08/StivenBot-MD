const handler = async (m, {conn}) => {
  try {
    const pp = imagen6;
    const img = await(await fetch('https://i.postimg.cc/bJzmrP49/23d607d6ca927a861f67d64a8c324e3d.jpg')).buffer();
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const str = `┏•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•
┃𝑺𝑻𝑰𝑽𝑬𝑵 𝑩𝑶𝑻 𝑴𝑫
┃
┃👑 𝘏𝘰𝘭𝘢: ${taguser}
┃
┃✯ ⚙️ 𝘈𝘤𝘵𝘪𝘷𝘰:* ${uptime}
┃✯ ♻️ 𝘉𝘰𝘵 𝘜𝘴𝘰 𝘗𝘶𝘣𝘭𝘪𝘤𝘰*
┃✯︎ 🧩 𝘖𝘸𝘯𝘦𝘳: StivenGod*
┃✯︎ 💎 𝘊𝘶𝘦𝘯𝘵𝘢𝘴 𝘖𝘧𝘤:* 
╰•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•`.trim();
    if (m.isGroup) {
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://wa.me/573148624888`, "sourceUrl": `https://wa.me/573148624888`}}}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://wa.me/573148624888`, "sourceUrl": `https://wa.me/573148624888`}}}, {quoted: fkontak2});
    }
  } catch {
  }
};
handler.help = ['estado'];
handler.tags = ['main'];
handler.command = /^(estado|status|estate|state|stado|stats|runtime|uptime)$/i;
export default handler;
function clockString(ms) {
  const d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [`\n│ *=>` + d, ' Día(s)* ', `\n│ *=>` + h, ' Hora(s)* ', `\n│ *=> ` + m, ' Minuto(s)* ', `\n│ *=> ` + s, ' Segundo(s)* '].map((v) => v.toString().padStart(2, 0)).join('');
}
