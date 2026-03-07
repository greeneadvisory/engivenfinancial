"use client";

import { Provider } from "react-redux";
import store from "@/shared/redux/store";
import { Initialload } from "@/shared/layouts-components/contextapi";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [pageloading, setpageloading] = React.useState(false);

  return (
    <Provider store={store}>
      <Initialload.Provider value={{ pageloading, setpageloading }}>
        {children}
      </Initialload.Provider>
    </Provider>
  );
};

export default Providers;
