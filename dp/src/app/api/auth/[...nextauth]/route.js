  // import NextAuth from "next-auth";
  // import GithubProvider from "next-auth/providers/github";
  // import connectdb from "@/db/connectdb";
  // import User from "../../../models/User";


  // const handler = NextAuth({
  //   providers: [
  //     GithubProvider({
  //       clientId: process.env.GITHUB_ID,
  //       clientSecret: process.env.GITHUB_SECRET,
  //     }),
  //   ],

  //   callbacks: {
  //     async signIn({ user }) {
  //       await connectdb();

  //       const existingUser = await User.findOne({
  //         email: user.email,
  //       });

  //       if (!existingUser) {
  //         await User.create({
  //           name: user.name,
  //           email: user.email,
  //         });
  //       }

  //       return true;
  //     },
  //   },
  // });

  // export { handler as GET, handler as POST };


  import NextAuth from "next-auth";
  import GithubProvider from "next-auth/providers/github";
  import GoogleProvider from "next-auth/providers/google";
  import connectdb from "@/db/connectdb";
  import User from "../../../models/User";

  const handler = NextAuth({
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),

      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    trustHost: true,

    callbacks: {
      async signIn({ user }) {
        await connectdb();

        const existingUser = await User.findOne({
          email: user.email,
        });

        if (!existingUser) {
          await User.create({
            name: user.name,
            email: user.email,
          });
        }

        return true;
      },
    },
  });

  export { handler as GET, handler as POST };