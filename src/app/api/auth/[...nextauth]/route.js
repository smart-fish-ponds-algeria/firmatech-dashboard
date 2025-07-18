import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          const res = await fetch("http://localhost:8080/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });
  
          const result = await res.json();
          console.log("BACKEND RESPONSE:", result);
  
          if (!res.ok || !result?.data) throw new Error(result.message || "Invalid credentials");
  
          const user = result.data; // fixed here
  
          return {
            id: user._id,
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            role: user.role,
            token: user.token,
          };
        },
      }),
    ],
    session: { strategy: "jwt" },
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
          token.role = user.role;
          token.token = user.token;
        }
        return token;
      },
      async session({ session, token }) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.token = token.token;
        return session;
      },
    },
    pages: { signIn: "/auth/login" },
    secret: process.env.NEXTAUTH_SECRET,
  });
  

export { handler as GET, handler as POST };
