import { fontSize } from "constants/constants";

export function rem(value: number): string {
  return `${value / fontSize}rem`;
}
