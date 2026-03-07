import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";

export const Tasksdata = [
    {
        id:1,
        taskId: '#SHG - 01',
        title: 'Update Website Content',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        priority: 'High',
        status: 'In Progress',
        avatars: [
            {avatar:"../../../assets/images/faces/1.jpg"},
            {avatar:"../../../assets/images/faces/2.jpg"},
            {avatar:"../../../assets/images/faces/3.jpg"},
            {avatar:"../../../assets/images/faces/4.jpg"},
        ],
        likes: 11,
        comments: "02",
        color: 'primary',
        badges: [
            {badgeclass:"text-info  ms-1", badgetxt:"Development", badgecolor:"info/10"}
        ],
        idColor: 'primarytint1color'
    },
    {
        id:2,
        taskId: '#SHG - 02',
        title: 'Implement new feature for Karban app.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        priority: 'Low',
        status: 'In Progress',
        avatars: [
            {avatar:"../../../assets/images/faces/1.jpg" },
            {avatar:"../../../assets/images/faces/2.jpg" },
            {avatar:"../../../assets/images/faces/3.jpg" },
            {avatar:"../../../assets/images/faces/4.jpg"},
        ],
        likes: 15,
        comments:"03",
        color: 'warning',
        badges: [
            {badgeclass:"text-info  ms-1", badgetxt:"Development", badgecolor:"info/10"}],
        idColor: 'primarytint1color'
    },
    {
        id:3,
        taskId: '#SHG - 03',
        title: 'Develop new feature for Karban app',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        priority: 'Low',
        status: 'In Progress',
        avatars: [
            {avatar:"../../../assets/images/faces/5.jpg" },
            {avatar:"../../../assets/images/faces/9.jpg" },
        ],
        likes: 25,
        comments: "05",
        color: 'warning',
        badges: [{badgeclass:"text-primarytint3color  ms-1", badgetxt:"Development", badgecolor:"primarytint3color/10"},
            {badgeclass:"text-primarytint2color  ms-1", badgetxt:"UI/UX", badgecolor:"primarytint2color/10"}],
        idColor: 'primarytint1color'
    },
    {
        id:4,
        taskId: '#SHG - 04',
        title: 'Design multi-usage landing page.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        priority: 'Low',
        status: 'Pending',
        avatars: [
            {avatar:"../../../assets/images/faces/5.jpg"  },
            {avatar:"../../../assets/images/faces/9.jpg" }
        ],
        likes: 30,
        comments: "08",
        color: 'warning',
        badges: [
            {badgeclass:"text-info  ms-1", badgetxt:"Development", badgecolor:"info/10"},
            {badgeclass:"text-info  ms-1", badgetxt:"Development", badgecolor:"info/10"}],
        idColor: 'primarytint1color'
    }
];

export const Taskdata1 = [
    {
        id:1,
        taskId: '#SHG - 05',
        title: 'Adding Authentication Pages.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        priority: 'Low',
        status: 'In Progress',
        likes: "08",
        comments: "04",
        badges: [ {badgeclass:"text-primarytint2color ms-1", badgetxt:"Authentication", badgecolor:"primarytint2color/10"}],
        avatars: [
            {avatar:"../../../assets/images/faces/4.jpg"  },
            {avatar:"../../../assets/images/faces/13.jpg"  },
            {avatar:"../../../assets/images/faces/5.jpg" },
        ],
        color: "warning",
        idColor: 'info'
    },
    {
        id:2,
        taskId: '#SHG - 06',
        title: 'New Marketing Campaign Strategy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        priority: 'High',
        status: 'In Progress',
        likes: 23,
        comments: 12,
        badges: [
            {badgeclass:"text-primarytint3color ms-1", badgetxt:"Marketing", badgecolor:"primarytint3color/10"}],
        avatars: [
            {avatar:"../../../assets/images/faces/4.jpg"  },
            {avatar:"../../../assets/images/faces/13.jpg"  },
            {avatar:"../../../assets/images/faces/5.jpg" },
        ],
        color: "primary",
        idColor: 'info'
    }
]

