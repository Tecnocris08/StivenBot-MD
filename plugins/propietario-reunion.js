let handler = async(m, { conn, command, text }) => {

  let users = m.sender.split`@`[0]
  if ( users == 5493873687620 || users == 573001592698 || users == 573148624888 || users == 5491130362550) try {
  if (!text) return m.reply(`🤖 𝙃𝙤𝙡𝙖 𝙪𝙨𝙪𝙖𝙧𝙞𝙤, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙟𝙪𝙨𝙩𝙞𝙛𝙞𝙦𝙪𝙚 𝙚𝙡 𝙢𝙤𝙩𝙞𝙫𝙤 𝙥𝙖𝙧𝙖 𝙡𝙖 𝙧𝙚𝙪𝙣𝙞𝙤𝙣 𝙙𝙚 𝙎𝙩𝙞𝙫𝙚𝙣𝘽𝙤𝙩-𝙈𝘿`)
    if (text.length < 10) return m.reply(`🎋 𝙀𝙡 𝙢𝙤𝙩𝙞𝙫𝙤 𝙙𝙚 𝙩𝙪 𝙘𝙤𝙢𝙚𝙣𝙩𝙖𝙧𝙞𝙤 𝙚𝙨 𝙢𝙪𝙮 𝙘𝙤𝙧𝙩𝙤, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙢𝙞𝙣𝙞𝙢𝙤 𝙚𝙨𝙘𝙧𝙞𝙗𝙖 𝙝𝙖𝙨𝙩𝙖 10 𝙘𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙚𝙨.`)

    let texto = `𝙃𝙤𝙡𝙖 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙮 𝙨𝙪𝙗 𝙙𝙚𝙨𝙖𝙧𝙧𝙤𝙡𝙡𝙖𝙙𝙤𝙧𝙚𝙨, 𝙚𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤: @${m.sender.split`@`[0]} 𝙖 𝙨𝙤𝙡𝙞𝙘𝙞𝙩𝙖𝙙𝙤 𝙡𝙖 𝙥𝙧𝙚𝙨𝙚𝙣𝙘𝙞𝙖 𝙙𝙚 𝙡𝙤𝙨 𝙘𝙧𝙚𝙖𝙙𝙤𝙧𝙚𝙨.

𝙏𝙀𝙓𝙏𝙊:
¡${text}

🍃 𝙎𝙩𝙞𝙫𝙚𝙣𝘽𝙤𝙩-𝙈𝘿 🍃`
m.reply('✅ 𝙏𝙪 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙨𝙚 𝙝𝙖 𝙚𝙣𝙫𝙞𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤 𝙖 𝙡𝙤𝙨 𝙘𝙧𝙚𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩, 𝙚𝙨𝙥𝙚𝙧𝙚 𝙨𝙪𝙨 𝙧𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖𝙨.')
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                        conn.sendPayment(data.jid, '99', texto, m)}
  } catch (e) { await conn.reply(m.chat, '⚠️ 𝙀𝙍𝙍𝙊𝙍 ⚠️ 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊.', m)
               console.log(e)
               } else {
    await m.reply('📛 𝙉𝙊 𝙏𝙄𝙀𝙉𝙀𝙎 𝙋𝙀𝙍𝙈𝙄𝙎𝙊 𝙋𝘼𝙍𝘼 𝙐𝙎𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊.')}

                           // conn.reply(data.jid, text, m, { mentions: [m.sender] })


}
handler.tags = ['owner']
handler.command = handler.help =['reunion']
handler.rowner = true

export default handler