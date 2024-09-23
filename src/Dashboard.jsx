import * as React from 'react';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Navbar from "./components/Navbar";
// import Header from './components/Header';
import MainGrid from './components/MainGrid';
import SideMenu from './components/SideMenu';
import { Typography } from '@mui/material';

import AppTheme from './Theme/AppTheme';
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from './themes/customizations';

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};



const drawerWidth = 120
export default function Dashboard(props) {
    return (
      <AppTheme {...props} themeComponents={xThemeComponents}>
        <CssBaseline enableColorScheme />
        <Box sx={{ display: 'flex' }}>
          <SideMenu />
          <Navbar />
          {/* Main content */}
          <Box
            component="main"
            sx={(theme) => ({
              flexGrow: 1,
              backgroundColor: theme.vars
                ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                : alpha(theme.palette.background.default, 1),
              overflow: 'auto',
            })}
          >
            <Stack
              spacing={2}
              sx={{
                alignItems: 'center',
                mx: 3,
                pb: 10,
                mt: { xs: 8, md: 0 },
              }}
            >
              {/* <Header /> */}
              <Box sx={{ display: 'flex' }}>
              <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                  Overview
                </Typography>
                </Box>
              <Box sx={{ display: 'flex' }}>
                <dotlottie-player
                  src="https://lottie.host/f60ed0b5-5927-41bf-bd92-160d9af3ee0e/difhaTwSYM.json"
                  background="transparent"
                  speed="1"
                  style={{ width: '120px', height: '120px' }}
                  loop
                  autoplay
                />
              </Box>
              <MainGrid />
            </Stack>
          </Box>
        </Box>
      </AppTheme>
    );
  }