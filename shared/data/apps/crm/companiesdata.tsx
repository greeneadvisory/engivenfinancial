
interface companydata {
    id: string;
    src1: string;
    src2: string;
    name: string;
    score: string;
    mail: string;
    cell: string;
    badge: string;
    text1: string;
    text2: string;
    color: string;
    class: string;
}

export const Companydata: companydata[] = [
    { id: '1', src1: "../../../assets/images/faces/4.jpg", src2: "../../../assets/images/company-logos/2.png", name: 'Michael', score: '350', mail: 'alpha.solutions@example.com', cell: '1234-567-890', badge: 'Enterprise', text1: 'Alpha Solutions', text2: ' Software Development ', color: 'primarytint1color', class: '' },
    { id: '2', src1: "../../../assets/images/faces/12.jpg", src2: "../../../assets/images/company-logos/3.png", name: 'Sophia', score: '420', mail: 'contact@betainnovations.com', cell: ' 9876-543-210', badge: 'Start Up', text1: 'Beta Innovations', text2: ' Biotechnology ', color: 'primary', class: '' },
    { id: '3', src1: "../../../assets/images/faces/14.jpg", src2: "../../../assets/images/company-logos/4.png", name: 'Oliver', score: '390', mail: 'info@gammasolutions.com', cell: ' 555-123-4567', badge: 'Enterprise', text1: 'Gamma Solutions', text2: ' Consulting Services ', color: 'primarytint1color', class: '' },
    { id: '4', src1: "../../../assets/images/faces/6.jpg", src2: "../../../assets/images/company-logos/5.png", name: 'Sophie', score: '280', mail: 'contact@deltatech.com', cell: ' 678-987-6543', badge: 'Start Up', text1: 'Delta Tech Solutions', text2: ' Technology Solutions ', color: 'primary', class: '' },
    { id: '5', src1: "../../../assets/images/faces/8.jpg", src2: "../../../assets/images/company-logos/6.png", name: 'Emma', score: '320', mail: 'info@epsiloninnovations.com', cell: '111-222-3333', badge: 'Start Up', text1: 'Epsilon Innovations', text2: ' Innovation Services ', color: 'primary', class: '' },
    { id: '6', src1: "../../../assets/images/faces/9.jpg", src2: "../../../assets/images/company-logos/8.png", name: 'Liam', score: '410', mail: 'info@thetasystems.com', cell: ' 456-789-0123', badge: 'Enterprise', text1: 'Theta Systems', text2: ' Software Solutions ', color: 'primarytint1color', class: '' },
    { id: '7', src1: "../../../assets/images/faces/15.jpg", src2: "../../../assets/images/company-logos/9.png", name: 'Ava', score: '290', mail: 'contact@iotainnovations.com', cell: '333-444-5555', badge: 'Start Up', text1: 'Iota Innovations', text2: ' Digital Marketing ', color: 'primary', class: '' },
    { id: '8', src1: "../../../assets/images/faces/1.jpg", src2: "../../../assets/images/company-logos/4.png", name: 'John', score: '570', mail: 'info@alphasolutions.com', cell: '1234-567-890', badge: 'Enterprise', text1: 'Alpha Solutions', text2: ' Technology Services ', color: 'primarytint1color', class: '' },
    { id: '9', src1: "../../../assets/images/faces/3.jpg", src2: "../../../assets/images/company-logos/5.png", name: 'Emily', score: '320', mail: 'contact@gammatech.com', cell: '8765-432-109', badge: 'Start Up', text1: 'Gamma Industries', text2: ' Engineering ', color: 'primary', class: '' },
];

interface selectdata1 {
    value: string;
    label: string;
}

export const Selectdata1: selectdata1[] = [
    { value: 'Company Size', label: 'Company Size' },
    { value: 'Corporate', label: 'Corporate' },
    { value: 'Small Business', label: 'Small Business' },
    { value: 'Micro Business', label: 'Micro Business' },
    { value: 'Startup', label: 'Startup' },
    { value: 'Large Enterprise', label: 'Large Enterprise' },
    { value: 'Medium Size', label: 'Medium Size' },
];

interface selectdata2 {
    value: string;
    label: string;
}
export const Selectdata2: selectdata2[] = [
    { value: 'Select Insustry', label: 'Select Insustry' },
    { value: 'Information Technology', label: 'Information Technology' },
    { value: 'Telecommunications', label: 'Telecommunications' },
    { value: 'Logistics', label: 'Logistics' },
    { value: 'Professional Services', label: 'Professional Services' },
    { value: 'Education', label: 'Education' },
    { value: 'Manufacturing', label: 'Manufacturing' },
    { value: 'Healthcare', label: 'Healthcare' }
];
