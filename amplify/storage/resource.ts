import { defineStorage } from '@aws-amplify/backend-storage';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { useForm } from 'react-hook-form';

export const storage = defineStorage({
  name: 'luisprojectS3',
  access: (allow) => ({
    'public/*': [allow.authenticated.to(['read', 'write'])]
  })
});

storage.resources.bucket.addToResourcePolicy(new PolicyStatement({
  actions: ['s3:GetObject', 's3:PutObject', 's3:ListBucket'],
  resources: [
    'arn:aws:s3:::luisnextjsstoragef296904cb58640fe8c2e7d87ad48fd0ae03-dev',
    'arn:aws:s3:::luisnextjsstoragef296904cb58640fe8c2e7d87ad48fd0ae03-dev/*'
  ],
  principals: [storage.resources.authenticatedRole]
}));