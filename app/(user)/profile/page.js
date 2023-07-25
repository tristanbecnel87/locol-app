'use client';
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { Storage } from 'aws-amplify';
import { Amplify } from 'aws-amplify';
import config from 'app/aws-exports';
import { useRouter } from 'next/navigation'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useUserContext } from '@/components/Context';
Amplify.configure(config);

const Page = (/* { user } */) => {
    const router = useRouter()
    const [imageUrl, setImageUrl] = useState();
    const [documentUrl, setDocumentUrl] = useState();
    const [description, setDescription] = useState();
    const [name, setName] = useState();
    const [role, setRole] = useState();
    const [services, setServices] = useState();
    const [skills, setSkills] = useState();
    const [interests, setInterests] = useState();
    const { user, setUser } = useUserContext();


    useEffect(() => {
        const fetchUserAttributes = async () => {
            try {
                const attributes = user.attributes;
        
                const imageUrl = await getImageUrl(user.attributes.sub, 'pfp');
                // const document = await getDocumentUrl(currentUser.attributes.sub, 'portfolio');
                const description = await getDescription(user.attributes.sub, 'description.txt');
                const name = await getName(user.attributes.sub, 'name.txt');
                const role = await getRole(user.attributes.sub, 'role.txt');
                const skills = await getSkills(user.attributes.sub, 'skills.txt');
        
        
                setImageUrl(imageUrl);
                // setDocumentUrl(document);
                // setDescription(description);
                setName(name);
                setRole(role);
                setSkills(skills);
            } catch (error) {
                console.error('Failed to fetch user attributes.', error);
                // router.push('/signIn');
            }
        };
    
        fetchUserAttributes();

    }, [])

    // Upload image to S3 bucket
    const uploadImage = async (file) => {
        try {
            const userId = user.attributes.sub;
            const result = await Storage.put(`${userId}/pfp`, file, {
              contentType: file.type,
            });
            // setFileStatus(true);
            // console.log('File uploaded successfully:', result);
      
            const updatedImageUrl = await getImageUrl(userId, 'pfp');
            setImageUrl(updatedImageUrl);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }

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

    // Get image URL from S3 bucket
    const getImageUrl = async (userId, fileName) => {
        try {
            const imageUrl = await Storage.get(`${userId}/${fileName}`);
            return imageUrl;
        } catch (error) {
            console.error('Error retrieving image:', error);
            throw error;
        }
    };

    return (
        <div className='font-montserrat'>
            <div className='h-96 bg-rawSienna-400 flex items-center justify-center text-md shadow-inner-lg'>
                <div className='flex flex-col items-center justify-center text-white tracking-wider font-light'>
                    <div className='m-4 hover:opacity-50 cursor-pointer relative'>
                        <Image className='w-32 h-32 rounded-full object-cover' src={imageUrl ? imageUrl : '/defaultProfilePic.svg'} alt="profilePhoto" width={150} height={150} />
                        <input type="file" onChange={(e) => uploadImage(e.target.files[0])} className='absolute z-10 inset-0 rounded w-36 opacity-0' />
                    </div>
                    <div className="font-normal text-2xl">{"Shaz Momin"}</div>
                    <div>{user?.attributes["custom:university"]}</div>
                    <div className="italic">{"(" + user?.attributes["custom:classification"] + ")"}</div>
                </div>
            </div>
            
            <div className="py-6">
                <div>
                    <nav className="flex justify-center text-lg" aria-label="Tabs" role="tablist">
                        <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-rawSienna-500 hs-tab-active:text-rawSienna-500 tracking-wider py-3 px-4 mx-4 inline-flex items-center gap-2 border-b-[3px] border-transparent whitespace-nowrap text-gray-500 hover:text-rawSienna-600 active" id="tabs-with-underline-item-1" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
                        About
                        </button>
                        <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-rawSienna-500 hs-tab-active:text-rawSienna-500 tracking-wider py-3 px-4 mx-4 inline-flex items-center gap-2 border-b-[3px] border-transparent whitespace-nowrap text-gray-500 hover:text-rawSienna-600" id="tabs-with-underline-item-2" data-hs-tab="#tabs-with-underline-2" aria-controls="tabs-with-underline-2" role="tab">
                        Services
                        </button>
                        <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-rawSienna-500 hs-tab-active:text-rawSienna-500 tracking-wider py-3 px-4 mx-4 inline-flex items-center gap-2 border-b-[3px] border-transparent whitespace-nowrap text-gray-500 hover:text-rawSienna-600" id="tabs-with-underline-item-3" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
                        Interests
                        </button>
                    </nav>
                </div>

                <div className="tracking-wide text-md max-w-lg m-auto p-6 h-36">
                    <div id="tabs-with-underline-1" role="tabpanel" aria-labelledby="tabs-with-underline-item-1">
                        <p className="text-gray-500 dark:text-gray-400 text-center">
                            {description ? description : "Add your bio here!! You can edit this by clicking the edit button in the top right corner."}
                        </p>
                    </div>
                    <div id="tabs-with-underline-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-2">
                        <p className="text-gray-500 dark:text-gray-400 text-center">
                            {services ? services : "You currently don't have any services listed. Create a service by heading over to the marketplace tab and clicking the 'Create Service' button!"}
                        </p>
                    </div>
                    <div id="tabs-with-underline-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-3">
                        <p className="text-gray-500 dark:text-gray-400 text-center">
                            {interests ? interests : "You currently don't have any interests listed. Add an interest by clicking the edit button in the top right corner."}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-regalBlue-100 p-6">
                <div className="text-rawSienna-500 text-xl tracking-wider py-3 px-4 mx-4 inline-flex items-center gap-2 border-b-[3px] border-transparent whitespace-nowrap font-semibold" >Skills</div>
                <div className="max-w-lg m-auto tracking-wide">
                   { skills ? skills.split(' ').forEach(skill => {
                        <div className="text-rawSienna-500 text-xl tracking-wider py-3 px-4 mx-4 inline-flex items-center gap-2 border-b-[3px] border-transparent whitespace-nowrap font-semibold" >{skill}</div>
                    }) :
                    <p className="text-gray-500 dark:text-gray-400 text-center pb-4">
                        You currently don't have any skills listed. Add a skills by clicking edit profile in the top right corner.
                    </p>} 
                </div>
                
            </div>
            
            Profile Page for {user?.attributes?.email}
        </div>
    )
}

export default Page