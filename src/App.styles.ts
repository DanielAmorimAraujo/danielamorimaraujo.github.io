import { createMuiTheme } from "@material-ui/core/styles";
import { globalColors } from "library/styles";

export const theme = createMuiTheme({
  palette: {
    text: {
      primary: globalColors.text,
    },
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "Raleway",
      "Verdana",
      "Geneva",
      "Tahoma",
      "sans-serif",
    ].join(","),
  },
});
