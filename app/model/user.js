module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const schema = new Schema({
    username: {
      type: String
    },
    password: {
      type: String
    },
    charactor: {
      type: String
    },
    team: {
      type: []
    }
  });

  return mongoose.model('User', schema);
};
