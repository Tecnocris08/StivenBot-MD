const handler = async (m, {conn, isPrems}) => {
  let enviando;
  if (enviando) return
  enviando = true
  const hasil = Math.floor(Math.random() * 5000);
  const time = global.db.data.users[m.sender].lastslut + 60000;
  if (new Date - global.db.data.users[m.sender].lastslut < 60000) throw `*¡Espera un momento pequeño!* \n\n*—◉ Regresa en ${msToTime(time - new Date())} ⏳*`;
  conn.sendMessage(m.chat, {text: `*${pickRandom(global.slut)}*\n\n*!Te Pagan Con ${hasil} exp!*`}, {quoted: m});
  global.db.data.users[m.sender].exp += hasil;
  global.db.data.users[m.sender].lastslut = new Date() * 1;
  enviando = false
};
handler.help = ['slut'];
handler.tags = ['xp'];
handler.command = /^(slut|sex)$/i
handler.fail = null;
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return minutes + ' minutos ' + seconds + ' segundos ';
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.slut = [
  'Le Chupas La Verga Al Creador De NigromanteBot-MD.',
  'Te Combiertes en la zorra de un millonario.',
  'Dejas Que Un Ramdom Del Grupo Te Coja.',
  'Exploras Una Montaña Y Un Campesino Te Coje.',
  'Trabajas En Un Bar Y El Dueño Te Vende A Un Cliente.',
  'Pasas Por Un Barrio Rojo Y Un Wey Te Confunde Y Te Lleva A Un Motel.',
  'Unos Estudiantes Querian Sexo Y Te Secuestran Pero Se Arrepienten Y Te Dejan Libre.',
  'Te conviertes En Prostituta .',
  'Vas De Paseo Con Tu Virtualita Y Te Lleva Al Bosque.',
  'Vas De Paseo A Mexico Y Te Llevan A Un Motel.']
