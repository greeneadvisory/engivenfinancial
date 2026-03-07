interface CardData {
    id: number;
    title: string;
    iconClass: string;
    color: string;
    badgeText: string;
    borderClass: string;
}

export const Dealsdata: CardData[] = [
    {
        id:1,
        title: 'Leads Discovered',
        iconClass: 'ri-circle-fill',
        color: 'primary',
        badgeText: '24',
        borderClass: 'border-primary/50',
    },
    {
        id:2,
        title: 'Qualified Leads',
        iconClass: 'ri-circle-fill',
        color: 'primarytint1color',
        badgeText: '17',
        borderClass: 'border-primarytint1color/50',
    },
    {
        id:3,
        title: 'Contact Initiated',
        iconClass: 'ri-circle-fill',
        color: 'primarytint2color',
        badgeText: '5',
        borderClass: 'border-primarytint2color/50',
    },
    {
        id:4,
        title: 'Needs Identified',
        iconClass: 'ri-circle-fill',
        color: 'primarytint3color',
        badgeText: '43',
        borderClass: 'border-primarytint3color/50',
    },
    {
        id:5,
        title: 'Negotiation',
        iconClass: 'ri-circle-fill',
        color: 'secondary',
        badgeText: '15',
        borderClass: 'border-secondary/50',
    },
    {
        id:6,
        title: 'Deal Finalized',
        iconClass: 'ri-circle-fill',
        color: 'success',
        badgeText: '127 Deals',
        borderClass: 'border-success/50',
    },
];

interface Deals {
    id: number;
    name: string;
    date: string;
    company: string;
    amount: string;
    avatar: string;
    clientName: string;
    Amounttext: string
}
export const Dealsdata1: Deals[] = [
    {
        id: 1,
        name: 'John Doe',
        date: '21, May 2024 - 10:25AM',
        company: 'Beta Innovations',
        amount: '$50,000',
        avatar: '../../../assets/images/faces/11.jpg',
        clientName: 'Initech Info',
        Amounttext: 'Amount'
    },
    {
        id: 2,
        name: 'Jane Smith',
        date: '15, April 2024 - 02:15PM',
        company: 'Alpha Solutions',
        amount: '$75,000',
        avatar: '../../../assets/images/faces/12.jpg',
        clientName: 'TechCorp',
        Amounttext: 'Amount'
    },
    {
        id: 3,
        name: 'Michael Johnson',
        date: '05, March 2024 - 11:30AM',
        company: 'Gamma Enterprises',
        amount: '$100,000',
        avatar: '../../../assets/images/faces/13.jpg',
        clientName: 'NextGen Inc',
        Amounttext: 'Amount'
    },
    {
        id: 4,
        name: 'Emma Wilson',
        date: '10, February 2024 - 09:45AM',
        company: 'Delta Dynamics',
        amount: '$120,000',
        avatar: '../../../assets/images/faces/14.jpg',
        clientName: 'InnovateX',
        Amounttext: 'Amount'
    },
];

export const Dealsdata2: Deals[] = [
    {
        id: 1,
        name: 'Daniel Brown',
        date: '18, January 2024 - 03:20PM',
        company: 'Omega Solutions',
        amount: '$95,000',
        avatar: '../../../assets/images/faces/15.jpg',
        clientName: 'SkyTech',
        Amounttext: 'Amount'
    },
    {
        id: 2,
        name: 'Emily Brown',
        date: '18, June 2024 - 11:15AM',
        company: 'Delta Innovations',
        amount: '$65,000',
        avatar: '../../../assets/images/faces/12.jpg',
        clientName: 'Tech Dynamics',
        Amounttext: 'Amount'
    },
    {
        id: 3,
        name: 'James Wilson',
        date: '12, June 2024 - 09:30AM',
        company: 'Gamma Enterprises',
        amount: '$80,000',
        avatar: '../../../assets/images/faces/13.jpg',
        clientName: 'Tech Solutions Inc.',
        Amounttext: 'Amount'
    },
    {
        id: 4,
        name: 'Liam Smith',
        date: '30, June 2024 - 01:45PM',
        company: 'Zeta Corporation',
        amount: '$105,000',
        avatar: '../../../assets/images/faces/12.jpg',
        clientName: 'TechVision Ltd.',
        Amounttext: 'Agreed Amount'
    },
];

