const handler = async (m, {usedPrefix}) => {
  try {
    delete global.chatgpt.data.users[m.sender];
    m.reply(`*[❗] 𝚂𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙴𝙻 𝙷𝙸𝚂𝚃𝙾𝚁𝙸𝙰𝙻 𝙳𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝙴𝙽𝚃𝚁𝙴 𝚄𝚂𝚃𝙴𝙳 𝚈 𝙲𝙷𝙰𝚃𝙶𝙿𝚃 (𝙸𝙰)*\n\n*—◉ 𝚁𝙴𝙲𝚄𝙴𝚁𝙳𝙴 𝚀𝚄𝙴 𝙿𝚄𝙴𝙳𝙴 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙲𝚄𝙰𝙽𝙳𝙾 𝚃𝙴𝙽𝙶𝙰 𝙰𝙻𝙶𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙴𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix}chatgpt2 O ${usedPrefix}ia2*`);
  } catch (error1) {
    console.log(error1);
    throw `*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*`;
  }
};
handler.command = ['delchatgpt'];
export default handler;
