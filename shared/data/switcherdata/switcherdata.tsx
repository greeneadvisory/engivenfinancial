"use client"
import store from "@/shared/redux/store";
import { ClassAttributes, InputHTMLAttributes, JSX, useState } from "react";
import {DirectionTheme, updateBackgroundColor, updateBgImage,  updateHeaderPosition, updateHeaderStyle, updateLayout, updateMenuPosition, updateMenuStyle, updateNavStyle, updatePageStyle, updatePrimaryColor, updateTheme, updateWidthStyle} from './switcher-reusable';


type ActionFunction = (theme: any) => void; // Adjust this type based on your actual state structure

// Adjusting the signature of your theme-changing functions
export const Light = (actionfunction: ActionFunction,_clicked?: any): void => updateTheme("light", actionfunction, _clicked);

export const Dark = (actionfunction: ActionFunction,_clicked?: any): void => updateTheme("dark", actionfunction, _clicked);

export const Ltr = (actionfunction: ActionFunction): void => DirectionTheme("ltr", actionfunction);

export const Rtl = (actionfunction: ActionFunction): void => DirectionTheme("rtl", actionfunction);

export const HorizontalClick = (actionfunction: ActionFunction): void => updateLayout("horizontal", actionfunction);

export const Vertical = (actionfunction: ActionFunction): void => updateLayout("vertical", actionfunction);

export const Menuclick = (actionfunction: ActionFunction): void => updateNavStyle("menu-click", "menu-click-closed", actionfunction);

export const MenuHover = (actionfunction: ActionFunction): void => updateNavStyle("menu-hover", "menu-hover-closed", actionfunction);

export const IconClick = (actionfunction: ActionFunction): void => updateNavStyle("icon-click", "icon-click-closed", actionfunction);

export const IconHover = (actionfunction: ActionFunction): void => updateNavStyle("icon-hover", "icon-hover-closed", actionfunction);

export const Fullwidth = (actionfunction: ActionFunction): void => updateWidthStyle("fullwidth", actionfunction);

export const Boxed = (actionfunction: ActionFunction): void => updateWidthStyle("boxed", actionfunction);

export const FixedMenu = (actionfunction: ActionFunction): void => updateMenuPosition("fixed", actionfunction);

export const scrollMenu = (actionfunction: ActionFunction): void => updateMenuPosition("scrollable", actionfunction);

export const Headerpostionfixed = (actionfunction: ActionFunction): void => updateHeaderPosition("fixed", actionfunction);

export const Headerpostionscroll = (actionfunction: ActionFunction): void => updateHeaderPosition("scrollable", actionfunction);

export const Regular = (actionfunction: ActionFunction): void => updatePageStyle("regular", actionfunction);

export const Classic = (actionfunction: ActionFunction): void => updatePageStyle("classic", actionfunction);

export const Modern = (actionfunction: ActionFunction): void => updatePageStyle("modern", actionfunction);

export const bgImage1 = (actionfunction: ActionFunction): void => updateBgImage("bgimage1", actionfunction);

export const bgImage2 = (actionfunction: ActionFunction): void => updateBgImage("bgimage2", actionfunction);

export const bgImage3 = (actionfunction: ActionFunction): void => updateBgImage("bgimage3", actionfunction);

export const bgImage4 = (actionfunction: ActionFunction): void => updateBgImage("bgimage4", actionfunction);

export const bgImage5 = (actionfunction: ActionFunction): void => updateBgImage("bgimage5", actionfunction);

export const lightMenu = (actionfunction: ActionFunction, _clicked: string): void => updateMenuStyle("light", actionfunction);

export const darkMenu = (actionfunction: ActionFunction, _clicked: string): void => updateMenuStyle("dark", actionfunction);

export const colorMenu = (actionfunction: ActionFunction, _clicked: string): void => updateMenuStyle("color", actionfunction);

export const gradientMenu = (actionfunction: ActionFunction, _clicked: string): void => updateMenuStyle("gradient", actionfunction);

export const transparentMenu = (actionfunction: ActionFunction, _clicked: string): void => updateMenuStyle("transparent", actionfunction);

export const lightHeader = (actionfunction: ActionFunction, _clicked: string): void => updateHeaderStyle("light","dark", actionfunction);

export const darkHeader = (actionfunction: ActionFunction, _clicked: string): void => updateHeaderStyle("dark","light", actionfunction);

