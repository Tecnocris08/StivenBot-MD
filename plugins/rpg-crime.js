const handler = async (m, {conn, isPrems}) => {
  let enviando;
  if (enviando) return
  enviando = true
  const hasil = Math.floor(Math.random() * 5000);
  const time = global.db.data.users[m.sender].lastcrime + 60000;
  if (new Date - global.db.data.users[m.sender].lastcrime < 60000) throw `*¡Espera un momento pequeño!* \n\n*—◉ Regresa en ${msToTime(time - new Date())} ⏳*`;
  conn.sendMessage(m.chat, {text: `*Tu Crimen Ha Sido:*\n\n *${pickRandom(global.crime)} !${hasil} exp!*`}, {quoted: m});
  global.db.data.users[m.sender].exp += hasil;
  global.db.data.users[m.sender].lastcrime = new Date() * 1;
  enviando = false
};
handler.help = ['crime'];
handler.tags = ['xp'];
handler.command = /^(crime|crimen)$/i
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

global.crime = [
  'Secuestraste Al Presidente Y Por Ello Te Pagan.',
  'Atracas A Una Joyería Y Por Ello Te Dan.',
  'Robaste Una Tienda A Mano Armada  En La Ciudad Y Te Llevas Todo El Dinero De La Caja Registradora Has Obtenido.',
  'Un mafioso te encargo un robo de un vehículo Lamborghini de una concesionaria de lujo  y por ello te pagan.',
  'Entras a la tienda oficial de Nike y ves las zapatillas Air yeezy 1 y decides robarla para venderlo en el mercado negro y recibes.',
  'Pasas Por Un Barrio Rojo Y Un Wey Te Confunde Y Te Lleva A Un Motel.',
  'Vas Y Le Robas A Un Vendedor De Órganos Has Obtenido.',
  'Has Robado Un Mercedes Y Un Lambo Por Ellos Obtienes.',
  'Vas A Una Exposición De Motos Y Ves A La Maravillosa Neiman Marcus Fighter Limited Que Solamente Se Fabricaron 45 Unidades Y Decides Robarte Una De Ellas Y Por Ello Recibes.',
  'Vas De Paseo Al Mar y Miras Un Yate Decides Robarlo Y Venderlo A La Mitad De Su Presio Obtienes.',
  'Tu Crimen Sale Mal Pero Tenias Dinero En El Banco Y Lo Retias Has Obtenido.',
  'Vas Caminando Por La Plaza De La City Y Te Encuentras Un Millonario Con El Teléfono Que Apple Saco Recientemente Que Es El iPhone 15 Pro Max Y Decides Robartelo Y Lo Vendes Al precio Más Elevado Que Encuentras Y Recibes.']
