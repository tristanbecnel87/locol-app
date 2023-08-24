'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Auth } from 'aws-amplify';
import { Amplify } from 'aws-amplify';
import config from 'app/aws-exports';
import { Storage } from 'aws-amplify';
Amplify.configure(config);
import '@aws-amplify/ui-react/styles.css';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [fileData, setFileData] = useState();
  const [fileStatus, setFileStatus] = useState(false);
  const [imageUrl, setImageUrl] = useState(null); //pfp
  const [documentUrl, setDocumentUrl] = useState(null); //document
  const [isDocumentLoaded, setIsDocumentLoaded] = useState(false); //can delete
  const [description, setDescription] = useState(''); //pf description
  const pdfViewerRef = useRef();
  const [name, setName] = useState(''); //name or nickname
  const [role, setRole] = useState(''); //roles
  const [skills, setSkills] = useState(''); //skills
  const [interests, setInterests] = useState(''); // interests



  useEffect(() => {
    const fetchUserAttributes = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        const attributes = currentUser.attributes;
        console.log(currentUser);
        setUser(currentUser);

        const imageUrl = await getImageUrl(currentUser.attributes.sub, 'pfp');
        const document = await getDocumentUrls(currentUser.attributes.sub); //'portfolio'
        const description = await getDescription(currentUser.attributes.sub, 'description.txt');
        const name = await getName(currentUser.attributes.sub, 'name.txt');
        const role = await getRole(currentUser.attributes.sub, 'role.txt');
        const skills = await getSkills(currentUser.attributes.sub, 'skills.txt');
        const interests = await getInterests(currentUser.attributes.sub, 'interests.txt');



        setImageUrl(imageUrl);
        setDocumentUrl(document);
        setDescription(description);
        setName(name);
        setRole(role);
        setSkills(skills);
        setInterests(interests);
      } catch (error) {
        console.error('Failed to fetch user attributes.', error);
        router.push('/auth/signIn');
      }
    };

    fetchUserAttributes();
  }, []);

  const getImageUrl = async (userId, fileName) => {
    try {
      const imageUrl = await Storage.get(`${userId}/${fileName}`);
      return imageUrl;
    } catch (error) {
      console.error('Error retrieving image:', error);
      throw error;
    }
  };

const getDocumentUrls = async (userId) => {
  try {
    const documentList = await Storage.list(userId + '/portfolio', { level: 'public' });
    console.log(documentList);
    return documentList;
  } catch (error) {
    console.error('Error fetching document URLs:', error);
    return [];
  }
};


  const getDescription = async (userId, fileName) => {
    try {
      const descriptionUrl = await Storage.get(`${userId}/${fileName}`);
      const response = await fetch(descriptionUrl);
      const text = await response.text();
      return text;
    } catch (error) {
      console.error('Error retrieving profile description:', error);
      throw error;
    }
  };
  const getInterests = async (userId, fileName) => {
    try {
      const interests = await Storage.get(`${userId}/${fileName}`);
      const response = await fetch(interests);
      const text = await response.text();
      return text;
    } catch (error) {
      console.error('Error retrieving profile interests:', error);
      throw error;
    }
  };
   const getName = async (userId, fileName) => {
    try {
      const nameUrl = await Storage.get(`${userId}/${fileName}`);
      const response = await fetch(nameUrl);
      const text = await response.text();
      return text;
    } catch (error) {
      console.error('Error retrieving name:', error);
      throw error;
    }
  };
    const getRole = async (userId, fileName) => {
    try {
      const roleUrl = await Storage.get(`${userId}/${fileName}`);
      const response = await fetch(roleUrl);
      const text = await response.text();
      return text;
    } catch (error) {
      console.error('Error retrieving role:', error);
      throw error;
    }
  };
     const getSkills = async (userId, fileName) => {
    try {
      const skillsUrl = await Storage.get(`${userId}/${fileName}`);
      const response = await fetch(skillsUrl);
      const text = await response.text();
      return text;
    } catch (error) {
      console.error('Error retrieving skills:', error);
      throw error;
    }
  };

  const uploadImage = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const userId = currentUser.attributes.sub;
      const result = await Storage.put(`${userId}/pfp`, fileData, {
        contentType: fileData.type,
      });
      setFileStatus(true);
      console.log(21, result);
      console.log('File uploaded successfully:', result);

      const updatedImageUrl = await getImageUrl(userId, 'pfp');
      setImageUrl(updatedImageUrl);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

