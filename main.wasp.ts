import { app, page, route, query, action } from "@wasp.sh/spec";

import { App } from "./src/App" with { type: "ref" };
import { HomePage } from "./src/home/HomePage" with { type: "ref" };

import { EmailVerificationPage } from "./src/auth/email/EmailVerificationPage" with { type: "ref" };
import { LoginPage } from "./src/auth/email/LoginPage" with { type: "ref" };
import { PasswordResetPage } from "./src/auth/email/PasswordResetPage" with { type: "ref" };
import { RequestPasswordResetPage } from "./src/auth/email/RequestPasswordResetPage" with { type: "ref" };
import { SignupPage } from "./src/auth/email/SignupPage" with { type: "ref" };
import { userSignupFields } from "./src/auth/email/userSignupFields" with { type: "ref" };
import { onAfterSignup } from "./src/auth/email/onAfterSignup" with { type: "ref" };

import { getMyPlayerProfile, getPlayerByQrToken } from "./src/player/queries" with { type: "ref" };
import { updateMyPlayerProfile } from "./src/player/actions" with { type: "ref" };
import { PlayerProfilePage } from "./src/player/PlayerProfilePage" with { type: "ref" };
import { PlayerVerificationPage } from "./src/player/PlayerVerificationPage" with { type: "ref" };

export default app({
  name: "socialSoccer",

  wasp: {
    version: "^0.25.0",
  },

  title: "social-soccer",

  head: [""],

  auth: {
    userEntity: "User",

    onAfterSignup,

    methods: {
      email: {
        fromField: {
          name: "Basic App",
          email: "hello@example.com",
        },

        userSignupFields,

        emailVerification: {
          clientRoute: "EmailVerificationRoute",
        },

        passwordReset: {
          clientRoute: "PasswordResetRoute",
        },
      },
    },

    onAuthSucceededRedirectTo: "/",
    onAuthFailedRedirectTo: "/login",
  },

  emailSender: {
    provider: "Dummy",
  },

  client: {
    rootComponent: App,
  },

  spec: [
    query(getMyPlayerProfile, {
      entities: ["PlayerProfile"],
      auth: true,
    }),

    query(getPlayerByQrToken, {
      entities: ["PlayerProfile"],
      auth: false,
    }),

    action(updateMyPlayerProfile, {
      entities: ["PlayerProfile"],
      auth: true,
    }),

    route(
      "HomeRoute",
      "/",
      page(HomePage),
    ),

    route(
      "PlayerProfileRoute",
      "/player-profile",
      page(PlayerProfilePage),
    ),

    route(
      "PlayerVerificationRoute",
      "/verify-player/:qrToken",
      page(PlayerVerificationPage),
    ),

    route(
      "LoginRoute",
      "/login",
      page(LoginPage),
    ),

    route(
      "SignupRoute",
      "/signup",
      page(SignupPage),
    ),

    route(
      "RequestPasswordResetRoute",
      "/request-password-reset",
      page(RequestPasswordResetPage),
    ),

    route(
      "PasswordResetRoute",
      "/password-reset",
      page(PasswordResetPage),
    ),

    route(
      "EmailVerificationRoute",
      "/email-verification",
      page(EmailVerificationPage),
    ),
  ],
});
