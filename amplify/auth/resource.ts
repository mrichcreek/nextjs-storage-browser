/*import { defineAuth } from '@aws-amplify/backend';*/

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});
 */

import { Amplify } from "aws-amplify"

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "us-east-1_0SmI7CCIm",
      userPoolClientId: "35blgjqu2spj4h5imomcmu9ids",
      identityPoolId: "us-east-1:cc2aa96b-ab42-46b3-8ca4-dbdfcfffd31e",
      loginWith: {
        email: true,
        phone: true,
      },
      signUpVerificationMethod: "code",
      userAttributes: {
        email: {
          required: true,
        },
        phone_number: {
          required: true,
        },
      },
      allowGuestAccess: true,
      passwordFormat: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialCharacters: true,
      },
    },
  },
})



