import React, { useState } from 'react'

const bioPlaceholder = "Hello my name is Jane Doe. I study at the University of Texas and I major in Graphic Design. This is my bio and I talk about myself and what kinds of services and skills I offer..."
const services = [
    { name: 'Social Media Marketing', value: 'social-media-marketing' },
    { name: 'Search Engine Optimization', value: 'search-engine-optimization' },
    { name: 'Email Marketing', value: 'email-marketing' },
    { name: 'Copywriting', value: 'copywriting' },
    { name: 'Marketing Strategy', value: 'marketing-strategy' },
    { name: 'Video Marketing', value: 'video-marketing' },
    { name: 'Web Analytics', value: 'web-analytics' },
    { name: 'Graphic Design', value: 'graphic-design' },
    { name: 'Web Development', value: 'web-development' },
];

const EditProfileModal = () => {
    const [fileData, setFileData] = useState();


    // Upload image to S3 bucket
    const uploadImage = async (file) => {
        try {
        const userId = user.attributes.sub;
        const result = await Storage.put(`${userId}/pfp`, file, {
            contentType: file.type,
        });
        // setFileStatus(true);
        // console.log('File uploaded successfully:', result);

        const updatedImageUrl = await getImageUrl(userId, "pfp");
        setImageUrl(updatedImageUrl);
        } catch (error) {
        console.error("Error uploading file:", error);
        }
    };

    // Upload document to S3 bucket
    const uploadDocument = async () => {
        try {
        const userId = user.attributes.sub;

        const result = await Storage.put(`${userId}/portfolio.pdf`, fileData, {
            contentType: fileData.type,
        });
        // setFileStatus(true);
        console.log("Portfolio uploaded successfully:", result);

        const updatedDocumentUrl = await getDocumentUrl(userId, "portfolio.pdf");
        setDocumentUrl(updatedDocumentUrl);
        } catch (error) {
        console.error("Portfolio uploading document:", error);
        }
    };

    return (
        <div id="hs-vertically-centered-modal" class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
            <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                <div class="flex flex-col bg-white border shadow-sm rounded-xl tracking-wide p-3">
                    <div class="flex justify-between items-center py-3 px-4">
                        <h3 class="font-semibold text-lg text-regalBlue-800">Edit Profile</h3>
                        <button type="button" class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm" data-hs-overlay="#hs-vertically-centered-modal">
                            <span class="sr-only">Close</span>
                            <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
                            </svg>
                        </button>
                    </div>
                    <div className="p-4">
                        <div class="px-4 py-3 overflow-y-auto">
                            <p class="text-gray-800">
                                This is a wider card with supporting text below as a natural lead-in to additional content.
                            </p>
                        </div>
                        <div class="px-4 py-3 overflow-y-auto">
                            <label for="about" class="block text-md font-medium mb-2 dark:text-white">About (Bio)</label>
                            <textarea id="about" rows={3} class="py-3 px-4 block w-full border border-gray-200 rounded-md focus:outline-none text-sm focus:border-regalBlue-700 focus:ring-regalBlue-700 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder={bioPlaceholder} autoFocus />
                        </div>
                        <div class="px-4 py-3 overflow-y-auto">
                            <label for="services" class="block text-md font-medium mb-2 dark:text-white">Offering Services</label>
                            <select id="services" defaultValue={"default"} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="default">Select services</option>
                                {services.map((service) => (
                                    <option key={service.value} value={service.value}>{service.name}</option>
                                ))}
                            </select>
                        </div>
                        <div class="px-4 py-3 overflow-y-auto">
                            <label for="interests" class="block text-md font-medium mb-2 dark:text-white">Interests</label>
                            <input id="interests" class="py-3 px-4 block w-full border border-gray-200 rounded-md focus:outline-none text-sm focus:border-regalBlue-700 focus:ring-regalBlue-700 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder={"Weightlifting, Outdoor sports, Cooking, Photography..."} />
                        </div>
                        <div class="px-4 py-3 overflow-y-auto">
                            <label for="skills" class="block text-md font-medium mb-2 dark:text-white">Skills</label>
                            <textarea id="skills" rows={2} class="py-3 px-4 block w-full border border-gray-200 rounded-md focus:outline-none text-sm focus:border-regalBlue-700 focus:ring-regalBlue-700 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder={"Photoshop, Figma, Canva, Wordpress, Web Development, Wix..."} />
                        </div>
                        <div class="px-4 py-3 overflow-y-auto">
                            <label for="portfolio" class="block text-md font-medium mb-2 dark:text-white">Portfolio (Resume)</label>
                            <div>
                                <input
                                    type="file" onChange={(e) => setFileData(e.target.files[0])}
                                    name="file-input" id="file-input"
                                    class="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400" />
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end items-center gap-x-2 py-3 px-4">
                        <button type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm " data-hs-overlay="#hs-vertically-centered-modal">
                            Close
                        </button>
                        <a class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent focus:border-transparent font-semibold bg-regalBlue-700 text-white hover:bg-regalBlue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm" href="#">
                            Save changes
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfileModal;
