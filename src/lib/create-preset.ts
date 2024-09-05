import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import twColors from "tailwindcss/colors";
import type { PluginCreator } from "tailwindcss/types/config";

// "slate" | "gray" | "zinc" | "neutral" | "stone" | "red" | "orange" | "amber" | "yellow"
// | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet"
// | "purple" | "fuchsia" | "pink" | "rose"

export type TailwindColor = Exclude<
  keyof typeof twColors,
  | "inherit"
  | "current"
  | "transparent"
  | "black"
  | "white"
  | "lightBlue"
  | "warmGray"
  | "trueGray"
  | "coolGray"
  | "blueGray"
>;

const deprecatedColors = [
  "lightBlue",
  "warmGray",
  "trueGray",
  "coolGray",
  "blueGray",
];
const twColorKeys = Object.keys(twColors).filter(
  (key) => !deprecatedColors.includes(key),
);
const safeTwColors = Object.fromEntries(
  twColorKeys.map((key) => [key, twColors[key as TailwindColor]]),
);

type PluginAPI = Parameters<PluginCreator>[0];

type CustomColorLevel =
  | "DEFAULT"
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950
  | string;
type CustomColor = Record<CustomColorLevel, string>;
type DarkLightColor = {
  light: string;
  dark: string;
};

type PresetConfigColors = {
  /**
   * Primary color name or custom color palette object
   * @default 'blue'
   */
  primary: TailwindColor | CustomColor;
  /**
   * Secondary color name or custom color palette object
   * @default 'fuchsia'
   */
  secondary: TailwindColor | CustomColor;
  /**
   * Gray color name or custom color palette object
   * @default 'neutral'
   */
  gray: TailwindColor | CustomColor;
  /**
   * Danger color name or custom color palette object
   * @default 'red'
   */
  danger: TailwindColor | CustomColor;
  /**
   * Warn color name or custom color palette object
   * @default 'yellow'
   */
  warn: TailwindColor | CustomColor;
  /**
   * Default background color in light and dark modes
   * @default 'bg-white' and 'bg-gray-950'
   */
  background: DarkLightColor;
  /**
   * Default foreground color in light and dark modes
   * @default 'text-gray-950' and 'text-white'
   */
  foreground: DarkLightColor;
  /**
   * Default muted foreground color in light and dark modes
   * @default 'text-gray-500' and 'text-gray-400'
   */
  foregroundMuted: DarkLightColor;
  /**
   * Default border color in light and dark modes
   * @default 'border-gray-300' and 'border-gray-700'
   */
  border: DarkLightColor;
  /**
   * Default muted border color in light and dark modes
   * @default 'border-gray-200' and 'border-gray-800'
   */
  borderMuted: DarkLightColor;
};

type PresetConfig = {
  /**
   * Base border radous
   * @default '0.5em'
   */
  baseRadius: string;
  /**
   * Theme colors
   */
  colors: PresetConfigColors;
};

type PartialPresetConfig = Partial<Omit<PresetConfig, "colors">> & {
  colors?: Partial<PresetConfigColors>;
};

const defaultConfig: PresetConfig = {
  baseRadius: "0.5em",
  colors: {
    primary: "blue",
    secondary: "fuchsia",
    gray: "neutral",
    danger: "red",
    warn: "yellow",
    background: {
      light: "#ffffff",
      dark: safeTwColors.gray[950],
    },
    foreground: {
      light: safeTwColors.gray[950],
      dark: "#ffffff",
    },
    foregroundMuted: {
      light: safeTwColors.gray[500],
      dark: safeTwColors.gray[400],
    },
    border: {
      light: safeTwColors.gray[300],
      dark: safeTwColors.gray[700],
    },
    borderMuted: {
      light: safeTwColors.gray[200],
      dark: safeTwColors.gray[800],
    },
  },
};

function resolveColor(color: TailwindColor | CustomColor): CustomColor {
  if (typeof color === "string") {
    return safeTwColors[color];
  }
  return color;
}

