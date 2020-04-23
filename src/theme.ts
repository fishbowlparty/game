import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: { main: "#03a9f4", contrastText: "#fff" },
    secondary: { main: "#fc7100" },
  },
  typography: {
    fontFamily: '"Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Palatino", "Times New Roman", serif',
    },
    h2: {
      fontFamily: '"Palatino", "Times New Roman", serif',
    },
    h3: {
      fontFamily: '"Palatino", "Times New Roman", serif',
    },
    h4: {
      fontFamily: '"Palatino", "Times New Roman", serif',
    },
    h5: {
      fontFamily: '"Palatino", "Times New Roman", serif',
    },
    h6: {
      fontFamily: '"Palatino", "Times New Roman", serif',
    },
  },
});
