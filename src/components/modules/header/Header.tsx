import { AppBar, Box, Toolbar } from '@mui/material';
import { RouteButton } from './RouteButton';
import styles from './header.module.css';
import { SnsButton } from './SnsButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

export const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={styles.header}>
          <Box sx={{ width: '40%' }}>
            <RouteButton path="/upload" text="Upload" />
            <RouteButton path="/view" text="View" />
          </Box>
          <Box sx={{ width: '30%' }}>
            <SnsButton href="https://github.com/itojun-1230" icon={<GitHubIcon />} />
            <SnsButton href="https://twitter.com/itojun_js" icon={<XIcon />} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
