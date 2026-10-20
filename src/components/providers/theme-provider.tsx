"use client";

import * as React from "react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

/**
 * مزوّد السمة (Dark/Light/System)
 * — يضيف فئة .dark على عنصر html تلقائياً —
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
