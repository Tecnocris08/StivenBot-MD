import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `𝙃𝙤𝙡𝙖 ${user}, 𝙮𝙖 𝙚𝙨𝙩𝙖𝙨 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙤 𝙚𝙣 𝙢𝙞 𝙗𝙖𝙨𝙚 𝙙𝙚 𝙙𝙖𝙩𝙤𝙨, 𝙦𝙪𝙞𝙚𝙧𝙚𝙨 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧𝙩𝙚 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤?\n\n𝙀𝙡𝙞𝙢𝙞𝙣𝙖 𝙩𝙪 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙤 𝙘𝙤𝙣 𝙩𝙪 𝙣𝙪𝙢𝙚𝙧𝙤 𝙙𝙚 𝙨𝙚𝙧𝙞𝙚.\n*${usedPrefix}unreg* <Número de serie>`;
  if (!Reg.test(text)) throw `*♨️ 𝙀𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙙𝙤 𝙚𝙨 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤, 𝙪𝙨𝙚𝙡𝙤 𝙙𝙚 𝙚𝙨𝙩𝙖 𝙛𝙤𝙧𝙢𝙖: *${usedPrefix + command} nombre.edad*\n𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} Stiven.19*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '😏 ${user} te falto el nombre.';
  if (!age) throw '😏 La edad es necesaria para el registro querido/a estimado/a';
  if (name.length >= 30) throw '♨️ Nombre erroneo, tu nombre tiene mas de 30 caracteres, use uno que no sea largo.';
  age = parseInt(age);
  if (age > 60) throw '*[❗] 𝘞𝘩𝘢𝘵𝘴,𝘊𝘰𝘮𝘰 𝘝𝘪𝘷𝘦𝘴 𝘉𝘪𝘦𝘫𝘰? 👴🏻*';
  if (age < 5) throw '*[❗] 𝘊𝘰𝘮𝘰 𝘘𝘶𝘦 𝘜𝘯 𝘉𝘦𝘣𝘦́ 𝘚𝘢𝘣𝘦 𝘜𝘴𝘢𝘳 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱? 😲*';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `
╭• •❲🌌 *_REGISTRO_* 🌌❳• •╮
┆
┆🌇➢ *NOMBRE/NAME:*
┆• ${name}
┆•┄┄┄┄┄┄┄┄┄┄┄•
┆🌇➢ *EDAD/AGE:*
┆• ${age} años
┆•┄┄┄┄┄┄┄┄┄┄┄•
┆🌇➢ *NRO DE SERIE:* 
┆• ${sn}
╰• •╌╌╌╌╌╌╌╌╌╌╌╌╌╌• •╯`;
  // let author = global.author
  await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);
  // conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(verify|register|verificar|reg|registrar)$/i;
export default handler;
