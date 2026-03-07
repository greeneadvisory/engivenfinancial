import { MENUITEMS } from "@/shared/layouts-components/sidebar/nav";
import store from "@/shared/redux/store";

// Helper function to get elements by class name
const SwithcerClass = (selector: string): HTMLCollectionOf<Element> => document.getElementsByClassName(selector);

// Set margin for elements by class name
const setMargin = (className: string): void => {
    const elements = SwithcerClass(className);
    for (let element of elements) {
        (element as HTMLElement).style.marginInline = "0px";
    }
};

// Define the structure of the theme state
interface Theme {
    class?: string;
    dir?: string;
    dataHeaderStyles?: string;
    dataMenuStyles?: string;
    darkBg?: string;
    bodyBg?: string;
    inputBorder?: string;
    colorPrimaryRgb?: string;
    dataNavLayout?: string;
    dataVerticalStyle?: string;
    dataNavStyle?: string;
    toggled?: string;
    dataWidth?: string;
    dataMenuPosition?: string;
    dataHeaderPosition?: string;
    dataPageStyle?: string;
    bgImg?: string;
}

// Action function type
type ActionFunction = (newTheme: Theme) => void;

// Update the theme based on theme type
export const updateTheme = (themeType: "dark" | "light", actionFunction: ActionFunction, clicked?:any): void => {
    const theme = store.getState();

    const newTheme: Theme = {
        ...theme,
        class: themeType,
        dataHeaderStyles: themeType,
        // dataMenuStyles:'dark',
        dataMenuStyles:(themeType=== 'light') && (theme.dataNavLayout === 'horizontal') ? 'light' : 'dark' ,
        darkBg: "",
        bodyBg: "",
        inputBorder: "",
        bgImg:""
    };

    localStorage.setItem(`xintra${themeType}theme`, themeType);
    localStorage.removeItem(`xintra${themeType === "dark" ? "light" : "dark"}theme`);

    if (clicked) {
        localStorage.removeItem("bodyBg");
        localStorage.removeItem("bodyBg2");
        localStorage.removeItem("inputBorder");
        localStorage.removeItem("lightRgb");
        localStorage.removeItem("formControlBg");
        localStorage.removeItem("gray");
        localStorage.removeItem("xintraMenu");
        localStorage.removeItem("xintraHeader");
        localStorage.removeItem("bgImg");
    }


    actionFunction(newTheme);
};

// Update the direction of the theme
export const DirectionTheme = (directionType: "ltr" | "rtl", actionFunction: ActionFunction): void => {
    const theme = store.getState();

    const dirtectionTheme: Theme = {
        ...theme,
        dir: directionType,
    };

    localStorage.setItem(`xintra${directionType}`, directionType);
    localStorage.removeItem(`xintra${directionType === "ltr" ? "rtl" : "ltr"}`);

    actionFunction(dirtectionTheme);
};

// Update layout based on layout type
export const updateLayout = (layoutType: "horizontal" | "vertical", actionFunction: ActionFunction): void => {
    const theme = store.getState();
    const  darkmenu = localStorage.xintraMenu ? localStorage.xintraMenu :"dark"
     const darkmenu1 = localStorage.xintraMenu ? localStorage.xintraMenu : "light"
    const updatedTheme: Theme = {
        ...theme,
        dataNavLayout: layoutType === "horizontal" ? "horizontal" : "vertical",
        dataMenuStyles: layoutType === "horizontal" ? theme.class === 'dark'? darkmenu :darkmenu1 :darkmenu, 
        dataVerticalStyle: layoutType === "vertical" ? "overlay" : "",
        dataNavStyle: localStorage.xintranavstyles ? localStorage.xintranavstyles : "menu-click",
        toggled: layoutType === "vertical" ? "" : undefined
    };

    localStorage.setItem("xintralayout", layoutType);
    if (layoutType === "vertical") {
        localStorage.removeItem("xintraverticalstyles");
    } else {
        localStorage.removeItem("xintraverticalstyles");
    }

    setMargin("main-menu");

    actionFunction(updatedTheme);
};

function closeMenu() {
    const closeMenudata = (items: any) => {
        items?.forEach((item: any) => {
            item.active = false;
            closeMenudata(item.children);
        });
    };
    closeMenudata(MENUITEMS);
}
// Update navigation style
export const updateNavStyle = (actionType: string, toggledState: string, actionFunction: ActionFunction): void => {
    const theme = store.getState();
    actionFunction({
        ...theme,
        dataNavStyle: actionType,
        dataVerticalStyle: "",
        toggled: toggledState,
    });

    localStorage.setItem("xintranavstyles", actionType);
    localStorage.removeItem("xintraverticalstyles");

    setMargin("main-menu");

    if(actionType === "icon-hover"){
        closeMenu()
    }
};

