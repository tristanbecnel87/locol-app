'use client';
import React, {useEffect, useState, } from "react";

import {Authenticator, useAuthenticator, View} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { Auth} from 'aws-amplify';
import { Amplify } from 'aws-amplify';
import config from 'app/aws-exports';
Amplify.configure(config);

 const formFields = {
    signUp: {
      email: {
        order:1
      },
      password: {
        order: 2
      },
      confirm_password: {
        order: 3
      }, 'custom:business': {
          key:'business',
          type:'string',
          required:true,
          label:'Business',
          placeholder: 'Enter your Business Name, else type N/A',
          order: 4
      },

      'custom:isbusiness': {
          key:'isbusiness',
          type:'string',
          required:true,
          label:'Are you registering for a business account?',
          placeholder: 'Type Yes or No',
          order: 5
      },
        'custom:university': {
          key:'university',
          type:'string',
          required:true,
          label:'What university do you attend? ',
          placeholder: 'Type Here',
          order: 6
      },
         'custom:study': {
          key:'study',
          type:'string',
          required:true,
          label:'What do you study? ',
          placeholder: 'Type Here',
          order: 7
      },
         'custom:classification': {
          key:'classification',
          type:'integer',
          required:true,
          label:'What is your classification? ',
          placeholder: 'Type Here',
          order: 8
      },
          'custom:graduate': {
          key:'graduate',
          type:'integer',
          required:true,
          label:'When do you graduate? ',
          placeholder: 'Type Here',
          order: 9
      },
          'custom:skills': {
          key:'skills',
          type:'string',
          required:true,
          label:'List your skills',
          placeholder: 'Proficient in C++, Graphic Design, Web Analytics, Etc.',
          order: 10
      },




    },
  }

export const UserProfile = () => {
     const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserAttributes = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        const attributes = currentUser.attributes;
        console.log("User attributes:", attributes);
        setUser(currentUser);
      } catch (error) {
        console.error("Failed to fetch user attributes.", error);
      }
    };

    fetchUserAttributes();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {user && (
        <>
          <p>Email: {user.attributes.email}</p>
          {/* Render other user information */}
        </>
      )}
    </div>
  );
};

const Login = ({}) => {
    return (
        <Authenticator formFields={formFields}>
            <UserProfile /> {/* Render UserProfile component */}
            {({signOut}) => {
                <div>
                    <h1> yeehaw </h1>
                    <h3> this is a test </h3>

                    <button onClick={signOut}>Sign Out</button>
                </div>
            }}
        </Authenticator>
    );
};

export default Login;
