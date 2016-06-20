new (require('discord.js')).Client({ autoReconnect: true })
  .on('ready', () => console.info('Bot ready.'))
  .on('message', msg => { if (msg.content === '!ping') msg.reply('Pong, Motherfucker.') })
  .on('error', err => console.error(err.message))
  .on('disconnected', () => console.info('Disconnected.'))
  .on('serverNewMember', (server, user) => bot.sendMessage(server.defaultChannel, `:wave: ${user.username} joined the server.`))
  .on('serverMemberRemoved', (server, user) => bot.sendMessage(server.defaultChannel, `${user.username} left the server.`))
  .on('userBanned', (server, user) => bot.sendMessage(server.defaultChannel, `:hammer: ${user.username} was banned.`))
  .loginWithToken(require('./config.json').bottoken)
  .then(t => console.info('Connected to Discord!'))
  .catch(err => console.error(err.message));
  