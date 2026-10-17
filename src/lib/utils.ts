import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

/**
 * دمج أصناف CSS بأمان مع حل التعارضات عبر tailwind-merge
 * (أداة cn القياسية من shadcn/ui)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
