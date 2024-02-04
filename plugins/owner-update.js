import {execSync} from "child_process"
let handler = async (m, {conn, text}) => {
  await m.reply(`♻️ 𝘼𝘾𝙏𝙐𝘼𝙇𝙄𝙕𝘼𝙉𝘿𝙊 ♻️:\n𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁, 𝙴𝚂𝙿𝙴𝚁𝙴 𝙰 𝚀𝚄𝙴 𝙴𝚂𝚃𝙴 𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝙳𝙾.`)
  try {
    if (global.conn.user.jid == conn.user.jid) {
      let stdout = execSync("git pull" + (m.fromMe && text ? " " + text : ""))
      await await await conn.reply(m.chat, stdout.toString(), m)
    }
  } catch {
    var update = execSync("git remote set-url origin https://github.com/Tecnocris08/StivenBot-MD.git && git pull")
    await await await m.reply(update.toString())
  }
};
handler.help = ["update"]
handler.tags = ["owner"]
handler.command = /^update|actualizar$/i
handler.rowner = true
export default handler