const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'userinfo',
  category: 'info',
  aliases: [],
  usage: 'Userinfo',
  description: 'get info on yourself',
  clientPermissions: ['EMBED_LINKS'],
  run: async (client, message) => {
    let { author } = message;
    let rolemebers = await message.member.roles.cache.filter(r => r.position !== 0).map(r => r.toString()).join(' ');
    if (!rolemebers) rolemebers = 'None';
    let boostserv = message.member.premiumSince;
    if (boostserv === null) boostserv = 'No Boost';
    const embed = new MessageEmbed()
      .setAuthor(`${author.tag}`, author.displayAvatarURL())
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
      .setThumbnail(author.displayAvatarURL())
      .setColor('RANDOM')
      .addField('Registered:', `${author.createdAt.toLocaleString()}`, true)
      .addField('Joined:', `${message.member.joinedAt.toLocaleString()}`, true)
      .addField('Presence:', `${author.presence.status}`, true)
      .addField('Boosts:', `${boostserv}`, true)
    //   .addField("Permissions", `${author.permissions.ALL}`, true)
      .addField(`Roles [${message.member.roles.cache.filter(r => r.position !== 0).size}]`, rolemebers, true);
    await message.channel.send(embed);
  }
};