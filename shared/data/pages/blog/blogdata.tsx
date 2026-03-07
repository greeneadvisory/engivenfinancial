
interface categoriesProps {
    id?: number;
    icon?: string;
    title?: string;
    text?: string;
    color?: string;
}
export const Categoriesdata: categoriesProps[] = [
    { id: 1, icon: 'leaf-fill', title: 'Nature Life', text: '12', color: 'primary' },
    { id: 2, icon: 'flight-takeoff-fill', title: 'Tourism & Trips', text: '36', color: 'primarytint1color' },
    { id: 3, icon: 'global-fill', title: 'Technology', text: '45', color: 'primarytint2color' },
    { id: 4, icon: 'cloud-fill', title: 'Data Networking', text: '124', color: 'primarytint3color' },
    { id: 5, icon: 'home-wifi-fill', title: 'Modern Living', text: '16', color: 'info' }
]
interface recentblog {
    id?: number;
    src?: string;
}
export const Relatedblogdata: recentblog[] = [
    { id: 1, src: '../../../assets/images/media/blog/5.jpg' },
    { id: 2, src: '../../../assets/images/media/blog/6.jpg' },
    { id: 3, src: '../../../assets/images/media/blog/8.jpg' },
    { id: 4, src: '../../../assets/images/media/blog/9.jpg', }
]
interface featured {
    id?: number;
    src?: string;
    title?: string;
    text?: string;
    class?: string;
}
export const Featuredblogdata: featured[] = [
    { id: 1, src: '../../../assets/images/media/blog/14.jpg', title: 'Jack Diamond', text: ' To generate Lorem Ipsum which looks reasonable', class: "" },
    { id: 2, src: '../../../assets/images/media/blog/15.jpg', title: 'Dhruva Gen', text: 'All the Lorem Ipsum generators on the Internet', class: "" },
    { id: 3, src: '../../../assets/images/media/blog/16.jpg', title: 'Henry Milo', text: 'Lorem Ipsum is therefore always free from repetition, injected humour', class: "" },
    { id: 4, src: '../../../assets/images/media/blog/17.jpg', title: 'Peter Paul', text: 'orem Ipsum is not simply random text. It has roots in a piece of classical', class: "" },
    { id: 5, src: '../../../assets/images/media/blog/7.jpg', title: 'Fahad Rafi', text: 'Electronic typesetting, remaining essentially unchanged.', class: "border-b-0" }
]