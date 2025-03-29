import React, { ComponentType } from "react";

type A11yProps = {
  role?: string;
  "aria-label"?: string;
  tabIndex?: number;
};

function withA11y<T extends object>(Component: ComponentType<T>) {
  return (props: T & A11yProps) => {
    return <Component {...props} tabIndex={0} />;
  };
}

export default withA11y;
