const handler = async (m, {usedPrefix}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const name = conn.getName(who);
  m.reply(`╭─╮─᤻─᳒─᤻᳒「░⃟⃜🍭ꪳ۫₎۬۟〬𝐁𝐀𝐋𝐀𝐍𝐂𝐄░⃟⃜🐾⁩」
├❥ᰰຼ💎⃟ᬽ៸ *Nombre:* ${name}
├❥ᰰຼ💎⃟ᬽ៸ *Diamante*: ${global.db.data.users[who].diamond} 💎
├❥ᰰຼ💎⃟ᬽ  *Exp:* ${global.db.data.users[who].exp}
╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🪁◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸┄̸࣭࣭࣭࣭࣭ٜ۫╯

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐NOTA*️⃟ᬽ፝֟━*
├❥ᰰຼ *𝙿𝚞𝚎𝚍𝚎𝚜 𝚌𝚘𝚖𝚙𝚛𝚊𝚛 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜 💎*
├❥ᰰຼ *𝚞𝚜𝚊𝚗𝚍𝚘 𝚕𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜*
├❥ᰰຼ ❏ *${usedPrefix}buy <cantidad>*
├❥ᰰຼ ❏ *${usedPrefix}buyall*
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`)
};
handler.help = ['bal'];
handler.tags = ['xp'];
handler.command = ['bal', 'diamantes', 'diamond', 'balance'];
export default handler;