export const Taskdata2 = [
    {
        id:1,
        taskId: "#SHG - 07",
        title: "Developing Calendar & Mail pages.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        badges: [
            {badgeclass:"text-primary ms-1", badgetxt:"UI Design", badgecolor:"primary/10"},
            {badgeclass:"text-primarytint3color ms-1", badgetxt:"Development", badgecolor:"primarytint3color/10"}
        ],
        priority: "Medium",
        status: "In Progress",
        avatars: [
            {avatar:"../../../assets/images/faces/7.jpg"  },
            {avatar:"../../../assets/images/faces/10.jpg"  },
            {avatar:"../../../assets/images/faces/11.jpg" },
        ],
        likes: 10,
        comments: 18,
        color: 'info',
        idColor: 'primarytint1color'
    },
    {
        id:2,
        taskId: "#SHG - 08",
        title: "Project Design in Figma and Sketch",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        badges: [
            {badgeclass:"text-primarytint3color ms-1", badgetxt:"Design", badgecolor:"primarytint3color/10"}
        ],
        priority: "Medium",
        status: "In Progress",
        avatars: [
            {avatar:"../../../assets/images/faces/13.jpg"  },
            {avatar:"../../../assets/images/faces/6.jpg" },
        ],
        likes: "05",
        comments: "02",
        color: 'info',
        idColor: 'primarytint1color'
    },
];

export const Taskdata4 = [
    {
        id:1,
        taskId: "#SHG - 11",
        title: "New Project Update",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        priority: "High",
        status: "Completed",
        badges: [{badgeclass:"text-primarytint3color ms-1", badgetxt:"Review", badgecolor:"primarytint3color/10"}],
        avatars: [
            {avatar:"../../../assets/images/faces/6.jpg"  },
            {avatar:"../../../assets/images/faces/13.jpg" },
        ],
        likes:"09",
        comments: 35,
        color: 'primarytint1color',
        idColor: 'primary'
    },
    {
        id:2,
        taskId: "#SHG - 12",
        title: "React JS New Version Update",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        priority: "High",
        status: "Completed",
        badges: [{badgeclass:"text-primarytint3color ms-1", badgetxt:"Development", badgecolor:"primarytint3color/10"}],
        avatars: [
            {avatar:"../../../assets/images/faces/10.jpg"  },
            {avatar:"../../../assets/images/faces/11.jpg"  },
            {avatar:"../../../assets/images/faces/1.jpg"  },
        ],
        likes: 22,
        comments: 12,
        color: 'primarytint1color',
        idColor: 'primary'
    },
    {
        id:3,
        taskId: "#SHG - 13",
        title: "Project Discussion with Client",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        priority: "High",
        status: "Completed",
        badges: [{badgeclass:"text-primarytint3color ms-1", badgetxt:"Discussion", badgecolor:"primarytint3color/10"}],
        avatars: [
            {avatar:"../../../assets/images/faces/4.jpg"  },

        ],
        likes: 11,
        comments: 12,
        color: 'primarytint1color',
        idColor: 'primary'
    },
];
export const Taskdata5 = [
    {
        id:1,
        taskId: "#SHG - 10",
        title: "Design Architecture Strategy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        priority: "Medium",
        status: "In Progress",
        badges: [{badgeclass:"text-primarytint3color ms-1", badgetxt:"Review", badgecolor:"primarytint3color/10"}
    ],
        avatars: [
                {avatar:"../../../assets/images/faces/3.jpg"},
                {avatar:"../../../assets/images/faces/5.jpg"},
                {avatar:"../../../assets/images/faces/7.jpg"},
        ],
        likes: "09",
        comments: 35,
        color: 'info',
        idColor: 'primarytint1color'
    },
]