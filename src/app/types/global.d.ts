declare module '*.scss' {
    const classes: { [key: string]: string };
    export = classes;
}

declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export = classes;
}

declare module '*.module.css' {
    const classes: { [key: string]: string };
    export = classes;
}

// declare module 'app/styles/index.scss'

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
