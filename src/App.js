import { defaultTheme, ThemeProvider } from "evergreen-ui";
import "./App.css";
import FloatingPanel from "./components/FloatingPanel.js";
import Page1Landing from "./components/Page1Landing";
import Page2About from "./components/Page2About";
import Page3Projects from "./components/Page3Projects";
import Page4Contact from "./components/Page4Contact";
import useWindowDimensions from "./helpers/useWindowDimensions";

function App() {
  const { width } = useWindowDimensions();

  const theme = {
    ...defaultTheme,
    fontFamilies: {
      ...defaultTheme.fontFamilies,
      display: "nocturne-serif",
      ui: "niveau-grotesk",
    },
  };

  return (
    <ThemeProvider value={theme}>
      <div className="App">
        {width > 768 ? <FloatingPanel /> : null}
        <Page1Landing />
        <Page2About />
        <Page3Projects />
        <Page4Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
