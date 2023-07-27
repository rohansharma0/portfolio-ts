import { Theme } from "../models/Theme";

export const Properties: any = {
    //Dark theme
    [Theme.Dark]: {
        primaryColor: "#fff",
        secondaryColor: "#14161A",
        backgroundColor: "#14161A",
        textColor: "#fff",
        borderColor: "#000",
        iconColor: "#fff",
        menuSecondaryColor: "#fff",
        menuPrimaryColor: "#000",
        footerBackgroundColor: "#000",
    },
    //Light theme
    [Theme.Light]: {
        primaryColor: "#14161A",
        secondaryColor: "#f3f2f9",
        backgroundColor: "#f3f2f9",
        textColor: "#14161A",
        borderColor: "#f3f2f9",
        iconColor: "#14161A",
        menuSecondaryColor: "#14161A",
        menuPrimaryColor: "#f3f2f9",
        footerBackgroundColor: "#fff",
    }
}