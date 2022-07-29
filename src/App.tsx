import { MantineProvider } from "@mantine/core";
import { Router } from "./router/Router";

function App() {
  return (
    <MantineProvider
      theme={{ fontFamily: "Roboto" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Router />
    </MantineProvider>
  );
}

export default App;
