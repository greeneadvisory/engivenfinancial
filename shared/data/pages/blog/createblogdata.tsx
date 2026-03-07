
interface blog {
	id: number
	src: string
	title: string
	time: string
	data: string
}
export const Recentblogdata: blog[] = [
	{ id: 1, src: "../../../assets/images/media/media-39.jpg", title: "Travelling", time: "20,Oct 2023", data: "03:34" },
	{ id: 2, src: "../../../assets/images/media/media-54.jpg", title: "Photography", time: "12,Oct 2023", data: "14:05" },
	{ id: 3, src: "../../../assets/images/media/media-25.jpg", title: "Flowers", time: "5,Dec 2023", data: "20:00" },
	{ id: 4, src: "../../../assets/images/media/media-52.jpg", title: "Light Energy", time: "01,Jan 2024", data: "08:20" },
	{ id: 5, src: "../../../assets/images/media/media-74.jpg", title: "Sports", time: "11,Jan 2024", data: "21:12" },
	{ id: 6, src: "../../../assets/images/media/media-49.jpg", title: "Food", time: "08,Jan 2024", data: "05:16" },
	{ id: 7, src: "../../../assets/images/media/media-76.jpg", title: "Beauty", time: "20,Jan 2024", data: "14:39" }
];
interface Selectoption {
	value: string;
	label: string;
}
export const Selectdata1: Selectoption[] = [
	{ value: "Select Category", label: "Select Category" },
	{ value: "Nature", label: "Nature" },
	{ value: "Sports", label: "Sports" },
	{ value: "Food", label: "Food" },
	{ value: "Travel", label: "Travel" },
	{ value: "Fashion", label: "Fashion" },
	{ value: "Beauty", label: "Beauty" },
];
export const Selectdata2 = [
	{ value: "Select ", label: "Select ", isDisabled: "isDisabled" },
	{ value: "Hold", label: "Hold" },
	{ value: "Published", label: "Published" },

];
export const Selectdata3: Selectoption[] = [
	{ value: "Top Blog ", label: "Top Blog " },
	{ value: "Blogger", label: "Blogger" },
	{ value: "Adventure", label: "Adventure" },
	{ value: "Landscape", label: "Landscape" }

];
