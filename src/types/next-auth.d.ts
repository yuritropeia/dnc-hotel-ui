import NextAuth from "next-auth";
import { Role } from "./User";

declare module "next-auth" {
  interface User {
    access_token: string;
  }
  interface Session {
    accessToken: string;
    user: {
      id: number;
      email: string;
      name: string;
      role: Role;
      avatar: string;
      createdAt: string;
      password: string;
    };
  }
}
