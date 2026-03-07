import Link from "next/link";

export const timelineData = [
    {
        avatar: "",
        title: "Project Kick-off Meeting",
        description: "Discuss project scope, objectives, and timelines.",
        timestamp: "15, Jun 2024 - 06:20",
        data: "A",
        color: 'primary'
    },
    {
        avatar: "",
        title: "Project Details Page Planning",
        description: "Define feature requirements and layout for the project details page.",
        timestamp: "20, Jun 2024 - 09:00",
        data: "B",
        color: 'primarytint2color'
    },
    {
        avatar: "../../../assets/images/faces/12.jpg",
        title: "Brenda Adams shared a document with you.",
        desClass: 'profile-activity-media mb-0 flex items-center',
        description: (
            <>
               <Link scroll={false} href="#!">
                    <img src="../../../assets/images/media/file-manager/3.png" alt=""/>
                </Link>  
                <span className="text-[11px] text-textmuted dark:text-textmuted/50">728.62KB</span>
            </>
        ),
        timestamp: "18, Jun 2024 - 09:15",
    },
    {
        avatar: "",
        title:"<span className='text-defaulttextcolor'><b>You</b> shared a post with 4 people <b>John,Emma,Liam,Sophie</b></span>",
        description: "",
        timestamp: "30, Jun 2024 - 13:20",
        media: ["../../../assets/images/media/media-21.jpg"],
        sharedWith: [
            "../../../assets/images/faces/3.jpg",
            "../../../assets/images/faces/9.jpg",
            "../../../assets/images/faces/6.jpg",
            "../../../assets/images/faces/14.jpg",
        ],
        data: "J",
        color: 'primarytint3color'
    },
    {
        avatar: "../../../assets/images/faces/7.jpg",
        title: "Security and Compliance Audit",
        description: "Ensure the system adheres to security and regulatory requirements.",
        timestamp: "",
    },
    {
        avatar: "../../../assets/images/media/media-45.jpg",
        title: "<b>Lucas</b>  commented on Project <a class='text-secondary' href='#!'><u>#System Integration</u></a>",
        description: "Integration progress looks good, keep it up! 👍",
        timestamp: "25, Jun 2024 - 10:52",
        media: [
            "../../../assets/images/media/media-28.jpg",
            "../../../assets/images/media/media-30.jpg",
        ],
    },
];
