import { kebabCase } from "change-case";

export const getCSSVariableName = (name: string) => {
  return `${kebabCase(name)}`;
};
