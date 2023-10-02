import Layout from "./components/layout";
import ThemeProvider from "./components/theme-provider";

const App = () => (
  <ThemeProvider>
    <Layout />
  </ThemeProvider>
);

export default App;
