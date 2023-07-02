'use client';
import React, { useState, useEffect} from 'react'
import { Auth } from 'aws-amplify';
import { Amplify } from 'aws-amplify';
import config from 'app/aws-exports';
import { Storage } from "aws-amplify";
Amplify.configure(config);
import "@aws-amplify/ui-react/styles.css";
import {useRouter} from "next/navigation";
import {useRef} from "react";

const Page = () => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [fileData, setFileData] = useState();
    const [fileStatus, setFileStatus] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [documentUrl, setDocumentUrl] = useState(null);
    const [isDocumentLoaded, setIsDocumentLoaded] = useState(false);
    const pdfViewerRef = useRef();



    useEffect(() => {
        const fetchUserAttributes = async () => {
            try {
                const currentUser = await Auth.currentAuthenticatedUser();
                const attributes = currentUser.attributes;
                console.log(currentUser);
                setUser(currentUser);

                 // Retrieve the image URL
                 const imageUrl = await getImageUrl(currentUser.attributes.sub, 'pfp');
                 const document = await getDocumentUrl(currentUser.attributes.sub, 'portfolio');
                 setImageUrl(imageUrl);
                 setDocumentUrl(document);
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
       const getDocumentUrl = async (userId, fileName) => {
    try {
      const documentUrl = await Storage.get(`${userId}/${fileName}`);
      return documentUrl;
    } catch (error) {
      console.error('Error retrieving portfolio:', error);
      throw error;
    }
  };

     const uploadImage = async () => { //profile picture
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
      const uploadDocument = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const userId = currentUser.attributes.sub;

      const result = await Storage.put(`${userId}/portfolio`, fileData, {
        contentType: fileData.type,
      });
      setFileStatus(true);
      console.log('Portfolio uploaded successfully:', result);

      // Retrieve the updated document URL
      const updatedDocumentUrl = await getDocumentUrl(userId, 'portfolio');
      setDocumentUrl(updatedDocumentUrl);
    } catch (error) {
      console.error('Portfolio uploading document:', error);
    }
  };
      const previewDocument = () => {
    if (isDocumentLoaded) {
      // Document is already loaded, just focus on the viewer
      pdfViewerRef.current?.focus();
    } else {
      // Document is not loaded, open in a new tab and set the loaded flag
      window.open(documentUrl, '_blank');
      setIsDocumentLoaded(true);
    }
  };

return (
  <div>
    <div>Profile Page for {user?.attributes.email}</div>
    <div>
      <input type="file" onChange={(e) => setFileData(e.target.files[0])} />
    </div>
    <div>
      <button onClick={uploadImage}>Upload Profile Picture</button>
    </div>
      <div>
          <button onClick={uploadDocument}>Upload Portfolio</button>
      </div>

    {fileStatus ? "File uploaded successfully" : ""}
    {imageUrl && <img src={imageUrl} alt="Profile Picture" />}
      {documentUrl && (
        <div>
          <h3>Portfolio Preview</h3>
          <button onClick={previewDocument}>Download Portfolio</button>
          <div
            className="pdf-viewer"
            style={{ width: '100%', height: '500px', border: '1px solid black' }}
            ref={pdfViewerRef}
            tabIndex="0"
          ></div>
        </div>
      )}
    </div>
);
}

export default Page