export const colorHeader = (actionfunction: ActionFunction, _clicked: string): void => updateHeaderStyle("color","dark", actionfunction);

export const gradientHeader = (actionfunction: ActionFunction, _clicked: string): void => updateHeaderStyle("gradient","transparent", actionfunction);

export const transparentHeader = (actionfunction: ActionFunction, _clicked: string): void => updateHeaderStyle("transparent","gradient", actionfunction);

export const primaryColor1 = (actionfunction: ActionFunction): void => updatePrimaryColor("118, 71, 229", "118 71 229", actionfunction);

export const primaryColor2 = (actionfunction: ActionFunction): void => updatePrimaryColor("63, 75, 236", "63 75 236", actionfunction);

export const primaryColor3 = (actionfunction: ActionFunction): void => updatePrimaryColor("55, 125, 206", "55 125 206;", actionfunction);

export const primaryColor4 = (actionfunction: ActionFunction): void => updatePrimaryColor("1, 159, 162", "1 159 162", actionfunction);

export const primaryColor5 = (actionfunction: ActionFunction): void => updatePrimaryColor("139, 149, 4","139 149 4", actionfunction);

export const backgroundColor1 = (actionfunction: ActionFunction, _clicked: string): void => updateBackgroundColor("12 23 91", "17 31 96",  actionfunction);

export const backgroundColor2 = (actionfunction: ActionFunction, _clicked: string): void => updateBackgroundColor("50 11 110", "57 16 120",  actionfunction);

export const backgroundColor3 = (actionfunction: ActionFunction, _clicked: string): void => updateBackgroundColor("8 81 113", "27 101 133",  actionfunction);

export const backgroundColor4 = (actionfunction: ActionFunction, _clicked: string): void => updateBackgroundColor("3 81 60", "8 99 75",  actionfunction);

export const backgroundColor5 = (actionfunction: ActionFunction, _clicked: string): void => updateBackgroundColor("73 78 1", "84 89 4",  actionfunction);

const switcherDoucmentIdSelector = (selector: string): HTMLElement | null => {
    return document.getElementById(selector);
};

const getDocumentElement = (): HTMLElement => {
    return document.documentElement;
};

// Type for addClickListenerToClass function
const addClickListenerToClass = (className: string, callback: EventListener): void => {
    const elements = document.getElementsByClassName(className);
    for (let element of elements) {
        element.addEventListener("click", callback);
    }
};


export const Defaultmenu = (actionfunction: any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataVerticalStyle": "overlay",
        "dataNavLayout": "vertical",
        "toggled": "",
        "dataNavStyle": "",
    })
    localStorage.setItem("xintraverticalstyles", "default");
    localStorage.removeItem("xintraverticalstyles");

};

export const Closedmenu = (actionfunction: any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "closed",
        "toggled": "close-menu-close",

    })
    localStorage.setItem("xintraverticalstyles", "closed");
    localStorage.removeItem("xintranavstyles");

};
function icontextOpenFn() {
    let html = getDocumentElement();
    if (html.getAttribute('data-toggled') === 'icon-text-close') {
        html.setAttribute('data-icon-text', 'open');
    }
}
function icontextCloseFn() {
    let html = getDocumentElement();
    if (html.getAttribute('data-toggled') === 'icon-text-close') {
        html.removeAttribute('data-icon-text');
    }
}
export const iconText = (actionfunction: any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "icontext",
        "toggled": "icon-text-close",
        "dataNavStyle": "",

    })
    localStorage.setItem("xintraverticalstyles", "icontext");
    localStorage.removeItem("xintranavstyles");

    addClickListenerToClass("app-sidebar", icontextOpenFn);
    addClickListenerToClass("main-content", icontextCloseFn);
};

