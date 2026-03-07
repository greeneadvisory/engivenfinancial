interface faqsTypes {
    id: string;
    title: string;
    content: string;
}
export const Generaldata = [
    {
        Id: 'faq-collapse-one',
        title: '1. How can I change the color scheme of the admin template?',
        Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
        Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm active',
        content: <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">Navigate to the "Theme
          Settings" page, where you'll find options to choose a primary color and accent
          color. Select your desired colors and save the changes.
        </p>
      </div>,
        Mainid:"faq-one",
        Custombodyclass:"",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
      },
    { Id: 'faq-collapse-two', title: "2. Is it possible to upload a custom logo for my admin dashboard?",
      Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
      Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content: <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
          Most data tables in the admin template are exportable, including user data, reports,
          and custom datasets. Use the "Export" feature in the respective sections.
        </p>
      </div>,
        Mainid:"faq-two",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
    { Id: 'faq-collapse-three', title: "3. Are there predefined themes available, or can I create a custom theme?",
      Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
      Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content:  <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
          The export file size limit varies depending on the configuration. Check the "Export
          Settings" to view and adjust the size limits if necessary.
        </p>
      </div> ,
        Mainid:"faq-three", 
         Custombodyclass:"hidden",
         Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
         <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
    },
    { Id: 'faq-collapse-four', title: "4. Can I use my own CSS styles to override the default styles?",
      Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
      Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content:  <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
          Yes, you can customize export formats. In the "Export Settings," find options to
          choose the file format (CSV, Excel, etc.) and configure additional formatting
          options.
        </p>
      </div>,
        Mainid:"faq-four",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
    { Id: 'faq-collapse-five', title: "5. How do I enable or disable the dark mode?",
      Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
      Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content:<div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
          Navigate to the "Reports" section and use the "Generate Summary Report" button. Once
          generated, click on the download link to get the summary report.
        </p>
      </div>,
        Mainid:"faq-five",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
]
export const Themedata = [
    {
        Id: 'faq-collapse-one1',
        title: ' 1. What are user roles, and how do they affect access permissions?',
        Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
        Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content:  <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
          Yes, the admin template includes robust security features, including encryption,
          secure password hashing, and session management. Regularly update the system and use
          strong passwords for enhanced security.
        </p>
      </div>,
        Mainid:"faq-one1",
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
      },
    { Id: 'faq-collapse-two2', title: "2. How do I install the admin template?",
      Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
      Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content:  <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
          Yes, two-factor authentication is available. Access the "Security Settings" to
          enable and configure 2FA for added account security.
        </p>
      </div>,
        Mainid:"faq-two2",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
    { Id: 'faq-collapse-three3', title: "3. Is there a demo version available?",
      Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
      Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content: <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
          In case of a security concern, immediately change your password and notify the
          system administrator. Check the "Security Logs" for any suspicious activities.
        </p>
      </div> ,
        Mainid:"faq-three3", 
         Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
    },
    { Id: 'faq-collapse-four4', title: "4. How do I integrate the admin template with my existing project?",
      Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
      Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content: <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
          It's advisable to regularly check for updates and apply security patches. Aim to
          update the admin template whenever a new version is released to ensure the latest
          security measures are in place.
        </p>
      </div>,
        Mainid:"faq-four4",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
    { Id: 'faq-collapse-five5', title: "5. Does the admin template support responsive design?",
      Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
      Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content:  <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
          Yes, access restrictions can be set based on user roles. Utilize the "Role-based
          Access Control" (RBAC) settings to configure specific permissions for different user
          roles.
        </p>
      </div>,
        Mainid:"faq-five5",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
]

export const Userdata = [
    {
        Id: 'faq-collapse-one11',
        title: '1. Can I schedule automatic data exports for specific intervals?',
        Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
        Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content:  <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
        Yes, you can schedule automatic exports. Explore the "Scheduled Exports" section to
        set up recurring exports and choose the data format and destination.
        </p>
      </div>,
        Mainid:"faq-one11",
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
      },
    { Id: 'faq-collapse-two22', title: "2. What types of data can be exported from the admin template?",
      Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
      Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content:  <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
        Most data tables in the admin template are exportable, including user data, reports,
        and custom datasets. Use the "Export" feature in the respective sections.
        </p>
      </div>,
        Mainid:"faq-two22",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
    { Id: 'faq-collapse-three33', title: "3. Is there a limit to the size of exported files?",
      Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
      Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content: <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
        The export file size limit varies depending on the configuration. Check the "Export
        Settings" to view and adjust the size limits if necessary.
        </p>
      </div> ,
        Mainid:"faq-three33", 
         Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
    },
    { Id: 'faq-collapse-four44', title: "4. Can I customize the format of exported reports?",
      Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
      Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content: <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
        Yes, you can customize export formats. In the "Export Settings," find options to
            choose the file format (CSV, Excel, etc.) and configure additional formatting
            options.
        </p>
      </div>,
        Mainid:"faq-four44",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
    { Id: 'faq-collapse-five55', title: "5. How do I generate and download a quick summary report?",
      Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
      Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content:  <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
            Navigate to the "Reports" section and use the "Generate Summary Report" button. Once
            generated, click on the download link to get the summary report.
        </p>
      </div>,
        Mainid:"faq-five55",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
]
export const Securitydata = [
    {
        Id: 'faq-collapse-one111',
        title: '1. Are there security measures in place to protect against unauthorized access?',
        Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
        Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content:  <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
        Yes, the admin template includes robust security features, including encryption,
        secure password hashing, and session management. Regularly update the system and use
        strong passwords for enhanced security.
        </p>
      </div>,
        Mainid:"faq-one111",
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
      },
    { Id: 'faq-collapse-two222', title: "2. Can I enable two-factor authentication for admin accounts?",
      Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
      Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content:  <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
        Yes, two-factor authentication is available. Access the "Security Settings" to
        enable and configure 2FA for added account security.
        </p>
      </div>,
        Mainid:"faq-two222",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
    { Id: 'faq-collapse-three333', title: "3. What should I do if I suspect a security breach?",
      Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
      Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content: <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
        In case of a security concern, immediately change your password and notify the
        system administrator. Check the "Security Logs" for any suspicious activities.
        </p>
      </div> ,
        Mainid:"faq-three333", 
         Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
    },
    { Id: 'faq-collapse-four444', title: "4. How often should I update the admin template for security patches?",
      Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
      Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content: <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
          It's advisable to regularly check for updates and apply security patches. Aim to
          update the admin template whenever a new version is released to ensure the latest
          security measures are in place.
        </p>
      </div>,
        Mainid:"faq-four444",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
    { Id: 'faq-collapse-five555', title: "5. Can I restrict access to certain features based on user roles?",
      Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
      Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content:  <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
          Yes, access restrictions can be set based on user roles. Utilize the "Role-based
            Access Control" (RBAC) settings to configure specific permissions for different user
            roles.
        </p>
      </div>,
        Mainid:"faq-five555",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
]
export const Troubledata = [
    {
        Id: 'faq-collapse-one11111',
        title: '1. Are there security measures in place to protect against unauthorized access?',
        Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
        Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content:  <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
        Yes, the admin template includes robust security features, including encryption,
        secure password hashing, and session management. Regularly update the system and use
        strong passwords for enhanced security.
        </p>
      </div>,
        Mainid:"faq-one11111",
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
      },
    { Id: 'faq-collapse-two22222', title: "2. Can I enable two-factor authentication for admin accounts?",
      Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
      Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content:  <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
        Yes, two-factor authentication is available. Access the "Security Settings" to
        enable and configure 2FA for added account security.
        </p>
      </div>,
        Mainid:"faq-two22222",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
    { Id: 'faq-collapse-twenty33333', title: "3. What should I do if I suspect a security breach?",
      Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
      Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content: <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
        In case of a security concern, immediately change your password and notify the
        system administrator. Check the "Security Logs" for any suspicious activities.
        </p>
      </div> ,
        Mainid:"faq-twenty33333", 
         Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
    },
    { Id: 'faq-collapse-thirty44444', title: "4. How often should I update the admin template for security patches?",
      Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
      Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content: <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
          It's advisable to regularly check for updates and apply security patches. Aim to
          update the admin template whenever a new version is released to ensure the latest
          security measures are in place.
        </p>
      </div>,
        Mainid:"faq-thirty44444",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
    { Id: 'faq-collapse-five55555', title: "5. Can I restrict access to certain features based on user roles?",
      Svgclass1:"hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary block sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ",
      Svgclass:'hs-accordion-active:block hs-accordion-active:!text-white hs-accordion-active:!bg-primary hs-accordion-active:group-hover:!text-primary hidden sm:w-[1.25rem] h-[1.25rem] w-[2.25rem] ms-2 p-[3px] rounded-full text-gray-600 bg-light group-hover:text-defaulttextcolor dark:text-defaulttextcolor/80 ',
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content:  <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/80 ">
          Yes, access restrictions can be set based on user roles. Utilize the "Role-based
            Access Control" (RBAC) settings to configure specific permissions for different user
            roles.
        </p>
      </div>,
        Mainid:"faq-five55555",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
]
