import { globalCss } from "./stitches.config";

// font-family: 'Assistant', sans-serif;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Rubik', sans-serif;

const globalStyle = globalCss({
    "@font-face": [],
    "@import": [
        "url('https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700;800&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Rubik:wght@300;400;500;600;700;800;900&display=swap')"
    ],
    "body": {
        fontFamily: '$body',
    },

    ".w-100": {
        width: '100%',
    },

    ".d-flex": {
        display: 'flex',
    },

    '.justify-content-center': {
        justifyContent: 'center',
    }
})

export default globalStyle

