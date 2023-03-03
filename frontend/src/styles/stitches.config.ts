import { createStitches } from "@stitches/react";

export const {
    config,
    createTheme,
    css,
    getCssText,
    globalCss,
    keyframes,
    prefix,
    reset,
    styled,
    theme
} = createStitches({
    media: {
        bp1: '(min-width: 640px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)',
    },
    theme: {
        fonts: {
            header: "'Assistant', sans-serif",
            caption: "'Montserrat', sans-serif",
            body: "'Rubik', sans-serif",
        }
    },
    utils: {},
})