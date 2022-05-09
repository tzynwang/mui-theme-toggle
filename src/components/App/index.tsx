import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import globalTheme from '@Theme/index';
import Layer from '@Components/Base/Layout';
import Header from '@Components/Common/Header';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function ColorModeConsumer(): React.ReactElement {
  return (
    <React.Fragment>
      <Header />
      <Layer>
        <div>
          <div>side bar: show all tags, archives (display by year) </div>
          <div>
            可參考 docusaurus 的做法，在手機版面下 header 追加 expend
            按鈕，點開來可以看 all tas 與 archives
          </div>
        </div>
        <div>posts</div>
      </Layer>
    </React.Fragment>
  );
}

export default function App(): React.ReactElement {
  // States
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
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
