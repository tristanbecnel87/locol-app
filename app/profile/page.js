'use client';
import React, { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify';
import { Amplify } from 'aws-amplify';
import config from 'app/aws-exports';
import { Storage } from "aws-amplify";
Amplify.configure(config);
import "@aws-amplify/ui-react/styles.css";

const Page = () => {
    const [user, setUser] = useState(null)
    const [fileData, setFileData] = useState();
    const [fileStatus, setFileStatus] = useState(false);

    useEffect(() => {
        const fetchUserAttributes = async () => {
            try {
                const currentUser = await Auth.currentAuthenticatedUser();
                const attributes = currentUser.attributes;
                console.log(currentUser);
                setUser(currentUser);

            } catch (error) {
                console.error("Failed to fetch user attributes.", error);
            }
        };

        fetchUserAttributes();
    }, [])
     const uploadFile = async () => {
    const result = await Storage.put(fileData.name, fileData, {
      contentType: fileData.type,
    });
    setFileStatus(true);
    console.log(21, result);
  };

return (
  <div>
    <div>Profile Page for {user?.attributes.email}</div>
    <div>
      <input type="file" onChange={(e) => setFileData(e.target.files[0])} />
    </div>
    <div>
      <button onClick={uploadFile}>Upload file</button>
    </div>
    {fileStatus ? "File uploaded successfully" : ""}
  </div>
);
}

export default Page