import React from "react";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { Button } from "@mantine/core";
import router from "./routes/Routes";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <MantineProvider>
        <Notifications />
        <RouterProvider router={router} />
      </MantineProvider>
    </Provider>
  );
}

export default App;
