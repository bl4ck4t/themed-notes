import { CSSProperties } from "react";

export const themes = {
    light: {
        main: '#f3f5f4' as CSSProperties,
        text: '#000' as CSSProperties,
        containerBackground: '#f3f5f7' as CSSProperties,
        boxShadow : '2px 2px 50px gray'
    },
    dark: {
        main: '#35363a' as CSSProperties,
        text: '#fff' as CSSProperties,
        containerBackground: '#333743' as CSSProperties,
        boxShadow : '2px 2px 50px black'
    }
};