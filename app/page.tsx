"use client";

import { Amplify } from 'aws-amplify';
import { StorageBrowser } from '@aws-amplify/ui-react-storage';
import "@aws-amplify/ui-react-storage/styles.css";
import config from '../amplify_outputs.json';
import { useEffect, useState } from 'react';
import { fetchUserAttributes } from '@aws-amplify/auth';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

try {
  Amplify.configure(config);
} catch (err) {
  console.error('Amplify configure error:', err);
}

// Custom component to handle authenticated content
function AuthenticatedContent({ user, signOut }) {
  const [userEmail, setUserEmail] = useState(null);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    if (user) {
      fetchUserAttributes()
        .then((attributes) => {
          console.log('User attributes:', attributes);
          setUserEmail(attributes.email || user.username);
        })
        .catch((err) => {
          console.log('Error fetching attributes:', err);
          setUserEmail(user.username); // Fallback to username
        });
    }
  }, [user]);

  if (authError) {
    return <div>Error: {authError}</div>;
  }

  return (
    <div>
      <p>Logged in as: {userEmail || 'User'}</p>
      <button onClick={signOut}>Sign out</button>
      <StorageBrowser defaultValue={{ path: "public/" }} />
    </div>
  );
}

export default function Home() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          <h1>Storage Browser</h1>
          {user ? (
            <AuthenticatedContent user={user} signOut={signOut} />
          ) : (
            <p>Please sign in to view files</p>
          )}
        </div>
      )}
    </Authenticator>
  );
}