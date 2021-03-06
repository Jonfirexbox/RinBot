const command = require('../../structures/BaseCommand.js');

module.exports = class Ping extends command {
  constructor() {
    super('ping', {
      aliases: [],
      usage: 'ping',
      category: 'misc',
      description: 'Latency from the bot to server',
      cooldown: 3,
    });
  }

  async run(client, message) {
    const startTime = Date.now();
    await message.channel.send('Pinging...').then(async (m) => {
      const endTime = Date.now();
      await (m.edit(`Pong! \`${endTime - startTime}ms\``));
    });
  }
};
