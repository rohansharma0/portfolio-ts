import { Theme } from "../models/Theme";

export const Properties: any = {
    //Dark theme
    [Theme.Dark]: {
        primaryColor: "#fff",
        secondaryColor: "#080808",
        backgroundColor: "#080808",
        textColor: "#fff",
        borderColor: "#000",
        iconColor: "#fff",
        menuSecondaryColor: "#fff",
        menuPrimaryColor: "#000",
    },
    //Light theme
    [Theme.Light]: {
        primaryColor: "#000",
        secondaryColor: "#f3f2f9",
        backgroundColor: "#f3f2f9",
        textColor: "#000",
        borderColor: "#f3f2f9",
        iconColor: "#000",
        menuSecondaryColor: "#000",
        menuPrimaryColor: "#f3f2f9",
    }
}