import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Modal from './components/Modal';
import Players from './blocks/Players';
import MainLayout from './components/MainLayout';
import Tabs from './components/Tabs';
import Records from './blocks/Records';
import Chat from './blocks/Chat';
import Game from './blocks/Game';
import { AppProvider } from './store';
import {TABS_LIST} from '/src/components/constants';

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppProvider>
      <CssBaseline />

      <MainLayout>
        <Game />
        {!matches ? (
          <Tabs tabsList={TABS_LIST} />
        ) : (
          <Grid container spacing={2}>
            <Grid xs={3.5}>
              <Records />
            </Grid>
            <Grid xs={5}>
              <Chat />
            </Grid>
            <Grid xs={3.5}>
              <Players />
            </Grid>
          </Grid>
        )}
        <Modal />
      </MainLayout>
    </AppProvider>
  );
}

export default App;
