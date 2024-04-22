import { Color, TailwindColourPrefix } from "@types";

export const getColour = (color: Color, prefix: TailwindColourPrefix = "bg"): string => {
    if (color.id.toLowerCase().startsWith('custom')) {
        return `${prefix}-[${color.hex}]/[${color.opacity / 100}]`;
    }
    return `${prefix}-${color.id.split('.').join('-')}`;
}