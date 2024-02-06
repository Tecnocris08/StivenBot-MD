import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `⚠️Iɴɢʀᴇsᴀ Eʟ Nᴏᴍʙʀᴇ Dᴇ Lᴀ Aᴘʟɪᴄᴀᴄɪᴏ́ɴ Qᴜᴇ Qᴜɪᴇʀᴀs Dᴇsᴄᴀʀɢᴀʀ`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `❮⬇️ 𝘽𝙊𝙏 𝘼𝙋𝙆 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 ⬇️❯:\n\n❲🚀 𝑵𝒐𝒎𝒃𝒓𝒆 🚀❳:\n• ${data5.name}\n\n❲🌐 𝑷𝒂𝒄𝒌𝒂𝒈𝒆 🌐❳:\n• ${data5.package}\n\n❲♻️ 𝑼𝒍𝒕𝒊𝒎𝒂 𝑨𝒄𝒕𝒖𝒂𝒍𝒊𝒛𝒂𝒄𝒊𝒐𝒏 ♻️❳:\n• ${data5.lastup}\n\n❲📄 𝑷𝒆𝒔𝒐/𝑻𝒂𝒎𝒂𝒏̃𝒐 📄❳:\n• ${data5.size}`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '*[ ⛔ ] El archivo es demasiado pesado por lo que no se enviará.*'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: '👾 𝙎𝙩𝙞𝙫𝙚𝙣𝘽𝙤𝙩 𝙈𝘿 - 𝘼𝙋𝙆 👾'}, {quoted: m});
  } catch {
    throw `*[❗] Error, no se encontrarón resultados para su búsqueda.*`;
  }    
};
handler.command = /^(apk|modapk|dapk2|aptoide|aptoidedl)$/i;
export default handler;
