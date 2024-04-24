import {
  IBreakpoints,
  IBreakpointKeys,
  IHeadingKeys,
  IParagraphKeys,
} from "./types";

type IBreakFonts = Record<
  IBreakpointKeys,
  {
    headings: Record<IHeadingKeys, string[]>;
    paragraphs: Record<IParagraphKeys, string[]>;
  }
>;

export const breakpoints: IBreakpoints = {
  sm: "400px",
  md: "700px",
  lg: "1200px",
};

export const breakFonts: IBreakFonts = {
  lg: {
    headings: {
      h1: ["3rem", "3rem"],
      h2: ["2.25rem", "2.5rem"],
      h3: ["1.5rem", "1.625rem"],
      h4: ["0.75rem", "0.75rem"],
    },
    paragraphs: {
      xxsm: ["0.7rem", ".9rem"],
      xsm: ["0.875rem", "1.1rem"],
      sm: ["1.125rem", "1.5rem"],
      md: ["1.5rem", "1.625rem"],
    },
  },
  md: {
    headings: {
      h1: ["2.5rem", "2.5rem"], // Diminua os tamanhos das fontes h1
      h2: ["1.875rem", "2rem"], // Diminua os tamanhos das fontes h2
      h3: ["1.25rem", "1.3125rem"], // Diminua os tamanhos das fontes h3
      h4: ["0.625rem", "0.625rem"], // Diminua os tamanhos das fontes h4
    },
    paragraphs: {
      xxsm: ["0.575rem", "0.725rem"], // Diminua os tamanhos das fontes xxsm
      xsm: ["0.725rem", "0.9rem"], // Diminua os tamanhos das fontes xsm
      sm: ["0.9375rem", "1.25rem"], // Diminua os tamanhos das fontes sm
      md: ["1.25rem", "1.3125rem"], // Diminua os tamanhos das fontes md
    },
  },
  sm: {
    headings: {
      h1: ["2rem", "2rem"], // Diminua os tamanhos das fontes h1
      h2: ["1.5rem", "1.625rem"], // Diminua os tamanhos das fontes h2
      h3: ["1rem", "1.0625rem"], // Diminua os tamanhos das fontes h3
      h4: ["0.5rem", "0.5rem"], // Diminua os tamanhos das fontes h4
    },
    paragraphs: {
      xxsm: ["0.525rem", "0.675rem"], // Diminua os tamanhos das fontes xxsm
      xsm: ["0.625rem", "0.75rem"], // Diminua os tamanhos das fontes xsm
      sm: ["0.8125rem", "1.125rem"], // Diminua os tamanhos das fontes sm
      md: ["1.0625rem", "1.125rem"], // Diminua os tamanhos das fontes md
    },
  },
};
