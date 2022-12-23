export type Theme = {
    colors: {
        primary: string;
        secondary: string;
        success: string;
        error: string;
        info: string;
        warning: string;
        disabled: string;
        [key: string]: string;
    };
    sizes: {
        large: string;
        medium: string;
        small: string;
    };
};

const defaultTheme: Theme = {
    colors: {
        primary: '#fa0404',
        secondary: 'purple',
        success: 'green',
        error: 'red',
        info: 'yellow',
        warning: 'orange',
        disabled: 'rgba(0, 0, 0, 0.12)',
        invisible: 'rgba(0, 0, 0, 0)',
    },
    sizes: {
        large: '0.7em 1.6em',
        medium: '0.4em 1.1em',
        small: '0.25em 0.7em',
    }
};

export default defaultTheme;
