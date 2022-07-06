import {AppBar, Toolbar, Typography
} from "@mui/material";



/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = (props: HeaderProps) => {

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Board Game Hoard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