function resolveConfig(config: PartialPresetConfig): PresetConfig {
  const resolvedConfig: PresetConfig = {
    ...defaultConfig,
    ...config,
    colors: {
      ...defaultConfig.colors,
      ...config.colors,
    },
  } as Required<PresetConfig>;

  const colors = resolvedConfig.colors;

  resolvedConfig.colors.primary = resolveColor(colors.primary);
  resolvedConfig.colors.secondary = resolveColor(colors.secondary);
  resolvedConfig.colors.gray = resolveColor(colors.gray);
  resolvedConfig.colors.danger = resolveColor(colors.danger);
  resolvedConfig.colors.warn = resolveColor(colors.warn);

  return resolvedConfig;
}

export function createTailwindPreset(
  config: PartialPresetConfig = {},
): Partial<Config> {
  const resolvedConfig = resolveConfig(config);

  const preset: Partial<Config> = {
    darkMode: ["class"],
    safelist: ["dark"],
    theme: {
      extend: {
        colors: {
          background: {
            DEFAULT: resolvedConfig.colors.background.light,
            dark: resolvedConfig.colors.background.dark,
            // muted: resolvedConfig.colors.backgroundMuted,
          },
          foreground: {
            DEFAULT: resolvedConfig.colors.foreground.light,
            dark: resolvedConfig.colors.foreground.dark,
            muted: {
              DEFAULT: resolvedConfig.colors.foregroundMuted.light,
              dark: resolvedConfig.colors.foregroundMuted.dark,
            },
          },
          border: {
            DEFAULT: resolvedConfig.colors.border.light,
            dark: resolvedConfig.colors.border.dark,
            muted: {
              DEFAULT: resolvedConfig.colors.borderMuted.light,
              dark: resolvedConfig.colors.borderMuted.dark,
            },
          },
          primary: resolvedConfig.colors.primary,
          secondary: resolvedConfig.colors.secondary,
          gray: resolvedConfig.colors.gray,
          danger: resolvedConfig.colors.danger,
          warn: resolvedConfig.colors.warn,
        },
        fontWeight: {
          base: "400",
          heading: "800",
        },
        borderWidth: {
          DEFAULT: "1px",
          3: "3px",
        },
        borderRadius: {
          lg: `${resolvedConfig.baseRadius}`,
          md: `calc(${resolvedConfig.baseRadius} - 2px)`,
          sm: `calc(${resolvedConfig.baseRadius} - 4px)`,
        },
        boxShadow: {
          "inset-white": "inset 0 0 12px rgba(255,255,255,0.80)",
          "inset-gray": "inset 0 0 12px rgba(127,127,127,0.08)",
          "inset-black": "inset 0 0 12px rgba(0,0,0,0.80)",
        },
        textShadow: {
          sm: "2px 2px var(--tw-shadow-color, black)",
          DEFAULT: "0 2px 4px var(--tw-shadow-color, black)",
          lg: "0 8px 16px var(--tw-shadow-color, black)",
        },
        spacing: {
          fulldh: "100dvh",
          fulldw: "100dvw",
        },
        keyframes: {
          "accordion-down": {
            from: {
              height: "0",
            },
            to: {
              height: "var(--radix-accordion-content-height)",
            },
          },
          "accordion-up": {
            from: {
              height: "var(--radix-accordion-content-height)",
            },
            to: {
              height: "0",
            },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
    plugins: [
      animatePlugin,
      ({ addVariant }: PluginAPI) => {
        addVariant("starting", "@starting-style");
        addVariant("ios", "@supports (-webkit-touch-callout: none)");
        addVariant("standalone", "@media (display-mode: standalone)");
      },
      ({ matchUtilities, theme }: PluginAPI) => {
        matchUtilities(
          {
            "text-shadow": (value) => ({
              textShadow: value,
            }),
          },
          { values: theme("textShadow") },
        );
      },
    ],
  };

  return preset;
}