const uploadDocument = async () => {
  try {
    const currentUser = await Auth.currentAuthenticatedUser();
    const userId = currentUser.attributes.sub;

    // Get existing document URLs
    const documentUrl = await getDocumentUrls(userId);
  console.log(documentUrl);
    // Determine the new document name based on the existing documents
    let newDocumentName = 'portfolio1.pdf';
    if (documentUrl.results.length==1) {
      newDocumentName = 'portfolio2.pdf';
    } else if (documentUrl.results.length==2) {
      newDocumentName = 'portfolio3.pdf';
    }

    const result = await Storage.put(`${userId}/${newDocumentName}`, fileData, {
      contentType: fileData.type,
    });
    setFileStatus(true);
    console.log('Portfolio uploaded successfully:', result);

    const updatedDocumentUrl = await getDocumentUrls(userId, newDocumentName);
    setDocumentUrl(updatedDocumentUrl);
  } catch (error) {
    console.error('Portfolio uploading document:', error);
  }
};


  const uploadText = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const userId = currentUser.attributes.sub;
      const result = await Storage.put(`${userId}/description.txt`, description, {
        contentType: 'text/plain',
      });
      console.log('Text uploaded successfully:', result);
    } catch (error) {
      console.error('Error uploading text:', error);
    }
  };
  const uploadName = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const userId = currentUser.attributes.sub;
      const result = await Storage.put(`${userId}/name.txt`, name, {
        contentType: 'text/plain',
      });
      console.log('Name uploaded successfully:', result);
    } catch (error) {
      console.error('Error uploading name:', error);
    }
  };
   const uploadRole = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const userId = currentUser.attributes.sub;
      const result = await Storage.put(`${userId}/role.txt`, role, {
        contentType: 'text/plain',
      });
      console.log('Role uploaded successfully:', result);
    } catch (error) {
      console.error('Error uploading role:', error);
    }
  };
    const uploadSkills = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const userId = currentUser.attributes.sub;
      const result = await Storage.put(`${userId}/skills.txt`, skills, {
        contentType: 'text/plain',
      });
      console.log('Skills uploaded successfully:', result);
    } catch (error) {
      console.error('Error uploading skills:', error);
    }
  };
    const uploadInterests = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const userId = currentUser.attributes.sub;
      const result = await Storage.put(`${userId}/interests.txt`, interests, {
        contentType: 'text/plain',
      });
      console.log('Interests uploaded successfully:', result);
    } catch (error) {
      console.error('Error uploading interests:', error);
    }
  };

  const previewDocument = () => { //this code needs work
    if (isDocumentLoaded) {
      pdfViewerRef.current?.focus();
    } else {
      window.open(documentUrl, '_blank');
      setIsDocumentLoaded(true);
    }
  };

  return (
    <div>
      <div>Profile Page for {user?.attributes.email}</div>
      <div>{user?.attributes['custom:university']}</div>
      <div>{user?.attributes['custom:classification']}</div>
      <div>
        <input type="file" onChange={(e) => setFileData(e.target.files[0])} />
      </div>
      <div>
        <button onClick={uploadImage}>Upload Profile Picture</button>
      </div>
      <div>
        <button onClick={uploadDocument}>Upload Portfolio</button>
      </div>

      {fileStatus ? 'File uploaded successfully' : ''}
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
      <div>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        <button onClick={uploadText}>Save Description</button>
        {description && <div>{description}</div>}
      </div>
       <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={uploadName}>Save Name</button>
      </div>
      {name && <div>Name: {name}</div>}
        <div>
        <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
        <button onClick={uploadRole}>Save Role</button>
        {role && <div>Role: {role}</div>}
      </div>
       <div>
        <textarea value={skills} onChange={(e) => setSkills(e.target.value)} />
        <button onClick={uploadSkills}>Save Skills</button>
        {skills && <div>{skills}</div>}
      </div>
       <div>
        <textarea value={interests} onChange={(e) => setInterests(e.target.value)} />
        <button onClick={uploadInterests}>Save Interests</button>
        {interests && <div>{interests}</div>}
      </div>
    </div>
  );
};

export default Page;
