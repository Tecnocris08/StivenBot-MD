import ws from 'ws';
async function handler(m, { conn: _envio, usedPrefix }) {
  const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
  function convertirMsADiasHorasMinutosSegundos(ms) {
  var segundos = Math.floor(ms / 1000);
  var minutos = Math.floor(segundos / 60);
  var horas = Math.floor(minutos / 60);
  var días = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  var resultado = "";
  if (días !== 0) {
    resultado += días + " días, ";
  }
  if (horas !== 0) {
    resultado += horas + " horas, ";
  }
  if (minutos !== 0) {
    resultado += minutos + " minutos, ";
  }
  if (segundos !== 0) {
    resultado += segundos + " segundos";
  }

  return resultado;
}

  const message = users.map((v, index) => `*${index + 1}.-* @${v.user.jid.replace(/[^0-9]/g, '')}\n*⚓️Enlace:* wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}creador\n*🌹 Nombre:* ${v.user.name || '-'}\n*🌻 Activo:* ${ v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : "Desconocido"}`).join('\n\n');
  const replyMessage = message.length === 0 ? '*🌌 𝙉𝙤 𝙝𝙖𝙮 𝙨𝙪𝙗𝙗𝙤𝙩𝙨 𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙗𝙡𝙚𝙨 𝙥𝙤𝙧 𝙚𝙡 𝙢𝙤𝙢𝙚𝙣𝙩𝙤, 𝙫𝙪𝙚𝙡𝙫𝙖 𝙢𝙖𝙨 𝙩𝙖𝙧𝙙𝙚.*' : message;
  const totalUsers = users.length;
  const responseMessage = `
🌆 𝘼𝙌𝙐𝙄 𝙏𝙄𝙀𝙉𝙀𝙎 𝙇𝘼 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙎𝙐𝘽𝘽𝙊𝙏𝙎 🌆

*𝖢𝖮𝖭𝖤𝖢𝖳𝖠𝖣𝖮𝖲:* ${totalUsers || '0'}

${replyMessage.trim()}`.trim();

  await _envio.sendMessage(m.chat, {text: responseMessage, mentions: _envio.parseMention(responseMessage)}, {quoted: m});
}
handler.command = handler.help = ['listjadibot', 'bots', 'subsbots'];
handler.tags = ['jadibot'];
export default handler;