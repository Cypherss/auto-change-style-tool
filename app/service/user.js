const Service = require('egg').Service;

class UserSevice extends Service {
  async create(data) {
    const { username, password } = data;
    const userInfo = {
      username,
      password,
      charactor: 'user',
      team: []
    };
    return await this.ctx.model.User.create(userInfo);
  }
  async findOne(username) {
    return await this.ctx.model.User.findOne({ username });
  }
}

module.exports = UserSevice;