import { FC, ReactElement, ReactNode } from "react";

import { RenderOptions, render } from "@testing-library/react";

const AllProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
