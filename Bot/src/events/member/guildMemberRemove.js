const BaseEvent = require('../../structures/BaseEvent');

module.exports = class MemberLeaveEvent extends BaseEvent {
  constructor() {
    super('guildMemberRemove');
  }
  async run(client, member) {
    
  }
};
