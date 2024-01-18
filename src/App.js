import React, { createContext } from "react";
import Album from "./Album";
import { useState } from "react";
import { Box, Grid, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const getTheme = (mode, background) =>
  createTheme({
    palette: {
      mode,
    },
  });

export const DarkModeContext = createContext({
  mode: "light",
  toggleMode: () => {},
});
function App() {
  const [mode, setMode] = useState("light");

  return (
    <DarkModeContext.Provider
      value={{
        mode,
        toggleMode: () => setMode(mode === "light" ? "dark" : "light"),
      }}
    >
      <ThemeProvider theme={getTheme(mode)}>
        <CssBaseline>
          <Box>
            <Grid container>
              <Grid item xs={12}>
                <Album />
              </Grid>
            </Grid>
          </Box>
        </CssBaseline>
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
}

export default App;
