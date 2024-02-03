import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  try {
    const res = await fetch('https://api.thedogapi.com/v1/images/search');
    const img = await res.json();
    const caption = `_➢ ⃟⃞❆𖤍𝙔𝙚𝙅𝙤𝙩𝙖-𝙈𝘿𖤍𖣘 ⃟⃞❆_`.trim();
    conn.sendFile(m.chat, img[0].url, 'dog.jpg', caption, m);
  } catch {
    throw '*Error!*';
  }
};
handler.help = ['dog'];
handler.tags = ['random'];
handler.command = /^dog$/i;
handler.fail = null;
export default handler;