export const iconOverayFn = (actionfunction: any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "overlay",
        "toggled": "icon-overlay-close",

    })
    localStorage.setItem("xintraverticalstyles", "overlay");
    localStorage.removeItem("xintranavstyles");
    const icon = switcherDoucmentIdSelector('switcher-icon-overlay') as HTMLInputElement;
    if (icon) {
        icon.checked = true;
    }
    addClickListenerToClass("app-sidebar", DetachedOpenFn);
    addClickListenerToClass("main-content", DetachedCloseFn);
};
function DetachedOpenFn() {
    let html = getDocumentElement();
    if (window.innerWidth > 992) {
        if (html.getAttribute('data-toggled') === 'detached-close' || html.getAttribute('data-toggled') === 'icon-overlay-close') {
            html.setAttribute('data-icon-overlay', "open");
        }
    }
}
function DetachedCloseFn() {
    let html = getDocumentElement();
    if (window.innerWidth > 992) {
        if (html.getAttribute('data-toggled') === 'detached-close' || html.getAttribute('data-toggled') === 'icon-overlay-close') {
            html.removeAttribute('data-icon-overlay');
        }
    }
}
export const DetachedFn = (actionfunction: any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "detached",
        "toggled": "detached-close",
        "dataNavStyle": "",

    })
    localStorage.setItem("xintraverticalstyles", "detached");
    localStorage.removeItem("xintranavstyles");

    addClickListenerToClass("app-sidebar", DetachedOpenFn);
    addClickListenerToClass("main-content", DetachedCloseFn);
};
export const DoubletFn = (actionfunction: any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "doublemenu",
        "toggled": "double-menu-open",
        "dataNavStyle": "",

    })
    localStorage.setItem("xintraverticalstyles", "doublemenu");
    localStorage.removeItem("xintranavstyles");

    setTimeout(() => {
        console.log("dun")
            if (!document.querySelectorAll(".main-menu .slide.active")[0]?.querySelector("ul")) {
            const theme = store.getState();
            actionfunction(
                {
                    ...theme,
                    "toggled": "double-menu-close",


                }
            );
        }
    }, 100);
}




const ColorPicker = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <div className="color-picker-input">
            <input type="color" {...props} />
        </div>
    );
};

function hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
//themeprimarycolor
const Themeprimarycolor = ({ actionfunction }: any) => {

    const theme = store.getState();
    const [state, updateState] = useState("#FFFFFF");
    const handleInput = (e: any) => {
        let { r, g, b }: any = hexToRgb(e.target.value);
        updateState(e.target.value);
        actionfunction({
            ...theme,
            "colorPrimaryRgb": `${r}, ${g}, ${b}`,
            "PrimaryRgb": `${r} ${g} ${b}`
        });
        localStorage.setItem("dynamiccolor", `${r} ${g} ${b}`);
    };
    return (
        <div className="Themeprimarycolor theme-container-primary pickr-container-primary">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    );
};

export default Themeprimarycolor;



//themeBackground
export const Themebackgroundcolor = ({ actionfunction }: any) => {


    const theme = store.getState();
    const [state, updateState] = useState("#FFFFFF");
    const handleInput = (e: any) => {
        let { r, g, b }: any = hexToRgb(e.target.value);
        updateState(e.target.value);
        actionfunction({
            ...theme,
            "bodyBg": `${r + 14} ${g + 14} ${b + 14}`,
            "darkBg": `${r} ${g} ${b}`,
            "inputBorder": "rgba(255,255,255,0.1)",
            "lightRgb": `${r + 5} ${g + 5} ${b + 5}`,
            "class": "dark",
            "dataHeaderStyles": "dark",
            "dataMenuStyles": "dark",
        });
        localStorage.setItem("bodyBg", `${r + 14} ${g + 14} ${b + 14}`);
        localStorage.setItem('darkBg', `${r} ${g} ${b}`);
        localStorage.setItem('lightRgb', `${r + 5} ${g + 5} ${b + 5}`);
        localStorage.removeItem('xintraMenu');
        localStorage.removeItem('xintraHeader');
        localStorage.removeItem('xintradarktheme');
        localStorage.removeItem('xintralighttheme');

    };

    return (
        <div className="Themebackgroundcolor">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    );
};

