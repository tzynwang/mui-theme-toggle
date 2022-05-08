import React, { createContext, useContext, useState, useMemo } from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import globalTheme from '@Theme/index';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function ColorModeConsumer(): React.ReactElement {
  // States
  const theme = useTheme();
  const currentContext = useContext(ColorModeContext);

  // Main
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 3,
      }}
    >
      <ButtonBase onClick={currentContext.toggleColorMode}>
        current theme: {theme.palette.mode}
      </ButtonBase>
    </Box>
  );
}

export default function App(): React.ReactElement {
  // States
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );
  const theme = useMemo(
    () => createTheme({ ...globalTheme, palette: { mode } }),
    [mode]
  );

  // Main
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ColorModeConsumer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
