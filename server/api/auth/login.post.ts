import jwt from 'jsonwebtoken';
const config = useRuntimeConfig();
import User from '../../dbModels/user';

interface IPostUser {
  email: string;
  password: string;
}

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody<IPostUser>(event);
  const user: any = await User.findOne({ email })

  if (!user) {
    throw createError({
      statusCode: 400,
      statusMessage: 'USER_NOT_FOUND',
    });
  }

  const isPasswordCorrect = await user.verifyPassword(password);

  if (!isPasswordCorrect) {
    throw createError({
      statusCode: 400,
      statusMessage: 'PASSWORD_INCORRECT',
    });
  }

  const token = await generateToken(user._id);
  return { token };
});

function generateToken(userId: any) {
  return jwt.sign({ userId }, config.jwtSecret);
}
