'use client';
import React, { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify';
import { Amplify } from 'aws-amplify';
import config from 'app/aws-exports';
import { Storage } from "aws-amplify";
Amplify.configure(config);
import "@aws-amplify/ui-react/styles.css";
import {useRouter} from "next/navigation";

const Page = () => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [fileData, setFileData] = useState();
    const [fileStatus, setFileStatus] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);



    useEffect(() => {
        const fetchUserAttributes = async () => {
            try {
                const currentUser = await Auth.currentAuthenticatedUser();
                const attributes = currentUser.attributes;
                console.log(currentUser);
                setUser(currentUser);

                 // Retrieve the image URL
                 const imageUrl = await getImageUrl(currentUser.attributes.sub, 'pfp');
                setImageUrl(imageUrl);
            } catch (error) {
                console.error("Failed to fetch user attributes.", error);
                router.push('/auth/signIn')
            }
        };

        fetchUserAttributes();
    }, []);

      const getImageUrl = async (userId, fileName) => { //profile picture
    try {
      const imageUrl = await Storage.get(`${userId}/${fileName}`);
      return imageUrl;
    } catch (error) {
      console.error('Error retrieving image:', error);
      throw error;
    }
  };

     const uploadFile = async () => { //profile picture
        try {
            const currentUser = await Auth.currentAuthenticatedUser();
            const userId = currentUser.attributes.sub;
            const result = await Storage.put(`${userId}/pfp`, fileData, {
                contentType: fileData.type,
            });
            setFileStatus(true);
            console.log(21, result);
            console.log("File uploaded successfully:", result);

             // Retrieve the updated image URL, essentially infinite pfp uploads without refreshing page
            const updatedImageUrl = await getImageUrl(userId, 'pfp');
            setImageUrl(updatedImageUrl);
        } catch(error) {
            console.error("Error uploading file:", error);
        }
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
    {imageUrl && <img src={imageUrl} alt="Profile Picture" />}
  </div>
);
}

export default Page