export const Dealsdata3: Deals[] = [
    {
        id: 1,
        name: 'Sarah Martinez',
        date: '05, June 2024 - 10:45AM',
        company: 'AlphaTech Solutions',
        amount: '$75,000',
        avatar: '../../../assets/images/faces/14.jpg',
        clientName: 'InnovateX',
        Amounttext: 'Amount'
    },
    {
        id: 2,
        name: 'Robert Lee',
        date: '30, May 2024 - 02:00PM',
        company: 'Omega Ventures',
        amount: '$90,000',
        avatar: '../../../assets/images/faces/15.jpg',
        clientName: 'NextGen Tech',
        Amounttext: 'Amount'
    },
];

export const Dealsdata4: Deals[] = [
    {
        id: 1,
        name: 'David Wilson',
        date: '08, June 2024 - 09:45AM',
        company: 'Alpha Solutions',
        amount: '$70,000',
        avatar: '../../../assets/images/faces/11.jpg',
        clientName: 'Tech Innovations',
        Amounttext: 'Amount'
    },
    {
        id: 2,
        name: 'Emma Clark',
        date: '20, May 2024 - 03:30PM',
        company: 'Zeta Dynamics',
        amount: '$85,000',
        avatar: '../../../assets/images/faces/16.jpg',
        clientName: 'TechStar Solutions',
        Amounttext: 'Amount'
    },
    {
        id: 3,
        name: 'David Wilson',
        date: '07, June 2024 - 09:45AM',
        company: 'AlphaTech Solutions',
        amount: '$100,000',
        avatar: '../../../assets/images/faces/11.jpg',
        clientName: 'Tech Innovations',
        Amounttext: "Budget"
    },
    {
        id: 4,
        name: 'Sophie Adams',
        date: '14, June 2024 - 11:30AM',
        company: 'GammaTech Solutions',
        amount: '$120,000',
        avatar: '../../../assets/images/faces/15.jpg',
        clientName: 'InnovateX',
        Amounttext: "Estimated Revenue"
    },
];

export const Dealsdata5: Deals[] = [
    {
        id: 1,
        name: 'Olivia Moore',
        date: '25, May 2024 - 02:15PM',
        company: 'Delta Dynamics',
        amount: '$90,000',
        avatar: '../../../assets/images/faces/9.jpg',
        clientName: 'TechStar Solutions',
        Amounttext: "Expected Investement"
    },
    {
        id: 2,
        name: 'Michael Johnson',
        date: '15, June 2024 - 11:00AM',
        company: 'AlphaTech Solutions',
        amount: '$120,000',
        avatar: '../../../assets/images/faces/15.jpg',
        clientName: 'Tech Innovations',
        Amounttext: "Proposed Amount"
    },
    {
        id: 3,
        name: 'Emily Davis',
        date: '10, June 2024 - 09:30AM',
        company: 'BetaTech Innovations',
        amount: '$150,000',
        avatar: '../../../assets/images/faces/16.jpg',
        clientName: 'Tech Solutions Ltd.',
        Amounttext: "Estimated Budget"
    },
];

export const Dealsdata6: Deals[] = [
    {
        id: 1,
        name: 'Emma Thompson',
        date: '25, June 2024 - 03:45PM',
        company: 'Delta Dynamics',
        amount: '$120,000',
        avatar: '../../../assets/images/faces/12.jpg',
        clientName: 'TechStar Innovations',
        Amounttext: 'Amount'
    },
    {
        id: 2,
        name: 'Sophia Garcia',
        date: '18, June 2024 - 09:30AM',
        company: 'Completed Gamma Technologies',
        amount: '$85,000',
        avatar: '../../../assets/images/faces/3.jpg',
        clientName: 'TechSolutions Inc.',
        Amounttext: "Investment"
    }
];

