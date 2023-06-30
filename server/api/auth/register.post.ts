import User from '../../dbModels/user';

interface IPostUser {
  email: string;
  password: string;
  name: string;
}

export default defineEventHandler(async (event) => {
  const { email, password, name } = await readBody<IPostUser>(event);

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw createError({
      statusCode: 400,
      statusMessage: 'USER_EXISTS',
    });
  }

  try {
    await User.create({
      email,
      password,
      name,
    });

    setResponseStatus(event, 201);

    return 'USER_CREATED';
  } catch (err: any) {
    throw createError({
      statusCode: 500,
      statusMessage: err,
    });
  }
});
