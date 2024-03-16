import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];

 await conn.sendMessage(m.chat, { react: { text: '🥳', key: m.key } })


const document = doc[Math.floor(Math.random() * doc.length)];
 const str = `${conn.user.jid == global.conn.user.jid ? 'BOT OFICIAL' : `SUB BOT DE: *@${global.conn.user.jid.split`@`[0]}*`}

*╔═══❖•ೋ°ৡৢ͜͡  🎊 𖥨֗°ೋ•❖═══╗*
*║        ঔৣ͜͡ீ͜❥͜𝐒𝐓𝐈𝐕𝐄𝐍 𝐁𝐎𝐓 𝐌𝐃ू ፝͜❥*
*╚═══❖•ೋ°ৡৢ͜͡  🎊 𖥨֗°ೋ•❖═══╝*
╭─╼━━══━━━≺🍃≻━━━══━━╾─╮
┃𝑊𝑒𝑙𝑐𝑜𝑚𝑒 ${taguser}
┠─────────────────•
┠➥ 𝐓𝐈𝐄𝐌𝐏𝐎: *${uptime}*
┃
┠➥ 𝐎𝐖𝐍𝐄𝐑𝐒: *2*
┃
┠➥ 𝐂𝐑𝐄𝐀𝐃𝐎𝐑: *𝘚𝘵𝘪𝘷𝘦𝘯 𝘎𝘰𝘥*
┃
┠➥ 𝐔𝐒𝐄𝐑 𝐓𝐎𝐓𝐀𝐋: *${rtotal}*
┃
┠➥ 𝐅𝐄𝐂𝐇𝐀: *${date}*
┃
┠➥ 𝐔𝐒𝐄𝐑 𝐑𝐄𝐆𝐒: *${rtotalreg}*
┃
┠➥ 𝐓𝐈𝐏𝐎 𝐃𝐄 𝐁𝐎𝐓: *${(conn.user.jid == global.conn.user.jid ? '' : `𝘚𝘜𝘉 𝘉𝘖𝘛`) || '𝘉𝘖𝘛 𝘖𝘍𝘐𝘊𝘐𝘈𝘓'}*
┃
┠➥ 𝐏𝐑𝐄𝐅𝐈𝐉𝐎: *${usedPrefix}*
┃
┠➥ 𝐁𝐎𝐓: _*~StevenBot-MD~*_
╰─╼━━══━━━≺👑≻━━━══━━╾─╯

╭─╼━══━≺•𝑅𝐸𝐶𝑈𝑅𝑆𝑂𝑆•≻━══━╾─╮
╎🍃𝑻𝒖𝒔 𝒓𝒆𝒄𝒖𝒓𝒔𝒐𝒔 𝒅𝒆 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒃𝒐𝒕 𝒆𝒔𝒕𝒂𝒏 𝒂𝒒𝒖𝒊.
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
┃•╮𝗣𝗿𝗲𝗺𝗶𝘂𝗺➤ ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''} 
┃•╎𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗱𝗼➤ ${user.registered === true ? '𝐒𝐈' : '𝐍𝐎'}
┃•╎𝗘𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗶𝗮➤ ${exp}
┃•╎𝗡𝗶𝘃𝗲𝗹➤ ${level} 
┃•╎𝗥𝗮𝗻𝗴𝗼➤ ${role} 
┃•╎𝗗𝗶𝗮𝗺𝗮𝗻𝘁𝗲𝘀➤ ${limit}
┃•╎𝗦𝘁𝗶𝘃𝗲𝗻𝗖𝗼𝗶𝗻𝘀➤ ${money}
┃•╯𝗧𝗼𝗸𝗲𝗻𝘀➤ ${joincount}
╰─╼━━══━━━≺👑≻━━━══━━╾─╯

${readMore}
╭• •═══• ❮🍁 𝐌𝐄𝐍𝐔 🍁❯ •═══• •╮
│𝙍𝙀𝙏𝙍𝘼𝙎𝙊 𝘿𝙀 𝙈𝙀𝙉𝙎𝘼𝙅𝙀𝙎
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
│❒ ➛ Mensajes en espera
│❒ ➛ _${usedPrefix}fixmsgespera_
│❒ ➛ Mensajes en espera (owner)
│❒ ➛ _${usedPrefix}dsowner_
╰• •══════════════════• •╯


╭• •═══• ❮🌲 𝐌𝐄𝐍𝐔 🌲❯ •═══• •╮
│𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝘽𝙊𝙏
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
│❒ ➛ _${usedPrefix}botreglas_
│❒ ➛ _${usedPrefix}terminosycondiciones_
│❒ ➛ _${usedPrefix}grupos_
│❒ ➛ _${usedPrefix}estado_
│❒ ➛ _${usedPrefix}infobot_
│❒ ➛ _${usedPrefix}speedtest_
│❒ ➛ _${usedPrefix}donar_
│❒ ➛ _${usedPrefix}owner_
│❒ ➛ _${usedPrefix}script_
│❒ ➛ _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
╰• •══════════════════• •╯


╭• •═══• ❮🥏 𝐌𝐄𝐍𝐔 🥏❯ •═══• •╮
│𝙐𝙉𝙄𝙍 𝙂𝙍𝙐𝙋𝙊
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
│❒ ➛ _${usedPrefix}join *<enlace / link / url>*_
╰• •══════════════════• •╯


╭• •═══• ❮🤖 𝐌𝐄𝐍𝐔 🤖❯ •═══• •╮
│𝙅𝘼𝘿𝙄𝘽𝙊𝙏 - 𝙎𝙀𝙍𝘽𝙊𝙏
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
│❒ ➛ _${usedPrefix}serbot_
│❒ ➛ _${usedPrefix}deletebot_
│❒ ➛ _${usedPrefix}token_
│❒ ➛ _${usedPrefix}stop_
│❒ ➛ _${usedPrefix}bots_
╰• •══════════════════• •╯


╭• •═══• ❮👑 𝐌𝐄𝐍𝐔 👑❯ •═══• •╮
│𝙊𝙒𝙉𝙀𝙍 𝙊𝙉 𝙔 𝙊𝙁𝙁
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
│❒ ➛ _${usedPrefix}enable restrict_
│❒ ➛ _${usedPrefix}disable restrict_
│❒ ➛ _${usedPrefix}enable autoread_
│❒ ➛ _${usedPrefix}disable autoread_
│❒ ➛ _${usedPrefix}enable antispam_
│❒ ➛ _${usedPrefix}disable antispam_
│❒ ➛ _${usedPrefix}enable anticall_
│❒ ➛ _${usedPrefix}disable anticall_
│❒ ➛ _${usedPrefix}enable modoia_
│❒ ➛ _${usedPrefix}disable modoia_
│❒ ➛ _${usedPrefix}enable audios_bot_
│❒ ➛ _${usedPrefix}disable audios_bot_
│❒ ➛ _${usedPrefix}enable antiprivado_
│❒ ➛ _${usedPrefix}disable antiprivado_
╰• •══════════════════• •╯


╭• •═══• ❮💎 𝐌𝐄𝐍𝐔 💎❯ •═══• •╮
│𝙈𝙐𝙇𝙏𝙄 𝙅𝙐𝙀𝙂𝙊𝙎
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
│❒ ➛ _${usedPrefix}love_
│❒ ➛ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
│❒ ➛ _${usedPrefix}fake *<texto1> <@tag> <texto2>*_
│❒ ➛ _${usedPrefix}ppt *<papel / tijera /piedra>*_
│❒ ➛ _${usedPrefix}prostituto *<nombre / @tag>*_
│❒ ➛ _${usedPrefix}prostituta *<nombre / @tag>*_
│❒ ➛ _${usedPrefix}gay2 *<nombre / @tag>*_
│❒ ➛ _${usedPrefix}lesbiana *<nombre / @tag>*_
│❒ ➛ _${usedPrefix}pajero *<nombre / @tag>*_
│❒ ➛ _${usedPrefix}pajera *<nombre / @tag>*_
│❒ ➛ _${usedPrefix}follar *<nombre / @tag>*_
│❒ ➛ _${usedPrefix}puto *<nombre / @tag>*_
│❒ ➛ _${usedPrefix}puta *<nombre / @tag>*_
│❒ ➛ _${usedPrefix}manco *<nombre / @tag>*_
│❒ ➛ _${usedPrefix}manca *<nombre / @tag>*_
│❒ ➛ _${usedPrefix}rata *<nombre / @tag>*_
│❒ ➛ _${usedPrefix}love *<nombre / @tag>*_
│❒ ➛ _${usedPrefix}doxear *<nombre / @tag>*_
│❒ ➛ _${usedPrefix}pregunta *<texto>*_
│❒ ➛ _${usedPrefix}suitpvp *<@tag>*_
│❒ ➛ _${usedPrefix}slot *<apuesta>*_
│❒ ➛ _${usedPrefix}ttt *<nombre sala>*_
│❒ ➛ _${usedPrefix}delttt_
│❒ ➛ _${usedPrefix}acertijo_
│❒ ➛ _${usedPrefix}personalidad *<nombre / @tag>*_
│❒ ➛ _${usedPrefix}simi *<texto>*_
│❒ ➛ _${usedPrefix}top *<texto>*_
│❒ ➛ _${usedPrefix}topgays_
│❒ ➛ _${usedPrefix}topotakus_
│❒ ➛ _${usedPrefix}formarpareja_
│❒ ➛ _${usedPrefix}verdad_
│❒ ➛ _${usedPrefix}reto_
│❒ ➛ _${usedPrefix}cancion_
│❒ ➛ _${usedPrefix}pista_
│❒ ➛ _${usedPrefix}akinator_
│❒ ➛ _${usedPrefix}wordfind_
╰• •══════════════════• •╯


╭• •═══• ❮🌎 𝐌𝐄𝐍𝐔 🌎❯ •═══• •╮
│𝙐𝙎𝙀𝙍𝙎 𝙊𝙉 𝙔 𝙊𝙁𝙁
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
│❒ ➛ _${usedPrefix}enable *welcome*_
│❒ ➛ _${usedPrefix}disable *welcome*_
│❒ ➛ _${usedPrefix}enable *modohorny*_
│❒ ➛ _${usedPrefix}disable *modohorny*_
│❒ ➛ _${usedPrefix}enable *antilink*_
│❒ ➛ _${usedPrefix}disable *antilink*_
│❒ ➛ _${usedPrefix}enable *antilink2*_
│❒ ➛ _${usedPrefix}disable *antilink2*_
│❒ ➛ _${usedPrefix}enable *detect*_
│❒ ➛ _${usedPrefix}disable *detect*_
│❒ ➛ _${usedPrefix}enable *audios*_
│❒ ➛ _${usedPrefix}disable *audios*_
│❒ ➛ _${usedPrefix}enable *autosticker*_
│❒ ➛ _${usedPrefix}disable *autosticker*_
│❒ ➛ _${usedPrefix}enable *antiviewonce*_
│❒ ➛ _${usedPrefix}disable *antiviewonce*_
│❒ ➛ _${usedPrefix}enable *antitoxic*_
│❒ ➛ _${usedPrefix}disable *antitoxic*_
│❒ ➛ _${usedPrefix}enable *antitraba*_
│❒ ➛ _${usedPrefix}disable *antitraba*_
│❒ ➛ _${usedPrefix}enable *antiarabes*_
│❒ ➛ _${usedPrefix}disable *antiarabes*_
│❒ ➛ _${usedPrefix}enable *modoadmin*_
│❒ ➛ _${usedPrefix}disable *modoadmin*_
│❒ ➛ _${usedPrefix}enable *antidelete*_
│❒ ➛ _${usedPrefix}disable *antidelete*_
╰• •══════════════════• •╯


╭• •═══• ❮🌐 𝐌𝐄𝐍𝐔 🌐❯ •═══• •╮
│𝙍𝙀𝙋𝙊𝙍𝙏𝙀 𝘿𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
│❒ ➛ _${usedPrefix}reporte *<texto>*_
╰• •══════════════════• •╯


╭• •═══• ❮⬇️ 𝐌𝐄𝐍𝐔 ⬇️❯ •═══• •╮
│𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙎 / 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
│❒ ➛ _${usedPrefix}instagram *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}mediafire *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}gitclone *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}gdrive *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}tiktok *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}tiktokimg *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}xnxxdl *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}xvideosdl *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}twitter *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}fb *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}ytshort *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}ytmp3 *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}ytmp4 *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}ytmp3doc *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}ytmp4doc *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}videodoc *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}dapk2 *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}stickerpack *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}play *<texto>*_
│❒ ➛ _${usedPrefix}play2 *<texto>*_
│❒ ➛ _${usedPrefix}play.1 *<texto>*_
│❒ ➛ _${usedPrefix}play.2 *<texto>*_
│❒ ➛ _${usedPrefix}playdoc *<texto>*_
│❒ ➛ _${usedPrefix}playdoc2 *<texto>*_
│❒ ➛ _${usedPrefix}playlist *<texto>*_
│❒ ➛ _${usedPrefix}spotify *<texto>*_
│❒ ➛ _${usedPrefix}ringtone *<texto>*_
│❒ ➛ _${usedPrefix}soundcloud *<texto>*_
│❒ ➛ _${usedPrefix}imagen *<texto>*_
│❒ ➛ _${usedPrefix}pinterest *<texto>*_
│❒ ➛ _${usedPrefix}wallpaper *<texto>*_
│❒ ➛ _${usedPrefix}pptiktok *<nombre de usuario>*_
│❒ ➛ _${usedPrefix}igstalk *<nombre de usuario>*_
│❒ ➛ _${usedPrefix}igstory *<nombre de usuario>*_
│❒ ➛ _${usedPrefix}tiktokstalk *<username>*_
╰• •══════════════════• •╯


╭• •═══• ❮🎋 𝐌𝐄𝐍𝐔 🎋❯ •═══• •╮
│𝙂𝙊𝙊𝙂𝙇𝙀 / 𝘽𝙐𝙎𝘾𝘼𝘿𝙊𝙍𝙀𝙎
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
│❒ ➛ _${usedPrefix}githubsearch *<texto>*_
│❒ ➛ _${usedPrefix}pelisplus *<texto>*_
│❒ ➛ _${usedPrefix}modapk *<texto>*_
│❒ ➛ _${usedPrefix}stickersearch *<texto>*_
│❒ ➛ _${usedPrefix}stickersearch2 *<texto>*_
│❒ ➛ _${usedPrefix}xnxxsearch *<texto>*_
│❒ ➛ _${usedPrefix}animeinfo *<texto>*_
│❒ ➛ _${usedPrefix}google *<texto>*_
│❒ ➛ _${usedPrefix}letra *<texto>*_
│❒ ➛ _${usedPrefix}wikipedia *<texto>*_
│❒ ➛ _${usedPrefix}ytsearch *<texto>*_
│❒ ➛ _${usedPrefix}playstore *<texto>*_
╰• •══════════════════• •╯


╭• •═══• ❮👥 𝐌𝐄𝐍𝐔 👥❯ •═══• •╮
│𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝙋𝘼𝙍𝘼 𝙂𝙍𝙐𝙋𝙊𝙎
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
│❒ ➛ _${usedPrefix}salir *<admins>*_
│❒ ➛ _${usedPrefix}add *<numero>*_
│❒ ➛ _${usedPrefix}kick *<@tag>*_
│❒ ➛ _${usedPrefix}kick2 *<@tag>*_
│❒ ➛ _${usedPrefix}listanum *<texto>*_
│❒ ➛ _${usedPrefix}kicknum *<texto>*_
│❒ ➛ _${usedPrefix}grupo *<abrir / cerrar>*_
│❒ ➛ _${usedPrefix}grouptime *<opcion> <tiempo>*_
│❒ ➛ _${usedPrefix}promote *<@tag>*_
│❒ ➛ _${usedPrefix}demote *<@tag>*_
│❒ ➛ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
│❒ ➛ _${usedPrefix}demote *<@tag>*_
│❒ ➛ _${usedPrefix}infogroup_
│❒ ➛ _${usedPrefix}resetlink_
│❒ ➛ _${usedPrefix}link_
│❒ ➛ _${usedPrefix}setname *<texto>*_
│❒ ➛ _${usedPrefix}setdesc *<texto>*_
│❒ ➛ _${usedPrefix}invocar *<texto>*_
│❒ ➛ _${usedPrefix}setwelcome *<texto>*_
│❒ ➛ _${usedPrefix}setbye *<texto>*_
│❒ ➛ _${usedPrefix}hidetag *<texto>*_
│❒ ➛ _${usedPrefix}hidetag *<audio>*_
│❒ ➛ _${usedPrefix}hidetag *<video>*_
│❒ ➛ _${usedPrefix}hidetag *<imagen>*_
│❒ ➛ _${usedPrefix}warn *<@tag>*_
│❒ ➛ _${usedPrefix}unwarn *<@tag>*_
│❒ ➛ _${usedPrefix}listwarn_
│❒ ➛ _${usedPrefix}fantasmas_
│❒ ➛ _${usedPrefix}destraba_
│❒ ➛ _${usedPrefix}setpp *<imagen>*_
╰• •══════════════════• •╯


╭• •═══• ❮♻️ 𝐌𝐄𝐍𝐔 ♻️❯ •═══• •╮
│𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙍𝙀𝙎
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
│❒ ➛ _${usedPrefix}toanime *<imagen>*_
│❒ ➛ _${usedPrefix}togifaud *<video>*_
│❒ ➛ _${usedPrefix}toimg *<sticker>*_
│❒ ➛ _${usedPrefix}tomp3 *<video>*_
│❒ ➛ _${usedPrefix}tomp3 *<nota de voz>*_
│❒ ➛ _${usedPrefix}toptt *<video / audio>*_
│❒ ➛ _${usedPrefix}tovideo *<sticker>*_
│❒ ➛ _${usedPrefix}tourl *<video / imagen / audio>*_
│❒ ➛ _${usedPrefix}tts *<idioma> <texto>*_
│❒ ➛ _${usedPrefix}tts *<efecto> <texto>*_
╰• •══════════════════• •╯


╭• •═══• ❮🌆 𝐌𝐄𝐍𝐔 🌆❯ •═══• •╮
│𝙇𝙊𝙂𝙊𝙎, 𝙋𝙄𝙍𝙊𝙋𝙊, 𝙏𝘼𝙂𝙎
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
│❒ ➛ _${usedPrefix}logos *<efecto> <texto>*_
│❒ ➛ _${usedPrefix}logochristmas *<texto>*_
│❒ ➛ _${usedPrefix}logocorazon *<texto>*_
│❒ ➛ _${usedPrefix}ytcomment *<texto>*_
│❒ ➛ _${usedPrefix}hornycard *<@tag>*_
│❒ ➛ _${usedPrefix}simpcard *<@tag>*_
│❒ ➛ _${usedPrefix}lolice *<@tag>*_
│❒ ➛ _${usedPrefix}itssostupid_
│❒ ➛ _${usedPrefix}pixelar_
│❒ ➛ _${usedPrefix}blur_ 
│❒ ➛ _${usedPrefix}piropo_
│❒ ➛ _${usedPrefix}consejo_
│❒ ➛ _${usedPrefix}fraseromantica_
│❒ ➛ _${usedPrefix}historiaromantica_
╰• •══════════════════• •╯


╭• •═══• ❮⛩️ 𝐌𝐄𝐍𝐔 ⛩️❯ •═══• •╮
│𝙍𝘼𝙉𝘿𝙊𝙈 𝘼𝙉𝙄𝙈𝙀𝙎
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
│❒ ➛ _${usedPrefix}menuanimes_
│❒ ➛ _${usedPrefix}lolivid_
│❒ ➛ _${usedPrefix}loli_
│❒ ➛ _${usedPrefix}ppcouple_
│❒ ➛ _${usedPrefix}neko_
│❒ ➛ _${usedPrefix}waifu_
│❒ ➛ _${usedPrefix}akira_
│❒ ➛ _${usedPrefix}akiyama_
│❒ ➛ _${usedPrefix}anna_
│❒ ➛ _${usedPrefix}asuna_
│❒ ➛ _${usedPrefix}ayuzawa_
│❒ ➛ _${usedPrefix}boruto_
│❒ ➛ _${usedPrefix}chiho_
│❒ ➛ _${usedPrefix}chitoge_
│❒ ➛ _${usedPrefix}deidara_
│❒ ➛ _${usedPrefix}erza_
│❒ ➛ _${usedPrefix}elaina_
│❒ ➛ _${usedPrefix}eba_
│❒ ➛ _${usedPrefix}emilia_
│❒ ➛ _${usedPrefix}hestia_
│❒ ➛ _${usedPrefix}hinata_
│❒ ➛ _${usedPrefix}inori_
│❒ ➛ _${usedPrefix}isuzu_
│❒ ➛ _${usedPrefix}itachi_
│❒ ➛ _${usedPrefix}itori_
│❒ ➛ _${usedPrefix}kaga_
│❒ ➛ _${usedPrefix}kagura_
│❒ ➛ _${usedPrefix}kaori_
│❒ ➛ _${usedPrefix}keneki_
│❒ ➛ _${usedPrefix}kotori_
│❒ ➛ _${usedPrefix}kurumi_
│❒ ➛ _${usedPrefix}madara_
│❒ ➛ _${usedPrefix}mikasa_
│❒ ➛ _${usedPrefix}miku_
│❒ ➛ _${usedPrefix}minato_
│❒ ➛ _${usedPrefix}naruto_
│❒ ➛ _${usedPrefix}nezuko_
│❒ ➛ _${usedPrefix}sagiri_
│❒ ➛ _${usedPrefix}sasuke_
│❒ ➛ _${usedPrefix}sakura_
│❒ ➛ _${usedPrefix}cosplay_
╰• •══════════════════• •╯


╭• •═══• ❮🏙️ 𝐌𝐄𝐍𝐔 🏙️❯ •═══• •╮
│𝙈𝙀𝙉𝙐 𝘼𝙇𝙀𝘼𝙏𝙊𝙍𝙄𝙊
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
│❒ ➛ _${usedPrefix}kpop *<blackpink / exo / bts>*_
│❒ ➛ _${usedPrefix}cristianoronaldo_
│❒ ➛ _${usedPrefix}messi_
│❒ ➛ _${usedPrefix}cat_
│❒ ➛ _${usedPrefix}dog_
│❒ ➛ _${usedPrefix}meme_
│❒ ➛ _${usedPrefix}itzy_
│❒ ➛ _${usedPrefix}blackpink_
│❒ ➛ _${usedPrefix}navidad_
│❒ ➛ _${usedPrefix}wpmontaña_
│❒ ➛ _${usedPrefix}pubg_
│❒ ➛ _${usedPrefix}wpgaming_
│❒ ➛ _${usedPrefix}wpaesthetic_
│❒ ➛ _${usedPrefix}wpaesthetic2_
│❒ ➛ _${usedPrefix}wprandom_
│❒ ➛ _${usedPrefix}wallhp_
│❒ ➛ _${usedPrefix}wpvehiculo_
│❒ ➛ _${usedPrefix}wpmoto_
│❒ ➛ _${usedPrefix}coffee_
│❒ ➛ _${usedPrefix}pentol_
│❒ ➛ _${usedPrefix}caricatura_
│❒ ➛ _${usedPrefix}ciberespacio_
│❒ ➛ _${usedPrefix}technology_
│❒ ➛ _${usedPrefix}doraemon_
│❒ ➛ _${usedPrefix}hacker_
│❒ ➛ _${usedPrefix}planeta_
│❒ ➛ _${usedPrefix}randomprofile_
╰• •══════════════════• •╯


╭• •═══• ❮🎤 𝐌𝐄𝐍𝐔 🎤❯ •═══• •╮
│𝙈𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝘿𝙊𝙍 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
│❒ ➛ Responde a una nota de voz
│❒ ➛ _${usedPrefix}bass_
│❒ ➛ _${usedPrefix}blown_
│❒ ➛ _${usedPrefix}deep_
│❒ ➛ _${usedPrefix}earrape_
│❒ ➛ _${usedPrefix}fast_
│❒ ➛ _${usedPrefix}fat_
│❒ ➛ _${usedPrefix}nightcore_
│❒ ➛ _${usedPrefix}reverse_
│❒ ➛ _${usedPrefix}robot_
│❒ ➛ _${usedPrefix}slow_
│❒ ➛ _${usedPrefix}smooth_
│❒ ➛ _${usedPrefix}tupai_
╰• •══════════════════• •╯


╭• •═══• ❮💬 𝐌𝐄𝐍𝐔 💬❯ •═══• •╮
│𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
│❒ ➛ _${usedPrefix}start_
│❒ ➛ _${usedPrefix}next_
│❒ ➛ _${usedPrefix}leave_
╰• •══════════════════• •╯


╭• •═══• ❮🔊 𝐌𝐄𝐍𝐔 🔊❯ •═══• •╮
│𝙍𝘼𝙉𝘿𝙊𝙈 𝘼𝙐𝘿𝙐𝙊𝙎
│𝘜𝘴𝘰 𝘴𝘪𝘯 𝘱𝘳𝘦𝘧𝘪𝘫𝘰.
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌• 
│❒ ➛ 𝘍𝘶𝘯𝘤𝘪𝘰𝘯𝘢 𝘴𝘰𝘭𝘰 𝘴𝘪 𝘦𝘴𝘵𝘢 𝘢𝘤𝘵𝘪𝘷𝘰 𝘦𝘭  
│𝘤𝘰𝘮𝘢𝘯𝘥𝘰 .𝘦𝘯𝘢𝘣𝘭𝘦 𝘢𝘶𝘥𝘪𝘰𝘴
│❒ ➛ _${usedPrefix}menuaudios_
│❒ ➛ _Quien es tu sempai botsito 7w7_
│❒ ➛ _Te diagnostico con gay_
│❒ ➛ _No digas eso papu_
│❒ ➛ _A nadie le importa_
│❒ ➛ _Fiesta del admin_
│❒ ➛ _Fiesta del administrador_ 
│❒ ➛ _Vivan los novios_
│❒ ➛ _Feliz cumpleaños_
│❒ ➛ _Noche de paz_
│❒ ➛ _Buenos dias_
│❒ ➛ _Buenos tardes_
│❒ ➛ _Buenos noches_
│❒ ➛ _Audio hentai_
│❒ ➛ _Chica lgante_
│❒ ➛ _Feliz navidad_
│❒ ➛ _Vete a la vrg_
│❒ ➛ _Pasa pack Bot_
│❒ ➛ _Atencion grupo_
│❒ ➛ _Marica quien_
│❒ ➛ _Murio el grupo_
│❒ ➛ _Oh me vengo_
│❒ ➛ _tio que rico_
│❒ ➛ _Viernes_
│❒ ➛ _Baneado_
│❒ ➛ _Sexo_
│❒ ➛ _Hola_
│❒ ➛ _Un pato_
│❒ ➛ _Nyanpasu_
│❒ ➛ _Te amo_
│❒ ➛ _Yamete_
│❒ ➛ _Bañate_
│❒ ➛ _Es puto_
│❒ ➛ _La biblia_
│❒ ➛ _Onichan_
│❒ ➛ _Mierda de Bot_
│❒ ➛ _Siuuu_
│❒ ➛ _Epico_
│❒ ➛ _Shitpost_
│❒ ➛ _Rawr_
│❒ ➛ _UwU_
│❒ ➛ _:c_
│❒ ➛ _a_
╰• •══════════════════• •╯


╭• •═══• ❮🧧 𝐌𝐄𝐍𝐔 🧧❯ •═══• •╮
│𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙃𝙀𝙍𝙍𝘼𝙈𝙄𝙀𝙉𝙏𝘼𝙎
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
│❒ ➛ _${usedPrefix}inspect *<link wa_gc>*_
│❒ ➛ _${usedPrefix}chatgpt *<texto>*_
│❒ ➛ _${usedPrefix}delchatgpt_
│❒ ➛ _${usedPrefix}gptvoz *<texto>*_
│❒ ➛ _${usedPrefix}dall-e *<texto>*_
│❒ ➛ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
│❒ ➛ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
│❒ ➛ _${usedPrefix}readviewonce *<imagen / video>*_
│❒ ➛ _${usedPrefix}clima *<país> <ciudad>*_
│❒ ➛ _${usedPrefix}encuesta *<texto1|texto2...>*_
│❒ ➛ _${usedPrefix}afk *<motivo>*_
│❒ ➛ _${usedPrefix}ocr *<responde a imagen>*_
│❒ ➛ _${usedPrefix}hd *<responde a imagen>*_
│❒ ➛ _${usedPrefix}acortar *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}calc *<operacion math>*_
│❒ ➛ _${usedPrefix}del *<mensaje>*_
│❒ ➛ _${usedPrefix}whatmusic *<audio>*_
│❒ ➛ _${usedPrefix}readqr *<imagen (QR)>*_
│❒ ➛ _${usedPrefix}qrcode *<texto>*_
│❒ ➛ _${usedPrefix}readmore *<texto1| texto2>*_
│❒ ➛ _${usedPrefix}styletext *<texto>*_
│❒ ➛ _${usedPrefix}traducir *<texto>*_
│❒ ➛ _${usedPrefix}nowa *<numero>*_
│❒ ➛ _${usedPrefix}covid *<pais>*_
│❒ ➛ _${usedPrefix}horario_
│❒ ➛ _${usedPrefix}dropmail_
╰• •══════════════════• •╯


╭• •═══• ❮🎊 𝐌𝐄𝐍𝐔 🎊❯ •═══• •╮
│𝙅𝙐𝙀𝙂𝙊𝙎 𝙍𝙋𝙂 𝙀𝘾𝙊𝙉𝙊𝙈𝙄𝘼
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
│❒ ➛ _${usedPrefix}adventure_
│❒ ➛ _${usedPrefix}cazar_
│❒ ➛ _${usedPrefix}cofre_
│❒ ➛ _${usedPrefix}balance_
│❒ ➛ _${usedPrefix}claim_
│❒ ➛ _${usedPrefix}heal_
│❒ ➛ _${usedPrefix}lb_
│❒ ➛ _${usedPrefix}levelup_
│❒ ➛ _${usedPrefix}myns_
│❒ ➛ _${usedPrefix}perfil_
│❒ ➛ _${usedPrefix}work_
│❒ ➛ _${usedPrefix}crime_
│❒ ➛ _${usedPrefix}slut_
│❒ ➛ _${usedPrefix}minar_
│❒ ➛ _${usedPrefix}minar2_
│❒ ➛ _${usedPrefix}buy_
│❒ ➛ _${usedPrefix}buyall_
│❒ ➛ _${usedPrefix}verificar_
│❒ ➛ _${usedPrefix}robar *<cantidad> <@tag>*_
│❒ ➛ _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
│❒ ➛ _${usedPrefix}unreg *<numero de serie>*_
╰• •══════════════════• •╯


╭• •═══• ❮🎭 𝐌𝐄𝐍𝐔 🎭❯ •═══• •╮
│𝙋𝙀𝙍𝙎𝙊𝙉𝘼𝙇𝙄𝙕𝘼𝙍 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
│❒ ➛ _${usedPrefix}sticker *<responder a imagen o video>*_
│❒ ➛ _${usedPrefix}sticker *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}sticker2 *<responder a imagen o video>*_
│❒ ➛ _${usedPrefix}sticker2 *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}s *<responder a imagen o video>*_
│❒ ➛ _${usedPrefix}s *<enlace / link / url>*_
│❒ ➛ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
│❒ ➛ _${usedPrefix}scircle *<imagen>*_
│❒ ➛ _${usedPrefix}sremovebg *<imagen>*_
│❒ ➛ _${usedPrefix}semoji *<tipo> <emoji>*_
│❒ ➛ _${usedPrefix}qc *<texto>*_
│❒ ➛ _${usedPrefix}attp *<texto>*_
│❒ ➛ _${usedPrefix}attp2 *<texto>*_
│❒ ➛ _${usedPrefix}attp3 *<texto>*_
│❒ ➛ _${usedPrefix}ttp *<texto>*_
│❒ ➛ _${usedPrefix}ttp2 *<texto>*_
│❒ ➛ _${usedPrefix}ttp3 *<texto>*_
│❒ ➛ _${usedPrefix}ttp4 *<texto>*_
│❒ ➛ _${usedPrefix}ttp5 *<texto>*_
│❒ ➛ _${usedPrefix}pat *<@tag>*_
│❒ ➛ _${usedPrefix}slap *<@tag>*_
│❒ ➛ _${usedPrefix}kiss *<@tag>*_
│❒ ➛ _${usedPrefix}dado_
│❒ ➛ _${usedPrefix}wm *<packname> <author>*_
│❒ ➛ _${usedPrefix}stickermarker *<efecto> <imagen>*_
│❒ ➛ _${usedPrefix}stickerfilter *<efecto> <imagen>*_
╰• •══════════════════• •╯


╭• •═══• ❮💎 𝐌𝐄𝐍𝐔 💎❯ •═══• •╮
│𝙎𝙊𝙇𝙊 𝙋𝘼𝙍𝘼 𝙊𝙒𝙉𝙀𝙍𝙎
╎•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•   
│❒ ➛ > *<funcion>*
│❒ ➛ => *<funcion>*
│❒ ➛ $ *<funcion>*
│❒ ➛ _${usedPrefix}reunion_ *<texto>*
│❒ ➛ _${usedPrefix}setprefix *<prefijo>*_
│❒ ➛ _${usedPrefix}resetprefix_
│❒ ➛ _${usedPrefix}autoadmin_
│❒ ➛ _${usedPrefix}grouplist_
│❒ ➛ _${usedPrefix}chetar_
│❒ ➛ _${usedPrefix}leavegc_
│❒ ➛ _${usedPrefix}cajafuerte_
│❒ ➛ _${usedPrefix}blocklist_
│❒ ➛ _${usedPrefix}addowner *<@tag / numero>*_
│❒ ➛ _${usedPrefix}delowner *<@tag / numero>*_
│❒ ➛ _${usedPrefix}block *<@tag / numero>*_
│❒ ➛ _${usedPrefix}unblock *<@tag / numero>*_
│❒ ➛ _${usedPrefix}enable *restrict*_
│❒ ➛ _${usedPrefix}disable *restrict*_
│❒ ➛ _${usedPrefix}enable *autoread*_
│❒ ➛ _${usedPrefix}disable *autoread*_
│❒ ➛ _${usedPrefix}enable *public*_
│❒ ➛ _${usedPrefix}disable *public*_
│❒ ➛ _${usedPrefix}enable *pconly*_
│❒ ➛ _${usedPrefix}disable *pconly*_
│❒ ➛ _${usedPrefix}enable *gconly*_
│❒ ➛ _${usedPrefix}disable *gconly*_
│❒ ➛ _${usedPrefix}enable *anticall*_
│❒ ➛ _${usedPrefix}disable *anticall*_
│❒ ➛ _${usedPrefix}enable *antiprivado*_
│❒ ➛ _${usedPrefix}disable *antiprivado*_
│❒ ➛ _${usedPrefix}enable *antispam*_
│❒ ➛ _${usedPrefix}disable *antispam*_
│❒ ➛ _${usedPrefix}msg *<texto>*_
│❒ ➛ _${usedPrefix}banchat_
│❒ ➛ _${usedPrefix}unbanchat_
│❒ ➛ _${usedPrefix}resetuser *<@tag>*_
│❒ ➛ _${usedPrefix}banuser *<@tag>*_
│❒ ➛ _${usedPrefix}unbanuser *<@tag>*_
│❒ ➛ _${usedPrefix}dardiamantes *<@tag> <cantidad>*_
│❒ ➛ _${usedPrefix}añadirxp *<@tag> <cantidad>*_
│❒ ➛ _${usedPrefix}banuser *<@tag>*_
│❒ ➛ _${usedPrefix}bc *<texto>*_
│❒ ➛ _${usedPrefix}bcchats *<texto>*_
│❒ ➛ _${usedPrefix}bcgc *<texto>*_
│❒ ➛ _${usedPrefix}bcgc2 *<audio>*_
│❒ ➛ _${usedPrefix}bcgc2 *<video>*_
│❒ ➛ _${usedPrefix}bcgc2 *<imagen>*_
│❒ ➛ _${usedPrefix}bcbot *<texto>*_
│❒ ➛ _${usedPrefix}cleartpm_
│❒ ➛ _${usedPrefix}restart_
│❒ ➛ _${usedPrefix}update_
│❒ ➛ _${usedPrefix}banlist_
│❒ ➛ _${usedPrefix}addprem *<@tag> <tiempo>*_
│❒ ➛ _${usedPrefix}addprem2 *<@tag> <tiempo>*_
│❒ ➛ _${usedPrefix}addprem3 *<@tag> <tiempo>*_
│❒ ➛ _${usedPrefix}addprem4 *<@tag> <tiempo>*_
│❒ ➛ _${usedPrefix}delprem *<@tag>*_
│❒ ➛ _${usedPrefix}listcmd_
│❒ ➛ _${usedPrefix}setppbot *<responder a imagen>*_
│❒ ➛ _${usedPrefix}addcmd_
│❒ ➛ _${usedPrefix}delcmd_
│❒ ➛ _${usedPrefix}saveimage_
│❒ ➛ _${usedPrefix}viewimage_
╰• •══════════════════• •╯`.trim();     if (m.isGroup) { 
 // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
