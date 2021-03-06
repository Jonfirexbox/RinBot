const { MessageEmbed } = require('discord.js');
const command = require('../../structures/BaseCommand.js');

module.exports = class EightBall extends command {
  constructor() {
    super('8ball', {
      category: 'fun',
      description: 'Asks the 8 Ball a question',
      usage: '8ball <question>',
    });
  }

  async run(client, message, args) {
    if (!args[0]) return message.channel.send('Please ask a full question!');
    const replies = ['Yes.', 'No.', 'Never.', 'Definitely.', 'Ask again later.'];
    const result = Math.floor((Math.random() * replies.length));
    const question = args.join(' ');
    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const embed = new MessageEmbed()
        .setAuthor('🎱 The 8 Ball says...')
        .setColor('ORANGE')
        .addField('Question:', question)
        .addField('Answer:', replies[result]);
      await message.channel.send(embed);
    } else {
      await message.channel.send(`**Question:**\n${question}\n**Answer:**\n${replies[result]}`);
    }
  }
};