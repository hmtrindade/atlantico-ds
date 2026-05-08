/**
 * Atlântico Design System — Tailwind Preset
 *
 * Quando este preset for movido para um pacote npm (ex.: @atlantico/ds),
 * basta importá-lo no tailwind.config.ts do projeto consumidor:
 *
 *   import dsPreset from "@atlantico/ds/tailwind-preset";
 *   export default {
 *     presets: [dsPreset],
 *     content: [
 *       "./src/**\/*.{ts,tsx}",
 *       "./node_modules/@atlantico/ds/dist/**\/*.js",
 *     ],
 *   } satisfies Config;
 */
declare const _default: {
    darkMode: ["class"];
    content: any[];
    theme: {
        container: {
            center: true;
            padding: string;
            screens: {
                "2xl": string;
            };
        };
        screens: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            "2xl": string;
        };
        extend: {
            fontFamily: {
                sans: [string, string, string];
            };
            colors: {
                border: string;
                input: string;
                ring: string;
                background: string;
                brand: {
                    primary: {
                        DEFAULT: string;
                        hover: string;
                        press: string;
                        foreground: string;
                    };
                    secondary: {
                        DEFAULT: string;
                        hover: string;
                        press: string;
                        foreground: string;
                    };
                    tertiary: {
                        DEFAULT: string;
                        hover: string;
                        press: string;
                        foreground: string;
                    };
                };
                "bg-inverse": string;
                "bg-variant": string;
                "bg-variant-inverse": string;
                "on-background": {
                    DEFAULT: string;
                    inverse: string;
                    variant: string;
                    "variant-inverse": string;
                };
                surface: {
                    DEFAULT: string;
                    variant: string;
                    primary: string;
                    "primary-variant": string;
                    error: string;
                    success: string;
                };
                "on-surface": {
                    DEFAULT: string;
                    variant: string;
                    primary: string;
                    "primary-variant": string;
                    error: string;
                    success: string;
                };
                critical: {
                    DEFAULT: string;
                    hover: string;
                    press: string;
                    foreground: string;
                };
                alert: {
                    DEFAULT: string;
                    foreground: string;
                };
                success: {
                    DEFAULT: string;
                    foreground: string;
                };
                disabled: {
                    DEFAULT: string;
                    foreground: string;
                };
                gradient: {
                    "sky-top": string;
                    "sky-bottom": string;
                    "ocean-top": string;
                    "ocean-bottom": string;
                    "rosebud-top": string;
                    "rosebud-bottom": string;
                    "sunset-top": string;
                    "sunset-bottom": string;
                    "twilight-top": string;
                    "twilight-bottom": string;
                    "sunshine-top": string;
                    "sunshine-bottom": string;
                    "leaf-top": string;
                    "leaf-bottom": string;
                    "lime-top": string;
                    "lime-bottom": string;
                    "turquoise-top": string;
                    "turquoise-bottom": string;
                    "nemesia-top": string;
                    "nemesia-bottom": string;
                    "reef-top": string;
                    "reef-bottom": string;
                    "bluebird-top": string;
                    "bluebird-bottom": string;
                    "clearnight-top": string;
                    "clearnight-bottom": string;
                    "hibiscus-top": string;
                    "hibiscus-bottom": string;
                    "heartsease-top": string;
                    "heartsease-bottom": string;
                    "amarantus-top": string;
                    "amarantus-bottom": string;
                    "candy-top": string;
                    "candy-bottom": string;
                    "poppy-top": string;
                    "poppy-bottom": string;
                    "darkness-top": string;
                    "darkness-bottom": string;
                };
                "on-gradient": {
                    DEFAULT: string;
                    variant: string;
                };
            };
            borderRadius: {
                none: string;
                xs: string;
                sm: string;
                DEFAULT: string;
                md: string;
                lg: string;
                xl: string;
                "2xl": string;
                full: string;
            };
            spacing: {
                "atl-0": string;
                "atl-1": string;
                "atl-1.5": string;
                "atl-2": string;
                "atl-2.5": string;
                "atl-3": string;
                "atl-3.5": string;
                "atl-4": string;
                "atl-5": string;
                "atl-6": string;
                "atl-8": string;
                "atl-9": string;
                "atl-10": string;
                "atl-11": string;
                "atl-12": string;
                "atl-14": string;
                "atl-16": string;
                "atl-20": string;
                "atl-24": string;
                "atl-28": string;
                "atl-32": string;
                "atl-36": string;
                "atl-40": string;
                "atl-44": string;
                "atl-48": string;
                "atl-52": string;
                "atl-56": string;
                "atl-60": string;
                "atl-64": string;
                "atl-72": string;
                "atl-80": string;
                "atl-96": string;
            };
            boxShadow: {
                "blue-xs": string;
                "blue-sm": string;
                "blue-md": string;
                "blue-lg": string;
                "blue-xl": string;
                "blue-xs-left": string;
                "blue-sm-left": string;
                "blue-md-left": string;
                "blue-lg-left": string;
                "blue-xl-left": string;
                "blue-xs-right": string;
                "blue-sm-right": string;
                "blue-md-right": string;
                "blue-lg-right": string;
                "blue-xl-right": string;
                "blue-xs-top": string;
                "blue-sm-top": string;
                "blue-md-top": string;
                "blue-lg-top": string;
                "blue-xl-top": string;
                "neutral-xs": string;
                "neutral-sm": string;
                "neutral-md": string;
                "neutral-lg": string;
                "neutral-xl": string;
                "neutral-xs-left": string;
                "neutral-sm-left": string;
                "neutral-md-left": string;
                "neutral-lg-left": string;
                "neutral-xl-left": string;
                "neutral-xs-right": string;
                "neutral-sm-right": string;
                "neutral-md-right": string;
                "neutral-lg-right": string;
                "neutral-xl-right": string;
                "neutral-xs-top": string;
                "neutral-sm-top": string;
                "neutral-md-top": string;
                "neutral-lg-top": string;
                "neutral-xl-top": string;
            };
            blur: {
                none: string;
                s: string;
                d: string;
                m: string;
                l: string;
                xl: string;
                "2xl": string;
                "3xl": string;
            };
            keyframes: {
                "accordion-down": {
                    from: {
                        height: string;
                    };
                    to: {
                        height: string;
                    };
                };
                "accordion-up": {
                    from: {
                        height: string;
                    };
                    to: {
                        height: string;
                    };
                };
            };
            animation: {
                "accordion-down": string;
                "accordion-up": string;
            };
        };
    };
    plugins: {
        handler: () => void;
    }[];
};

export { _default as default };
