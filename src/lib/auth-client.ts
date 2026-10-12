
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://bazar-dor-psi-beige.vercel.app",
});

export const {
  signIn,
  signUp,
  signOut,
  updateUser,
  useSession,
} = authClient;