export const bgImage = (actionfunction: any, img:string | null) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "bgImg": img,

    })
    localStorage.setItem("bgImg", img ?? '');
};
export const Reset = (actionfunction: any) => {
    const theme = store.getState()
    Vertical(actionfunction)
    actionfunction({
        ...theme,
        lang: "en",
        dir: "ltr",
        class: "light",
        dataMenuStyles: "dark",
        dataNavLayout: "vertical",
        dataHeaderStyles: "light",
        dataVerticalStyle: "overlay",
        toggled: "",
        dataNavStyle: "",
        horStyle: "",
        dataPageStyle: "regular",
        dataWidth: "fullwidth",
        dataMenuPosition: "fixed",
        dataHeaderPosition: "fixed",
        iconOverlay: "",
        colorPrimaryRgb: "",
        PrimaryRgb: "",
        bodyBg: "",
        darkBg: "",
        inputBorder: "",
        lightRgb: "",
        formControlBg: "",
        gray: "",
        bgImg: "",
        loader: "disable",
        iconText: "",
        body:  ""
    })
    const icon = switcherDoucmentIdSelector('switcher-default-menu') as HTMLInputElement;
    if (icon) {
        icon.checked = true;
    }
    localStorage.clear();
}
export const Reset1 = (actionfunction: any) => {
    const theme = store.getState()
    Vertical(actionfunction)
    actionfunction({
        ...theme,
        lang: "en",
        dir: "ltr",
        class: "light",
        dataMenuStyles: "light",
        dataNavLayout: "horizontal",
        dataHeaderStyles: "light",
        dataVerticalStyle: "overlay",
        toggled: "",
        colorPrimaryRgb: "",
        PrimaryRgb:"",
        bodyBg: "",
        darkBg: "",
        inputBorder: "",
        lightRgb: "",
        formControlBg: "",
        gray: "",
        body: ""
    })
    localStorage.clear();
    const icon = switcherDoucmentIdSelector("switcher-default-menu") as HTMLInputElement;
    if (icon) {
        icon.checked = true;
    }
}

