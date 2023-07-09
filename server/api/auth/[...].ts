import { NuxtAuthHandler } from '#auth';
import CredentialsProvider from '@auth/core/providers/credentials';
import type { AuthConfig } from '@auth/core/types';
import User from '../../dbModels/user';

const config = useRuntimeConfig();

export const authOptions: AuthConfig = {
  pages: {
    signIn: '/auth/login',
  },
  secret: config.authSecret,
  providers: [
    CredentialsProvider({
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
};

export default NuxtAuthHandler(authOptions, config);
