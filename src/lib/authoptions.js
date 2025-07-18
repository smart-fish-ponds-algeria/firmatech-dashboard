import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await fetch("http://localhost:8080/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });

          const data = await response.json().catch(() => null);

          if (!response.ok || !data?.user) {
            throw new Error(data?.message || "Invalid email or password");
          }

          return {
            id: data.user.id,
            name: `${data.user.firstName} ${data.user.lastName}`,
            email: data.user.email,
            role: data.user.role,
            token: data.token, // optional backend token
            expires: data.expires, // optional expiry if provided
          };
        } catch (error) {
          throw new Error(error.message || "Login failed");
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // Optional: 30 days session expiry
  },

  pages: {
    signIn: "/auth/login", // custom login page
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.token = user.token;
        token.expires = user.expires || null;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.token = token.token;
        session.user.expires = token.expires;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
