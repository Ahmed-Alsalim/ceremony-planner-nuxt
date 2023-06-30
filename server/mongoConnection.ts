import mongoose from 'mongoose';
const config = useRuntimeConfig();

export default () => {
  mongoose.connect(config.mongoUrl)
    .then(() => {
      console.log('Met the moon goose!');
    }).catch((err) => {
      console.log(err);
    });
};