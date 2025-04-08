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
      userPoolId: "us-east-1_GbDEpwd4X",
      userPoolClientId: "4seq105rqkge73reoarel51ech",
      identityPoolId: "us-east-1:5bf79d75-6a3e-4e00-ae61-ae283f593664",
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



