import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { RouteButton } from "./RouteButton";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={styles.header}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <RouteButton path="/upload" text="Upload" />
            <RouteButton path="/view" text="View" />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}