export const LocalStorageBackup = (actionfunction: any, setpageloading:any) => {

    (localStorage.xintradarktheme) ? Dark(actionfunction) : "";
    (localStorage.xintralighttheme) ? Light(actionfunction) : "";
    (localStorage.xintrartl) ? Rtl(actionfunction) : "";
    (localStorage.xintraregular) ? Regular(actionfunction) : "";
    (localStorage.xintraclassic) ? Classic(actionfunction) : "";
    (localStorage.xintramodern) ? Modern(actionfunction) : "";
    (localStorage.xintrafullwidth) ? Fullwidth(actionfunction) : "";
    (localStorage.xintraboxed) ? Boxed(actionfunction) : "";
    (localStorage.xintramenufixed) ? FixedMenu(actionfunction) : "";
    (localStorage.xintramenuscrollable) ? scrollMenu(actionfunction) : "";
    (localStorage.xintraheaderfixed) ? Headerpostionfixed(actionfunction) : "";
    (localStorage.xintraheaderscrollable) ? Headerpostionscroll(actionfunction) : "";
    (localStorage.bgImg) ? bgImage(actionfunction, localStorage.bgImg) : '';

    (localStorage.xintranavstyles === "menu-click") ? Menuclick(actionfunction) : '';
    (localStorage.xintranavstyles === "menu-hover") ? MenuHover(actionfunction) : '';
    (localStorage.xintranavstyles === "icon-click") ? IconClick(actionfunction) : '';
    (localStorage.xintranavstyles === "icon-hover") ? IconHover(actionfunction) : '';


    (localStorage.xintralayout == 'horizontal') && HorizontalClick(actionfunction);

    // // ThemeColor MenuColor Start
    switch (localStorage.xintraMenu) {
        case 'light':
            lightMenu(actionfunction,"clicked");
            break;
        case 'dark':
            darkMenu(actionfunction,"clicked");

            break;
        case 'color':
            colorMenu(actionfunction,"clicked");

            break;
        case 'gradient':
            gradientMenu(actionfunction,"clicked");

            break;
        case 'transparent':
            transparentMenu(actionfunction,"clicked");

            break;
        default:
            break;
    }

    // ThemeColor MenuColor End

    // ThemeColor Header Colors: start
    switch (localStorage.xintraHeader) {
        case 'light':
            lightHeader(actionfunction, "clicked");

            break;
        case 'dark':
            darkHeader(actionfunction, "clicked");

            break;
        case 'color':
            colorHeader(actionfunction, "clicked");

            break;
        case 'gradient':
            gradientHeader(actionfunction, "clicked");

            break;
        case 'transparent':
            transparentHeader(actionfunction, "clicked");

            break;
        default:
            break;
    }
    // ThemeColor Header Colors: End

    // Theme Primary: Colors: Start
    switch (localStorage.primaryRGB) {
        case '118, 71, 229':
            primaryColor1(actionfunction);

            break;
        case '63, 75, 236':
            primaryColor2(actionfunction);

            break;
        case '55, 125, 206':
            primaryColor3(actionfunction);

            break;
        case '1, 159, 162':
            primaryColor4(actionfunction);

            break;
        case '139, 149, 4':
            primaryColor5(actionfunction);

            break;
        default:
            break;
    }
    // Theme Primary: Colors: End
    switch (localStorage.bodyBg) {
        case '12 23 91':
            backgroundColor1(actionfunction, "clicked");

            break;
        case '50 11 110':
            backgroundColor2(actionfunction, "clicked");

            break;
        case '8 81 113':
            backgroundColor3(actionfunction, "clicked");

            break;
        case '3 81 60':
            backgroundColor4(actionfunction, "clicked");

            break;
        case '73 78 1':
            backgroundColor5(actionfunction, "clicked");

            break;
        default:
            break;
    }

    if (localStorage.xintraverticalstyles) {
        let verticalStyles = localStorage.getItem("xintraverticalstyles");

        switch (verticalStyles) {
            case "default":
                Defaultmenu(actionfunction)

                break;

            case "closed":
                Closedmenu(actionfunction)

                break;
            case "icontext":
                iconText(actionfunction)

                break;
            case "overlay":
                iconOverayFn(actionfunction)
                break;

            case "detached":
                DetachedFn(actionfunction)
                break;

            case "doublemenu":
                DoubletFn(actionfunction)
                break;

            default:
                break;
        }
    }

    //Theme Primary:
    if (localStorage.dynamiccolor) {
        const theme = store.getState()
        actionfunction({
            ...theme,
            "colorPrimaryRgb": localStorage.dynamiccolor,
            "PrimaryRgb": localStorage.dynamiccolor,

        })
    }
    //Theme BAckground:
    if (localStorage.bodyBg) {
        // let updateddarkBg = `${Number(localStorage.bodyBg.split("")[0]) + 14} ${Number(localStorage.bodyBg.split("")[1]) + 14} ${Number(localStorage.bodyBg.split("")[2]) + 14}`
        const theme = store.getState()
        actionfunction({
            ...theme,
            "bodyBg": localStorage.bodyBg,
            "darkBg": localStorage.darkBg,
            "class": "dark",
            "dataHeaderStyles": localStorage.xintraHeader ? localStorage.xintraHeader : localStorage.xintradarktheme ? "dark" : "dark",
            "lightRgb": localStorage.lightRgb,
            "inputBorder": localStorage.inputBorder,
            "gray": localStorage.gray,

        })
    }
    switch (localStorage.xintraMenu) {
        case 'light':
            lightMenu(actionfunction,"clicked");
            break;
        case 'dark':
            darkMenu(actionfunction,"clicked");

            break;
        case 'color':
            colorMenu(actionfunction,"clicked");

            break;
        case 'gradient':
            gradientMenu(actionfunction,"clicked");

            break;
        case 'transparent':
            transparentMenu(actionfunction,"clicked");

            break;
        default:
            break;
    }
    // ThemeColor Header Colors: start
    switch (localStorage.xintraHeader) {
        case 'light':
            lightHeader(actionfunction, "clicked");

            break;
        case 'dark':
            darkHeader(actionfunction, "clicked");

            break;
        case 'color':
            colorHeader(actionfunction, "clicked");

            break;
        case 'gradient':
            gradientHeader(actionfunction, "clicked");

            break;
        case 'transparent':
            transparentHeader(actionfunction, "clicked");

            break;
        default:
            break;
    }
    setpageloading(true)
}
export const LocalStorageBackup1 = (actionfunction: any, setpageloading:any) => {

    (localStorage.xintradarktheme) ? Dark(actionfunction) : "";
    (localStorage.xintralighttheme) ? Light(actionfunction) : "";
    (localStorage.xintrartl) ? Rtl(actionfunction) : "";
    // Theme Primary: Colors: Start
    switch (localStorage.primaryRGB) {
        case '118, 71, 229':
            primaryColor1(actionfunction);

            break;
        case '63, 75, 236':
            primaryColor2(actionfunction);

            break;
        case '55, 125, 206':
            primaryColor3(actionfunction);

            break;
        case '1, 159, 162':
            primaryColor4(actionfunction);

            break;
        case '139, 149, 4':
            primaryColor5(actionfunction);

            break;
        default:
            break;
    }
    // Theme Primary: Colors: End

    //Theme Primary:
    if (localStorage.dynamiccolor) {
        const theme = store.getState()
        actionfunction({
            ...theme,
            "colorPrimaryRgb": localStorage.dynamiccolor,
            "PrimaryRgb": localStorage.dynamiccolor,

        })
    }
   

    // ThemeColor Header Colors: start
   
    setpageloading(true)
}


