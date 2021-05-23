import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import Particles from "components/particles/particles";
import { theme } from "App.styles";
import { useScrollBlock } from "hooks/useScrollBlock";

const App = (): React.ReactElement => {
  useScrollBlock()[0]();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Particles />
    </ThemeProvider>
  );
};

export default App;
