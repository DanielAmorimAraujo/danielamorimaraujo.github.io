import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import Main from "components/main/main";
import Particles from "components/particles/particles";
import { theme } from "App.styles";
import { useScrollBlock } from "hooks/useScrollBlock";

const App = (): React.ReactElement => {
  useScrollBlock()[0]();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Particles />
      <Main />
    </ThemeProvider>
  );
};

export default App;
