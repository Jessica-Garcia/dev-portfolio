import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";
import { GlobalStyles } from "./styles/global";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ProjectsProvider } from "./contexts/ProjectsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ProjectsProvider>
          <Router />
        </ProjectsProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
}
