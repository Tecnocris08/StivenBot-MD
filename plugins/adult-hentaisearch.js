import cheerio from 'cheerio';
import axios from 'axios';
const handler = async (m, {conn, text, __dirname, usedPrefix, command}) => {
  if (!global.db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] ℒ𝓐 ℬ𝓘ℬℒ𝓘𝓐 𝓝𝓞 𝓢𝓔 𝓟𝓤𝓔𝓓𝓔 ℒ𝓔𝓔ℛ 𝓔𝓝 𝓔𝓢𝓣𝓔 𝓖ℛ𝓤𝓟𝓞, 𝓢𝓘 𝓔ℛ𝓔𝓢 𝓐𝓓ℳ𝓘𝓝 𝓨 𝓠𝓤𝓘𝓔ℛ𝓔 𝓐𝓒𝓣𝓘𝓥𝓐ℛℒ𝓞𝓢 𝓤𝓢𝓔 𝓔ℒ 𝓒𝓞ℳ𝓐𝓝𝓓𝓞 #enable modohorny*';
  if (!text) throw '*[❗] 𝓔𝓢𝓒ℛ𝓘ℬ𝓐 𝓔ℒ 𝓝𝓐ℳ𝓔 𝓓𝓔 𝓐ℒ𝓖𝓤𝓝 ℋ𝓔𝓝𝓣𝓐𝓘 𝓐 ℬ𝓤𝓢𝓒𝓐ℛ*';
  const searchResults = await searchHentai(text);
  let teks = searchResults.result.map((v, i) => `
${i+1}. *_${v.title}_*
↳ 📺 *_Vistas:_* ${v.views}
↳ 🎞️ *_Link:_* ${v.url}`).join('\n\n');
  let randomThumbnail;
  if (searchResults.result.length > 0) {
    const randomIndex = Math.floor(Math.random() * searchResults.result.length);
    randomThumbnail = searchResults.result[randomIndex].thumbnail;
  } else {
    randomThumbnail = 'https://pictures.hentai-foundry.com/e/Error-Dot/577798/Error-Dot-577798-Zero_Two.png';
    teks = '*[❗] 𝓝𝓞 𝓔𝓝𝓒𝓞𝓝𝓣ℛ𝓐ℳ𝓞𝓢 ℛ𝓔𝓢𝓤ℒ𝓣𝓐𝓓𝓞𝓢*';
  }
  conn.sendFile(m.chat, randomThumbnail, 'error.jpg', teks, m);
};
handler.command = /^(hentaisearch|searchhentai)$/i;
export default handler;
async function searchHentai(search) {
  return new Promise((resolve, reject) => {
    axios.get('https://hentai.tv/?s=' + search).then(async ({data}) => {
      const $ = cheerio.load(data);
      const result = {};
      const res = [];
      result.coder = 'rem-comp';
      result.result = res;
      result.warning = 'It is strictly forbidden to reupload this code, copyright © 2022 by rem-comp';
      $('div.flex > div.crsl-slde').each(function(a, b) {
        const _thumbnail = $(b).find('img').attr('src');
        const _title = $(b).find('a').text().trim();
        const _views = $(b).find('p').text().trim();
        const _url = $(b).find('a').attr('href');
        const hasil = {thumbnail: _thumbnail, title: _title, views: _views, url: _url};
        res.push(hasil);
      });
      resolve(result);
    }).catch((err) => {
      console.log(err);
    });
  });
}
