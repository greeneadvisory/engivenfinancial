
//Background colors 
interface background {
    id:number;
    color:string;
    color1:string;
}
export const Background:background[] = [
    {id:1, color:"primary", color1:"primary"},
    {id:2, color:"secondary", color1:"secondary"},
    {id:3, color:"warning", color1:"warning"},
    {id:4, color:"info", color1:"info"},
    {id:5, color:"success", color1:"success"},
    {id:6, color:"danger", color1:"danger"},
    {id:7, color:"light", color1:"light"},
    {id:8, color:"black", color1:"dark"},
]
interface Othercolors {
    id: number;
    data: string;
}
export const othercolors: Othercolors[] = [
    { id: 1, data: "100" },
    { id: 2, data: "200" },
    { id: 3, data: "300" },
    { id: 4, data: "400" },
    { id: 5, data: "500" },
    { id: 6, data: "600" },
    { id: 7, data: "700" },
    { id: 8, data: "800" },
    { id: 9, data: "900" },
    { id: 10, data: "950" },
];