// Update width style
export const updateWidthStyle = (widthType: "fullwidth" | "boxed", actionFunction: ActionFunction): void => {
    const theme = store.getState();
    actionFunction({
        ...theme,
        dataWidth: widthType,
    });

    localStorage.setItem(`xintra${widthType}`, widthType);
    localStorage.removeItem(`xintra${widthType === "fullwidth" ? "boxed" : "fullwidth"}`);
};

// Update menu position
export const updateMenuPosition = (menuPosition: "fixed" | "scrollable", actionFunction: ActionFunction): void => {
    const theme = store.getState();
    actionFunction({
        ...theme,
        dataMenuPosition: menuPosition,
    });

    localStorage.setItem(`xintramenu${menuPosition}`, `${menuPosition}Menu`);
    localStorage.removeItem(`xintramenu${menuPosition === "fixed" ? "scrollable" : "fixed"}`);
};

// Update header position
export const updateHeaderPosition = (headerPosition: "fixed" | "scrollable", actionFunction: ActionFunction): void => {
    const theme = store.getState();
    actionFunction({
        ...theme,
        dataHeaderPosition: headerPosition,
    });

    localStorage.setItem(`xintraheader${headerPosition}`, `${headerPosition}Header`);
    localStorage.removeItem(`xintraheader${headerPosition === "fixed" ? "scrollable" : "fixed"}`);
};

// Update page style
export const updatePageStyle = (pageStyle: "regular" | "classic" | "modern", actionFunction: ActionFunction): void => {
    const theme = store.getState();
    actionFunction({
        ...theme,
        dataPageStyle: pageStyle,
    });

    localStorage.setItem(`xintra${pageStyle}`, pageStyle.charAt(0).toUpperCase() + pageStyle.slice(1));
    ["regular", "classic", "modern"].forEach(style => {
        if (style !== pageStyle) {
            localStorage.removeItem(`xintra${style}`);
        }
    });
};

// Update background image
export const updateBgImage = (imageKey: string, actionFunction: ActionFunction): void => {
    const theme = store.getState();
    actionFunction({
        ...theme,
        bgImg: imageKey
    });

    localStorage.setItem(imageKey, imageKey);
    for (let i = 1; i <= 5; i++) {
        if (`bgimage${i}` !== imageKey) {
            localStorage.removeItem(`bgimage${i}`);
        }
    }
};

// Update menu style
export const updateMenuStyle = (menuStyle: string, actionFunction: ActionFunction): void => {
    const theme = store.getState();
    actionFunction({
        ...theme,
        dataMenuStyles: menuStyle,
    });
    localStorage.setItem("xintraMenu", menuStyle);
    localStorage.removeItem("light");
    // localStorage.removeItem("xintralayout");
};

// Update header style
export const updateHeaderStyle = (headerStyle: string,removeStyle:any, actionFunction: ActionFunction): void => {
    const theme = store.getState();
    actionFunction({
        ...theme,
        dataHeaderStyles: headerStyle,
    });
    localStorage.setItem("xintraHeader", headerStyle);
    localStorage.removeItem(removeStyle);
};


// Update primary color
export const updatePrimaryColor = (colorRgb: string, Primarycolor: string, actionFunction: ActionFunction): void => {
    const theme = store.getState();
    actionFunction({
        ...theme,
        colorPrimaryRgb: colorRgb,
        PrimaryRgb: Primarycolor,
    });
    localStorage.setItem("primaryRGB", colorRgb);
    localStorage.setItem("PrimaryRgb", Primarycolor);
    localStorage.removeItem("dynamiccolor")
};

// Update background color
export const updateBackgroundColor = (bgColor: string, darkBg: string, actionFunction: ActionFunction): void => {
    const theme = store.getState();
    actionFunction({
        ...theme,
        bodyBg: bgColor,
        darkBg: darkBg,
        lightRgb: darkBg,
        gray:"rgba(255,255,255,0.1)",
        inputBorder: "rgba(255,255,255,0.1)",
        class: "dark",
        dataMenuStyles: "dark",
        dataHeaderStyles: "dark",
    });

    localStorage.setItem('bodyBg', bgColor);
    localStorage.setItem('darkBg', darkBg);
    localStorage.setItem('Light', darkBg);
    //localStorage.removeItem('xintraMenu');
    //localStorage.removeItem('xintraHeader');
    //localStorage.removeItem('xintradarktheme');
    //localStorage.removeItem('xintralighttheme');
    
};

// Update menu styles
export const updateMenuStyles = (verticalStyle: string, toggled: string, actionFunction: ActionFunction): void => {
    const theme = store.getState();
    actionFunction({
        ...theme,
        dataNavLayout: "vertical",
        dataVerticalStyle: verticalStyle,
        toggled: toggled || "", 
        dataNavStyle: "",
    });
    localStorage.setItem("xintraverticalstyles", verticalStyle);
    localStorage.removeItem("xintranavstyles");
};
