import { Brightness4, Brightness7 } from '@mui/icons-material';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

interface Props {
  toggleTheme: () => void;
}
export default function Layout({ toggleTheme }: Props) {
  const theme = useTheme();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ flexGrow: 1, marginRight: 16 }}>
            My MUI App
          </Typography>
          <Link to="/" style={{ color: 'white', marginRight: 16 }}>
            Home
          </Link>
          <Link to="/about" style={{ color: 'white', marginRight: 16 }}>
            About
          </Link>
          <div style={{ flexGrow: 1 }} />
          <IconButton color="inherit" onClick={toggleTheme}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
