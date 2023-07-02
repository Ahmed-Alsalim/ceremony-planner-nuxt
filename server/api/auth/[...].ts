const config = useRuntimeConfig();
import { NuxtAuthHandler } from '#auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../../dbModels/user';

export default NuxtAuthHandler({
  pages: {
    signIn: '/auth/login',
  },
  secret: config.authSecret,
  providers: [
    // @ts-expect-error .default is needed in ssr mode
    CredentialsProvider.default({
      name: 'credentials',
      async authorize(credentials : any) {
        const user: any = await User.findOne({ email: credentials.email });

        if (!user) {
          return null;
        }

        const isPasswordCorrect = await user.verifyPassword(credentials.password);

        if (!isPasswordCorrect) {
          return null;
        }

        return user;
      },
    }),
  ],
});
