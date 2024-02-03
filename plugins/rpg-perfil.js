import {createHash} from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, participants, isPrems}) => {
  let pp = 'https://i.postimg.cc/qqYP4jT4/d5fbd27b78a00889e2559207c1e4c078.jpg';
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  if (!(who in global.db.data.users)) throw `El usuario que está mencionando no está registrado en mi base de datos`;
  try {
    pp = await conn.profilePictureUrl(who);
  } catch (e) {
  } finally {
    const {name, limit, lastclaim, registered, regTime, age, premiumTime} = global.db.data.users[who];
    const username = conn.getName(who);
    const prem = global.prems.includes(who.split `@` [0]);
    const sn = createHash('md5').update(who).digest('hex');
    const str = `*❨🌌❩ ➔ 𝘕𝘰𝘮𝘣𝘳𝘦:* ${username} ${registered ? '(' + name + ') ': ''}

*❨🌌❩ ➔ 𝘕𝘶𝘮𝘦𝘳𝘰:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}

*❨🌌❩ ➔ 𝘓𝘪𝘯𝘬:* wa.me/${who.split`@`[0]}${registered ? '\n*𝙴𝙳𝙰𝙳:* ' + age + ' años' : ''}

*❨🌌❩ ➔ 𝘓𝘪𝘮𝘪𝘵𝘦:* ${limit} 𝚄𝚂𝙾𝚂

*❨🌌❩ ➔ 𝘙𝘦𝘨𝘪𝘴𝘵𝘳𝘢𝘥𝘰:* ${registered ? '✅': '❎'}

*❨🌌❩ ➔ 𝘗𝘳𝘦𝘮𝘪𝘶𝘮:* ${premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❎') || ''}

*❨🌌❩ ➔ 𝘕𝘶𝘮𝘦𝘳𝘰 𝘋𝘦 𝘚𝘦𝘳𝘪𝘦:* 
${sn}`;
    conn.sendMessage(m.chat, {image: {url: pp}, caption: str}, {quoted: m});
  }
};
handler.help = ['profile [@user]'];
handler.tags = ['xp'];
handler.command = /^perfil|profile?$/i;
export default handler;
