"use client";
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/components/Context";

const Page = () => {
  const [policyContent, setPolicyContent] = useState("");

  useEffect(() => {
    // Fetch the privacy policy text file
    fetch("./privacy.txt") // Adjust the path as needed
      .then((response) => response.text())
      .then((data) => {
        setPolicyContent(data);
      })
      .catch((error) => {
        console.error("Error fetching privacy policy:", error);
      });
    console.log(policyContent);
  }, []);
 const headerStyle = {
    fontSize: "45px", // Adjust the font size as needed
     fontWeight: "bold", // Make the text bold
    marginLeft: "20px", // Left align the text horizontally
    // You can also add other styling properties like font-weight, color, etc.
  };
  const subHeaderStyle = {
    fontSize: "35px", // Adjust the font size as needed
     fontWeight: "bold", // Make the text bold
    marginLeft: "20px", // Left align the text horizontally
    // You can also add other styling properties like font-weight, color, etc.
  };
  const blueTextStyle = {
    color: "#00416B", // Set the text color to blue
  };
 const policyText = "Locol Solutions LLC (“Company,” “we,” or “us”) respects your privacy and is committed to protecting it through this Privacy Policy.\n" +
     "This Privacy Policy governs your access to and use of https://loco-l.com/, including any content, functionality and services offered on or through https://loco-l.com/ (the “Website”), whether as a guest or a registered user.\n" +"\nWhen accessing the Website, the Company will learn certain information about you, both automatically and through voluntary actions you may take, during your visit. This policy applies to information we collect on the Website and in email, text, or other electronic messages between you and the Website.\n" +
 "\nPlease read the Privacy Policy carefully before you start to use the Website. By using the Website or by clicking to accept or agree to the Terms of Use when this option is made available to you, you accept and agree to be bound and abide by the Privacy Policy. If you do not want to agree to the Privacy Policy, you must not access or use the Website.\n";
 const headerText = "\nChildren Under The Age Of 13\n";
 const policyText2 =
     "\n" +
     "Our Website is not intended for children under 13 years of age. No one under age 13 may provide any information to or on the Website. We do not knowingly collect personal information from children under 13. If you are under 13, do not use or provide any information on this Website or on or through any of its features/register on the Website, make any purchases through the Website, use any of the interactive or public comment features of this Website or provide any information about yourself to us, including your name, address, telephone number, email address, or any screen name or user name you may use.\n" +
     "\n" +
     "If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 13, please contact us at info@loco-l.com.\n";
 const headerText2 = "\nInformation We Collect About You\n";
 const policyText3 =    "\n" +
     "When you access the Website, the Company will learn certain information about you during your visit.\n" +"\nInformation You Provide To Us. The Website provides various places for users to provide information. We collect information that users provide by filling out forms on the Website, communicating with us via contact forms, responding to surveys, search queries on our search feature, providing comments or other feedback, and providing information when ordering a product or service via the Website.\n" +
     "\n" +
     "We use information you provide to us to deliver the requested product and/or service, to improve our overall performance, and to provide you with offers, promotions, and information.\n";
 const headerText3 = "\nInformation We Collect Through Automatic Data Collection Technology\n";
 const policyText4 =
     "\n" +
     "As you navigate through our Website, we may use automatic data collection technologies including Google Analytics to collect certain information about your equipment, browsing actions, and patterns. This will generally include information about your location, your traffic pattern through our website, and any communications between your computer and our Website. Among other things, we will collect data about the type of computer you use, your Internet connection, your IP address, your operating system, and your browser type.\n" +
     "The information we collect automatically is used for statistical data and will not include personal information. We use this data to improve our Website and our service offerings. To the extent that you voluntarily provide personal information to us, our systems will associate the automatically collected information with your personal information.\n";
 const headerText4 = "\nUse of Cookies And Pixels\n";
 const policyText5 = "\n" +
     "Similar to other commercial websites, our website utilizes a standard technology called “cookies” and server logs to collect information about how our site is used. Information gathered through cookies and server logs may include the date and time of visits, the pages viewed, time spent at our site, and the websites visited just before and just after our own, as well as your IP address.\n" +
     "\n" +
     "A cookie is a very small text document, which often includes an anonymous unique identifier. When you visit a website, that site’s computer asks your computer for permission to store this file in a part of your hard drive specifically designated for cookies. Each website can send its own cookie to your browser if your browser’s preferences allow it, but (to protect your privacy) your browser only permits a website to access the cookies it has already sent to you, not the cookies sent to you by other sites.\n" +
     "\n" +
     "The Company reserves the right to use technological equivalents of cookies, including social media pixels. These pixels allow social media sites to track visitors to outside websites so as to tailor advertising messages users see while visiting that social media website. The Company reserves the right to use these pixels in compliance with the policies of the various social media sites.\n" +
     "\n" +
     "California law requires us to let you know whether we honor “Do Not Track” requests set by your browser. Unfortunately, there is no industry or legal standard (or easy technological solution) about how to handle these responses. Thus, we don’t currently respond to Do Not Track signals at this time.\n";
 const headerText5 = "\nThird Party Use Of Cookies\n";
 const policyText6 =
     "\n" +
     "Some content or applications, including advertisements, on the Website are served by third-parties, including advertisers, ad networks and servers, content providers, and application providers. These third parties may use cookies alone or in conjunction with web beacons or other tracking technologies to collect information about you when you use our website. The information they collect may be associated with your personal information or they may collect information, including personal information, about your online activities over time and across different websites and other online services. They may use this information to provide you with interest-based (behavioral) advertising or other targeted content.\n" +
     "\n" +
     "We do not control these third parties’ tracking technologies or how they may be used. If you have any questions about an advertisement or other targeted content, you should contact the responsible provider directly.\n";
 const headerText6 = "\nEmail Information\n";
 const policyText7 =
     "\n" +
     "If you choose to correspond with us through email, we may retain the content of your email messages together with your email address and our responses. We provide the same protections for these electronic communications that we employ in the maintenance of information received online, mail, and telephone. This also applies when you register for our website, sign up through any of our forms using your email address or make a purchase on this site. For further information see the email policies below.\n";
 const headerText7 = "\nEmail Policies\n";
 const policyText8 =
     "\n" +
     "We are committed to keeping your e-mail address confidential. We do not sell, rent, or lease our subscription lists to third parties, and will not disclose your email address to any third parties except as allowed in the section titled Disclosure of Your Information.\n" +
     "\n" +
     "We will maintain the information you send via e-mail in accordance with applicable federal law.\n" +
     "\n" +
     "In compliance with the CAN-SPAM Act, all e-mails sent from our organization will clearly state who the e-mail is from and provide clear information on how to contact the sender. In addition, all e-mail messages will also contain concise information on how to remove yourself from our mailing list so that you receive no further e-mail communication from us.\n" +
     "\n" +
     "Our emails provide users the opportunity to opt-out of receiving communications from us and our partners by reading the unsubscribe instructions located at the bottom of any e-mail they receive from us at anytime.\n" +
     "\n" +
     "Users who no longer wish to receive our newsletter or promotional materials may opt-out of receiving these communications by clicking on the unsubscribe link in the e-mail.\n";
 const headerText8 = "\nHow And Why We Collect Information\n";
 const policyText9 =
     "\n" +
     "The Company collects your information in order to record and support your participation in the activities you select. If you register to download a book or resources, sign up for our newsletter, and/or purchase a product from us, we collect your information. We use this information to track your preferences and to keep you informed about the products and services you have selected to receive and any related products and/or services. As a visitor to this Website, you can engage in most activities without providing any personal information. It is only when you seek to download resources and/or register for services that you are required to provide information.\n" +
     "\n" +
     "If you are outside the European Union and opt to receive any free resources, participate in any free training programs, register for a webinar, register for a live event, register for a seminar, or purchase any products sold by the Company on this Website, we will automatically enroll you to receive our free email newsletter. If you do not wish to receive this newsletter, you can unsubscribe anytime. We include an “unsubscribe” link at the bottom of every email we send. If you ever have trouble unsubscribing, you can send an email to info@loco-l.com requesting to unsubscribe from future emails.\n" +
     "\n" +
     "If you are in the European Union and opt to receive any free resources, participate in any free training programs, register for a webinar, register for a live event, register for a seminar, or purchase any products sold by the Company on this Website, we will only enroll you to receive our free email newsletter if you affirmatively consent to it. If you do not wish to receive this newsletter, you can unsubscribe anytime. We include an “unsubscribe” link at the bottom of every email we send. If you ever have trouble unsubscribing, you can send an email to info@loco-l.com requesting to unsubscribe from future emails.\n";
 const headerText9 = "\nHow Do We Use the Information That You Provide to Us?\n";
 const policyText10 =
     "\n" +
     "We use personal information for purposes of presenting our Website and its contents to you, providing you with information, providing you with offers for products and services, providing you with information about your subscriptions and products, carrying out any contract between you and the Company, administering our business activities, providing customer service, and making available other items and services to our customers and prospective customers.\n" +
     "\n" +
     "From time-to-time, we may use the information you provide to us to make you offers to purchase products and services provided by third parties in exchange for a commission to be paid to us by such third parties. Should you opt to take part in such promotions, the third parties will receive your information.\n" +
     "From time-to-time, we may use the information you provide to us to display advertisements to you that are tailored to your personal characteristics, interests, and activities.\n";
 const headerText10 = "\nDisclosure Of Your Information\n";
 const policyText11 =
     "\n" +
     "As a general rule, we do not sell, rent, lease or otherwise transfer any information collected whether automatically or through your voluntary action.\n" +
     "\n" +
     "We may disclose your personal information to our subsidiaries, affiliates, and service providers for the purpose of providing our services to you.\n" +
     "\n" +
     "We may disclose your personal information to a third party, including a lawyer or collection agency, when necessary to enforce our terms of service or any other agreement between you and the Company.\n" +
     "\n" +
     "We may provide your information to any successor in interest in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of the Company’s assets and/or business.\n" +
     "\n" +
     "We may disclose information when legally compelled to do so, in other words, when we, in good faith, believe that the law requires it or for the protection of our legal rights or when compelled by a court or other governmental entity to do so.\n";
 const headerText11 = "\nHow Do We Protect Your Information and Secure Information Transmissions?\n";
 const policyText12 =
     "\n" +
     "We employ commercially reasonable methods to ensure the security of the information you provide to us and the information we collect automatically. This includes using standard security protocols and working only with reputable third-party vendors.\n" +
     "\n" +
     "Email is not recognized as a secure medium of communication. For this reason, we request that you do not send private information to us by email. However, doing so is allowed, but at your own risk. Some of the information you may enter on our website may be transmitted securely via a secure medium known as Secure Sockets Layer, or SSL. Credit Card information and other sensitive information is never transmitted via email.\n" +
     "\n" +
     "The Company may use software programs to create summary statistics, which are used for such purposes as assessing the number of visitors to the different sections of our site, what information is of most and least interest, determining technical design specifications, and identifying system performance or problem areas.\n" +
     "\n" +
     "For site security purposes and to ensure that this service remains available to all users, the Company uses software programs to monitor network traffic to identify unauthorized attempts to upload or change information, or otherwise cause damage.\n";
 const headerText12 = "\nPolicy Changes\n";
 const policyText13 =
     "\n" +
     "It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users’ personal information, we will notify you by email to the email address specified in your account and/or through a notice on the Website home page. The date the privacy policy was last revised is identified at the bottom of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our Website and this privacy policy to check for any changes.\n" +"\nVisitors’ GDPR Rights\n" +
     "\n" +
     "If you are within the European Union, you are entitled to certain information and have certain rights under the General Data Protection Regulation. Those rights include:\n" +
     "\n" +
     "We will retain the any information you choose to provide to us until the earlier of: (a) you asking us to delete the information, (b) our decision to cease using our existing data providers, or (c) the Company decides that the value in retaining the data is outweighed by the costs of retaining it.\n" +
     "\n" +
     "You have the right to request access to your data that the Company stores and the rights to either rectify or erase your personal data.\n" +
     "\n" +
     "You have the right to seek restrictions on the processing of your data.\n" +
     "\n" +
     "You have the right to object to the processing of your data and the right to the portability of your data.\n" +
     "\n" +
     "To the extent that you provided consent to the Company’s processing of your personal data, you have the right to withdraw that consent at any time, without affecting the lawfulness of processing based upon consent that occurred prior to your withdrawal of consent.\n" +
     "\n" +
     "You have the right to lodge a complaint with a supervisory authority that has jurisdiction over issues related to the General Data Protection Regulation.\n" +
     "\n" +
     "We require only the information that is reasonably required to enter into a contract with you. We will not require you to provide consent for any unnecessary processing as a condition of entering into a contract with us.\n" +"\nContact Us\n" +
     "\n" +
     "The Company welcomes your questions or comments regarding the Privacy Policy:\n" +
     "\n" +
     "Locol Solutions LLC\n" +
     "1202a East 29th Street\n" +
     "Austin, Texas 78722\n" +
     "Email Address: info@loco-l.com\n" +
     "\n" +
     "Effective as of Jan 27, 2023";
 //const policyTextWithLineBreaks = policyText.replace(/\n/g, '<br>');
return (
  <div>
    <h2 style={headerStyle}>   Locol's Privacy Policy</h2>
     <p style={{ whiteSpace: "pre-line", ... blueTextStyle}}>{policyText}</p>
      <p style={{ whiteSpace: "pre-line", ... blueTextStyle, ... subHeaderStyle}}>{headerText}</p>
      <p style={{ whiteSpace: "pre-line", ... blueTextStyle}}>{policyText2}</p>
      <p style={{ whiteSpace: "pre-line", ... blueTextStyle, ... subHeaderStyle}}>{headerText2}</p>
       <p style={{ whiteSpace: "pre-line", ... blueTextStyle}}>{policyText3}</p>
      <p style={{ whiteSpace: "pre-line", ... blueTextStyle, ... subHeaderStyle}}>{headerText3}</p>
      <p style={{ whiteSpace: "pre-line", ... blueTextStyle}}>{policyText4}</p>
      <p style={{ whiteSpace: "pre-line", ... blueTextStyle, ... subHeaderStyle}}>{headerText4}</p>
           <p style={{ whiteSpace: "pre-line", ... blueTextStyle}}>{policyText5}</p>
      <p style={{ whiteSpace: "pre-line", ... blueTextStyle, ... subHeaderStyle}}>{headerText5}</p>
      <p style={{ whiteSpace: "pre-line", ... blueTextStyle}}>{policyText6}</p>
      <p style={{ whiteSpace: "pre-line", ... blueTextStyle, ... subHeaderStyle}}>{headerText6}</p>
       <p style={{ whiteSpace: "pre-line", ... blueTextStyle}}>{policyText7}</p>
      <p style={{ whiteSpace: "pre-line", ... blueTextStyle, ... subHeaderStyle}}>{headerText7}</p>
      <p style={{ whiteSpace: "pre-line", ... blueTextStyle}}>{policyText8}</p>
      <p style={{ whiteSpace: "pre-line", ... blueTextStyle, ... subHeaderStyle}}>{headerText8}</p>
           <p style={{ whiteSpace: "pre-line", ... blueTextStyle}}>{policyText9}</p>
      <p style={{ whiteSpace: "pre-line", ... blueTextStyle, ... subHeaderStyle}}>{headerText9}</p>
      <p style={{ whiteSpace: "pre-line", ... blueTextStyle}}>{policyText10}</p>
      <p style={{ whiteSpace: "pre-line", ... blueTextStyle, ... subHeaderStyle}}>{headerText10}</p>
       <p style={{ whiteSpace: "pre-line", ... blueTextStyle}}>{policyText11}</p>
      <p style={{ whiteSpace: "pre-line", ... blueTextStyle, ... subHeaderStyle}}>{headerText11}</p>
      <p style={{ whiteSpace: "pre-line", ... blueTextStyle}}>{policyText12}</p>
      <p style={{ whiteSpace: "pre-line", ... blueTextStyle, ... subHeaderStyle}}>{headerText12}</p>
      <p style={{ whiteSpace: "pre-line", ... blueTextStyle}}>{policyText13}</p>

    {/* The rest of your PrivacyPage component code goes here */}
  </div>
);


};

export default Page;

