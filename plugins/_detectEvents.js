// Creditos del codigo a @Gatito-kw //

/* GitHub: https://github.com/Gatito-kw */

/* Bot: https://github.com/Gatito-kw/nekobot-md */

import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, {conn, participants}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  const groupName = (await conn.groupMetadata(m.chat)).subject;
  const groupAdmins = participants.filter((p) => p.admin);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const img = await (await fetch(pp)).buffer();
  const chat = global.db.data.chats[m.chat];
  const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)];
  const mentionsContentM = [m.sender, m.messageStubParameters[0]];
  const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

  if (chat.detect2 && m.messageStubType == 29) {
    let txt1 = `*NUEVO ADMIN DEL GRUPO...*\n\n`;
    txt1 += `*◦  𝙂𝙧𝙪𝙥𝙤:* ${groupName}\n`;
    txt1 += `*◦  𝙉𝙪𝙚𝙫𝙤 𝘼𝙙𝙢𝙞𝙣:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt1 += `*◦  𝙇𝙚 𝘿𝙞𝙤́ 𝘼𝙙𝙢𝙞:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt1, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 30) {
    let txt2 = `*FUE DESCARTADO COMO ADMIN....*\n\n`;
    txt2 += `*◦  𝙂𝙧𝙪𝙥𝙤:* ${groupName}\n`;
    txt2 += `*◦  𝙎𝙚 𝙌𝙪𝙞𝙩𝙤 𝘼:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt2 += `*◦  𝙃𝙚𝙘𝙝𝙤 𝙋𝙤𝙧:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt2, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 27) {
    let txt3 = `*NUEVO PARTICIPANTE...*\n\n`;
    txt3 += `*◦  𝙂𝙧𝙪𝙥𝙤:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt3 += `*◦  𝙎𝙚 𝘼𝙣̃𝙖𝙙𝙞𝙤 𝘼:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt3 += `*◦  𝘼𝙘𝙚𝙥𝙩𝙖𝙙𝙤 𝙋𝙤𝙧:* @${m.sender.split`@`[0]}`;
    } else {
      txt3 += `*◦  𝙎𝙚 𝘼𝙣̃𝙖𝙙𝙞𝙤:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: img, caption: txt3, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 28) {
    let txt4 = `*UN PARTICIPANTE MENOS....*\n\n`;
    txt4 += `*◦  𝙂𝙧𝙪𝙥𝙤:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt4 += `*◦  𝙋𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt4 += `*◦  𝙃𝙚𝙘𝙝𝙤 𝙋𝙤𝙧:* @${m.sender.split`@`[0]}`;
    } else {
      txt4 += `*◦  𝙎𝙚 𝙀𝙡𝙞𝙢𝙞𝙣𝙤 𝘼:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt4, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 32) {
    let ax;
    if (m.messageStubParameters[0] === m.sender) {
      ax = 'SALIDO';
    } else {
      ax = 'SIDO ELIMINADO';
    }
    let txt5 = `*UN/A USUARIO/A A ${ax} DEL GRUPO...*\n\n`;
    txt5 += `*◦  𝙂𝙧𝙪𝙥𝙤:* ${groupName}\n`;
    if (ax === 'eliminado') {
      txt5 += `*◦  𝙎𝙚 𝙀𝙡𝙞𝙢𝙞𝙣𝙤 𝘼:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt5 += `*◦  𝙃𝙚𝙘𝙝𝙤 𝙋𝙤𝙧:* @${m.sender.split`@`[0]}`;
    } else {
      txt5 += `*◦  𝙎𝙚 𝙎𝙖𝙡𝙞𝙤:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt5, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 26) {
    let accion;
    if (m.messageStubParameters[0].split`@`[0] === 'on') {
      accion = 'cerrado';
    } else {
      accion = 'abierto';
    }
    let txt6 = `*SE CONFIGURO EL GRUPO...*\n\n`;
    txt6 += `*◦  𝙂𝙧𝙪𝙥𝙤:* ${groupName}\n`;
    txt6 += `*◦  𝙀𝙡 𝙂𝙧𝙪𝙥𝙤 𝙎𝙚 𝘼:* ${'```' + accion + '```'}\n`;
    txt6 += `*◦  𝙀𝙟𝙚𝙘𝙪𝙩𝙖𝙙𝙤 𝙋𝙤𝙧:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt6, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 21) {
    let txt7 = `*SE HA CAMBIADO EL NOMBRE....*\n\n`;
    txt7 += `*◦  𝙉𝙪𝙚𝙫𝙤 𝙉𝙤𝙢𝙗𝙧𝙚:* ${'```' + groupName + '```'}\n`;
    txt7 += `*◦  𝙃𝙚𝙘𝙝𝙤 𝙋𝙤𝙧:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt7, mentions: mentionsContentM}, {quoted: fkontak2});
  }
} /* Cierre del comando */
