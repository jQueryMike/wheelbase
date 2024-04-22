import { GridGapMap, GridGapOptions } from "@types";

/**
 * Grid Columns map
 */
const gridGapMappings: GridGapMap = {
    1: {
        sm: "gap-1",
    },
    2: {
        sm: "gap-2",
    },
    3: {
        sm: "gap-3",
    },
    4: {
        sm: "gap-3",
        md: "gap-4",
    },
    5: {
        sm: "gap-3",
        md: "gap-4",
        lg: "gap-5",
    },
    6: {
        sm: "gap-3",
        md: "gap-4",
        lg: "gap-6",
    },
};

/**
 * @description Get grid gap classes for a specified column gap
 * @param columns {GridGapOptions} grid gap values
 * @returns Tailwind classes for a grid gap value
 * ```
 * @example getGridGap(2)
 * // "gap-2"
 * ```
 */
export function getGridGap(gap: GridGapOptions = 4): string {
    return Object.entries(gridGapMappings[gap] || {})
      .map(([key, value]) => `${key}:${value}`, [])
      .join(' ');
}