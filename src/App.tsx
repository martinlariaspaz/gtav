import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { Provider } from "react-redux";
import { Router } from "./router/Router";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <NotificationsProvider position="top-center">
        <MantineProvider
          theme={{ colors: { darkBlue: ["#010101"] } }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Router />
        </MantineProvider>
      </NotificationsProvider>
    </Provider>
  );
}

export default App;
