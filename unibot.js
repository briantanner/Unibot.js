new (require('discord.js')).Client({ autoReconnect: true })
  .on('ready', () => console.info('Bot ready.'))
  .on('message', msg => { if (msg.content === '!ping') msg.reply('Pong, Motherfucker.') })
  .on('error', err => console.error(err.message))
  .on('disconnected', () => console.info('Disconnected.'))
  .loginWithToken(require('./config.json').bottoken)
  .then(t => console.info('Connected to Discord!'))
  .catch(err => console.error(err.message));
  