'use client';
import React, { useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { signOut, fetchUserAttributes } from 'aws-amplify/auth';



import { Button, withAuthenticator } from '@aws-amplify/ui-react';
import {
  createStorageBrowser,
  createAmplifyAuthAdapter,
  elementsDefault,
} from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';
import '@aws-amplify/ui-react-storage/storage-browser-styles.css';
//import { S3 } from "aws-sdk";
//import WrappedStorageBrowser from './WrappedStorageBrowser'; // Adjust the path if needed


import config from '../amplify_outputs.json';

Amplify.configure(config);

// Create an S3 client (make sure to set the region and any required credentials)
//const s3 = new S3({ region: config.auth.aws_region });

function Example() {
  


  useEffect(() => {

    //To console log user attributes using fetchUserAttributes()
    async function getAttributes() {
      try {
        const attributes = await fetchUserAttributes();
        console.log("User Attributes:", attributes);
      } catch (error) {
        console.error("Error fetching user attributes", error);
      }
    }
    getAttributes();
  }, []);


  const { StorageBrowser } = createStorageBrowser({
    elements: elementsDefault,
    config: createAmplifyAuthAdapter({
      options: {
        defaultPrefixes: [
          'ConversionFiles/',
          'ConversionFileErrors/',
          'InitialUpload/',
          'InitialUploadErrors/',
          'TSQLFiles/',
          'DataValidation/',
          // (identityId: string) => `private/${identityId}/`,
          /*"media-readwritedelete/",
          "media-readonly/",
          "shared-folder-readwrite/",
          (identityId: string) => `protected-useronlyreadwritedelete/${identityId}/`,
          (identityId: string) => `private-useronlyreadwritedelete/${identityId}/`,*/
        ],
      },
    }),
  });

  return (
    <>
      <Button
        marginBlockEnd="xl"
        size="small"
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </Button>
      <StorageBrowser />
    </>
  );
}

export default withAuthenticator(Example);
