// src/tailwind-preset.ts
import tailwindcssAnimate from "tailwindcss-animate";
var tailwind_preset_default = {
  darkMode: ["class"],
  content: [],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" }
    },
    screens: {
      xs: "393px",
      sm: "744px",
      md: "834px",
      lg: "1024px",
      xl: "1366px",
      "2xl": "1920px"
    },
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"]
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        brand: {
          primary: {
            DEFAULT: "hsl(var(--brand-primary))",
            hover: "hsl(var(--brand-primary-hover))",
            press: "hsl(var(--brand-primary-press))",
            foreground: "hsl(var(--brand-on-primary))"
          },
          secondary: {
            DEFAULT: "hsl(var(--brand-secondary))",
            hover: "hsl(var(--brand-secondary-hover))",
            press: "hsl(var(--brand-secondary-press))",
            foreground: "hsl(var(--brand-on-secondary))"
          },
          tertiary: {
            DEFAULT: "hsl(var(--brand-tertiary))",
            hover: "hsl(var(--brand-tertiary-hover))",
            press: "hsl(var(--brand-tertiary-press))",
            foreground: "hsl(var(--brand-on-tertiary))"
          }
        },
        "bg-inverse": "hsl(var(--background-inverse))",
        "bg-variant": "hsl(var(--background-variant))",
        "bg-variant-inverse": "hsl(var(--background-variant-inverse))",
        "on-background": {
          DEFAULT: "hsl(var(--on-background))",
          inverse: "hsl(var(--on-background-inverse))",
          variant: "hsl(var(--on-background-variant))",
          "variant-inverse": "hsl(var(--on-background-variant-inverse))"
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          variant: "hsl(var(--surface-variant))",
          primary: "hsl(var(--surface-primary))",
          "primary-variant": "hsl(var(--surface-primary-variant))",
          error: "hsl(var(--surface-error))",
          success: "hsl(var(--surface-success))"
        },
        "on-surface": {
          DEFAULT: "hsl(var(--on-surface))",
          variant: "hsl(var(--on-surface-variant))",
          primary: "hsl(var(--on-surface-primary))",
          "primary-variant": "hsl(var(--on-surface-primary-variant))",
          error: "hsl(var(--on-surface-error))",
          success: "hsl(var(--on-surface-success))"
        },
        critical: {
          DEFAULT: "hsl(var(--critical))",
          hover: "hsl(var(--critical-hover))",
          press: "hsl(var(--critical-press))",
          foreground: "hsl(var(--on-critical))"
        },
        alert: {
          DEFAULT: "hsl(var(--alert))",
          foreground: "hsl(var(--on-alert))"
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--on-success))"
        },
        disabled: {
          DEFAULT: "hsl(var(--disabled))",
          foreground: "hsl(var(--on-disabled))"
        },
        gradient: {
          "sky-top": "hsl(var(--gradient-sky-top))",
          "sky-bottom": "hsl(var(--gradient-sky-bottom))",
          "ocean-top": "hsl(var(--gradient-ocean-top))",
          "ocean-bottom": "hsl(var(--gradient-ocean-bottom))",
          "rosebud-top": "hsl(var(--gradient-rosebud-top))",
          "rosebud-bottom": "hsl(var(--gradient-rosebud-bottom))",
          "sunset-top": "hsl(var(--gradient-sunset-top))",
          "sunset-bottom": "hsl(var(--gradient-sunset-bottom))",
          "twilight-top": "hsl(var(--gradient-twilight-top))",
          "twilight-bottom": "hsl(var(--gradient-twilight-bottom))",
          "sunshine-top": "hsl(var(--gradient-sunshine-top))",
          "sunshine-bottom": "hsl(var(--gradient-sunshine-bottom))",
          "leaf-top": "hsl(var(--gradient-leaf-top))",
          "leaf-bottom": "hsl(var(--gradient-leaf-bottom))",
          "lime-top": "hsl(var(--gradient-lime-top))",
          "lime-bottom": "hsl(var(--gradient-lime-bottom))",
          "turquoise-top": "hsl(var(--gradient-turquoise-top))",
          "turquoise-bottom": "hsl(var(--gradient-turquoise-bottom))",
          "nemesia-top": "hsl(var(--gradient-nemesia-top))",
          "nemesia-bottom": "hsl(var(--gradient-nemesia-bottom))",
          "reef-top": "hsl(var(--gradient-reef-top))",
          "reef-bottom": "hsl(var(--gradient-reef-bottom))",
          "bluebird-top": "hsl(var(--gradient-bluebird-top))",
          "bluebird-bottom": "hsl(var(--gradient-bluebird-bottom))",
          "clearnight-top": "hsl(var(--gradient-clearnight-top))",
          "clearnight-bottom": "hsl(var(--gradient-clearnight-bottom))",
          "hibiscus-top": "hsl(var(--gradient-hibiscus-top))",
          "hibiscus-bottom": "hsl(var(--gradient-hibiscus-bottom))",
          "heartsease-top": "hsl(var(--gradient-heartsease-top))",
          "heartsease-bottom": "hsl(var(--gradient-heartsease-bottom))",
          "amarantus-top": "hsl(var(--gradient-amarantus-top))",
          "amarantus-bottom": "hsl(var(--gradient-amarantus-bottom))",
          "candy-top": "hsl(var(--gradient-candy-top))",
          "candy-bottom": "hsl(var(--gradient-candy-bottom))",
          "poppy-top": "hsl(var(--gradient-poppy-top))",
          "poppy-bottom": "hsl(var(--gradient-poppy-bottom))",
          "darkness-top": "hsl(var(--gradient-darkness-top))",
          "darkness-bottom": "hsl(var(--gradient-darkness-bottom))"
        },
        "on-gradient": {
          DEFAULT: "hsl(var(--on-gradient))",
          variant: "hsl(var(--on-gradient-variant))"
        }
      },
      borderRadius: {
        none: "var(--radius-none)",
        xs: "var(--radius-xs)",
        sm: "var(--radius-s)",
        DEFAULT: "var(--radius-m)",
        md: "var(--radius-m)",
        lg: "var(--radius-l)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-xxl)",
        full: "var(--radius-full)"
      },
      spacing: {
        "atl-0": "0px",
        "atl-1": "4px",
        "atl-1.5": "6px",
        "atl-2": "8px",
        "atl-2.5": "10px",
        "atl-3": "12px",
        "atl-3.5": "14px",
        "atl-4": "16px",
        "atl-5": "20px",
        "atl-6": "24px",
        "atl-8": "32px",
        "atl-9": "36px",
        "atl-10": "40px",
        "atl-11": "44px",
        "atl-12": "48px",
        "atl-14": "56px",
        "atl-16": "64px",
        "atl-20": "80px",
        "atl-24": "96px",
        "atl-28": "112px",
        "atl-32": "128px",
        "atl-36": "144px",
        "atl-40": "160px",
        "atl-44": "176px",
        "atl-48": "192px",
        "atl-52": "208px",
        "atl-56": "224px",
        "atl-60": "240px",
        "atl-64": "256px",
        "atl-72": "288px",
        "atl-80": "320px",
        "atl-96": "384px"
      },
      boxShadow: {
        "blue-xs": "0px 1px 2px rgba(29,78,216,0.05)",
        "blue-sm": "0px 1px 2px rgba(29,78,216,0.05), 0px 1px 3px rgba(29,78,216,0.1)",
        "blue-md": "0px 2px 4px -1px rgba(29,78,216,0.05), 0px 4px 6px -1px rgba(29,78,216,0.1)",
        "blue-lg": "0px 4px 6px -2px rgba(29,78,216,0.05), 0px 10px 15px -3px rgba(29,78,216,0.1)",
        "blue-xl": "0px 10px 10px -5px rgba(29,78,216,0.05), 0px 20px 25px -5px rgba(29,78,216,0.1)",
        "blue-xs-left": "-1px 0px 2px rgba(29,78,216,0.05)",
        "blue-sm-left": "-1px 0px 2px rgba(29,78,216,0.05), -1px 0px 3px rgba(29,78,216,0.1)",
        "blue-md-left": "-2px 0px 4px -1px rgba(29,78,216,0.05), -4px 0px 6px -1px rgba(29,78,216,0.1)",
        "blue-lg-left": "-4px 0px 6px -2px rgba(29,78,216,0.05), -10px 0px 15px -3px rgba(29,78,216,0.1)",
        "blue-xl-left": "-10px 0px 10px -5px rgba(29,78,216,0.05), -20px 0px 25px -5px rgba(29,78,216,0.1)",
        "blue-xs-right": "1px 0px 2px rgba(29,78,216,0.05)",
        "blue-sm-right": "1px 0px 2px rgba(29,78,216,0.05), 1px 0px 3px rgba(29,78,216,0.1)",
        "blue-md-right": "2px 0px 4px -1px rgba(29,78,216,0.05), 4px 0px 6px -1px rgba(29,78,216,0.1)",
        "blue-lg-right": "4px 0px 6px -2px rgba(29,78,216,0.05), 10px 0px 15px -3px rgba(29,78,216,0.1)",
        "blue-xl-right": "10px 0px 10px -5px rgba(29,78,216,0.05), 20px 0px 25px -5px rgba(29,78,216,0.1)",
        "blue-xs-top": "0px -1px 2px rgba(29,78,216,0.05)",
        "blue-sm-top": "0px -1px 2px rgba(29,78,216,0.05), 0px -1px 3px rgba(29,78,216,0.1)",
        "blue-md-top": "0px -2px 4px -1px rgba(29,78,216,0.05), 0px -4px 6px -1px rgba(29,78,216,0.1)",
        "blue-lg-top": "0px -4px 6px -2px rgba(29,78,216,0.05), 0px -10px 15px -3px rgba(29,78,216,0.1)",
        "blue-xl-top": "0px -10px 10px -5px rgba(29,78,216,0.05), 0px -20px 25px -5px rgba(29,78,216,0.1)",
        "neutral-xs": "0px 1px 2px rgba(30,41,59,0.04)",
        "neutral-sm": "0px 1px 2px rgba(30,41,59,0.06), 0px 1px 3px rgba(30,41,59,0.1)",
        "neutral-md": "0px 2px 4px -1px rgba(30,41,59,0.06), 0px 4px 6px -1px rgba(30,41,59,0.1)",
        "neutral-lg": "0px 4px 6px -2px rgba(30,41,59,0.05), 0px 10px 15px -3px rgba(30,41,59,0.1)",
        "neutral-xl": "0px 10px 10px -5px rgba(30,41,59,0.08), 0px 20px 25px -5px rgba(30,41,59,0.16)",
        "neutral-xs-left": "-1px 0px 2px rgba(30,41,59,0.04)",
        "neutral-sm-left": "-1px 0px 2px rgba(30,41,59,0.06), -1px 0px 3px rgba(30,41,59,0.1)",
        "neutral-md-left": "-2px 0px 4px -1px rgba(30,41,59,0.06), -4px 0px 6px -1px rgba(30,41,59,0.1)",
        "neutral-lg-left": "-4px 0px 6px -2px rgba(30,41,59,0.05), -10px 0px 15px -3px rgba(30,41,59,0.1)",
        "neutral-xl-left": "-10px 0px 10px -5px rgba(30,41,59,0.08), -20px 0px 25px -5px rgba(30,41,59,0.16)",
        "neutral-xs-right": "1px 0px 2px rgba(30,41,59,0.04)",
        "neutral-sm-right": "1px 0px 2px rgba(30,41,59,0.06), 1px 0px 3px rgba(30,41,59,0.1)",
        "neutral-md-right": "2px 0px 4px -1px rgba(30,41,59,0.06), 4px 0px 6px -1px rgba(30,41,59,0.1)",
        "neutral-lg-right": "4px 0px 6px -2px rgba(30,41,59,0.05), 10px 0px 15px -3px rgba(30,41,59,0.1)",
        "neutral-xl-right": "10px 0px 10px -5px rgba(30,41,59,0.08), 20px 0px 25px -5px rgba(30,41,59,0.16)",
        "neutral-xs-top": "0px -1px 2px rgba(30,41,59,0.04)",
        "neutral-sm-top": "0px -1px 2px rgba(30,41,59,0.06), 0px -1px 3px rgba(30,41,59,0.1)",
        "neutral-md-top": "0px -2px 4px -1px rgba(30,41,59,0.06), 0px -4px 6px -1px rgba(30,41,59,0.1)",
        "neutral-lg-top": "0px -4px 6px -2px rgba(30,41,59,0.05), 0px -10px 15px -3px rgba(30,41,59,0.1)",
        "neutral-xl-top": "0px -10px 10px -5px rgba(30,41,59,0.08), 0px -20px 25px -5px rgba(30,41,59,0.16)"
      },
      blur: {
        none: "0px",
        s: "2px",
        d: "4px",
        m: "6px",
        l: "8px",
        xl: "12px",
        "2xl": "20px",
        "3xl": "32px"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [tailwindcssAnimate]
};

export {
  tailwind_preset_default
};
//# sourceMappingURL=chunk-JCCPW4RN.js.map