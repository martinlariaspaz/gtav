import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { Router } from "./router/Router";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <MantineProvider
        theme={{ colors: { darkBlue: ["#010101"] } }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Router />
      </MantineProvider>
    </Provider>
  );
}

export default App;
