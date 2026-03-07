interface dataType {
    id: number;
    orderid: string;
    src: string;
    src1: string;
    product: string;
    cusromer: string;
    mobile: string;
    date: string;
    status: string;
    payment: string;
    cost: string;
    color: string;
}

export const Ordertable: dataType[] = [
    { id: 1, orderid: "#1172553", src: "../../../assets/images/ecommerce/png/28.png", src1: "../../../assets/images/faces/4.jpg", product: "Lightweight Sneakers", cusromer: "Violeta Tilly", mobile: "(222) 111 - 57840", date: "11 Jan 2024", status: "Shipped", payment: "Cash On Delivery", cost: "$177.00", color: "success" },
    { id: 2, orderid: "#1172555", src: "../../../assets/images/ecommerce/png/12.png", src1: "../../../assets/images/faces/15.jpg", product: "Kids' Party Wear Frock", cusromer: "Danny Raj", mobile: "(222) 687-9954", date: "23 Jan 2024", status: "Pending", payment: "Online Payment", cost: "$153.00", color: "warning" },
    { id: 3, orderid: "#1202513", src: "../../../assets/images/ecommerce/png/29.png", src1: "../../../assets/images/faces/8.jpg", product: "Ladies' Slim Bag", cusromer: "Sissera William", mobile: "(222) 987-1323", date: "19 Feb 2024", status: "Shipped", payment: "Cash On Delivery", cost: "$203.00", color: "success" },
    { id: 4, orderid: "#1202510", src: "../../../assets/images/ecommerce/png/14.png", src1: "../../../assets/images/faces/11.jpg", product: "Elegant Flower Pot", cusromer: "Red Stark", mobile: "(222) 447-4518", date: "06 Mar 2024", status: "Cancelled", payment: "Online Payment", cost: "$211.00", color: "danger" },
    { id: 5, orderid: "#1222516", src: "../../../assets/images/ecommerce/png/11.png", src1: "../../../assets/images/faces/1.jpg", product: "Trendy Sunglasses", cusromer: "Henry Milo", mobile: "(222) 666-8080", date: "18 Mar 2024", status: "Shipped", payment: "Cash On Delivery", cost: "$265.00", color: "success" },
    { id: 6, orderid: "#1202513", src: "../../../assets/images/ecommerce/png/13.png", src1: "../../../assets/images/faces/8.jpg", product: "Sleek Modern Chair", cusromer: "Sissera William", mobile: "(222) 144-1423", date: "19 Feb 2024", status: "Shipped", payment: "Cash On Delivery", cost: "$203.00", color: "success" },
    { id: 7, orderid: "#1202510", src: "../../../assets/images/ecommerce/png/30.png", src1: "../../../assets/images/faces/11.jpg", product: "Wireless Headphones", cusromer: "Red Stark", mobile: "(222) 985-4715", date: "06 Mar 2024", status: "Cancelled", payment: "Online Payment", cost: "$211.00", color: "danger" },
    { id: 8, orderid: "#1222516", src: "../../../assets/images/ecommerce/png/31.png", src1: "../../../assets/images/faces/1.jpg", product: "Wireless Earbuds", cusromer: "Henry Milo", mobile: "(222) 887-1323", date: "18 Mar 2024", status: "Shipped", payment: "Cash On Delivery", cost: "$265.00", color: "success" },
]