import { getGlobalTheme } from "@utils";
import { use } from "react";

function buildVarName(key: string) {
  return `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
}

async function buildGlobalTheme(): Promise<string> {
  const globalTheme = await getGlobalTheme();
  return `:root {${Object.entries(globalTheme.properties)
    .filter(([, value]) => value != null)
    .map(([key, value]) => `${buildVarName(key)}: ${value};`)
    .join("")}}`;
}

export const preload = () => {
  void getGlobalTheme();
};

const GlobalStyles = () => {
  const theme = use(buildGlobalTheme());

  return <style>{theme}</style>;
};

export default GlobalStyles;
