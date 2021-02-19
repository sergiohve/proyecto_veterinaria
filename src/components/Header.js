import React from 'react';
import { Link  } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Cookies from "universal-cookie";

const cookies = new Cookies();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "white",
     '&:hover': {
      color: "white",
      textDecoration: "none",
    },
  },
  
 
}));



export default function Header({titulo}) {
  const classes = useStyles();
 const cerrarSesion=()=>{
    cookies.remove('id', {path: "/"});
    cookies.remove('apellido_paterno', {path: "/"});
    cookies.remove('apellido_materno', {path: "/"});
    cookies.remove('nombre', {path: "/"});
    cookies.remove('username', {path: "/"});
    window.location.href='./';
}


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
           {titulo}
          </Typography>
          <Link to="/" className={classes.link} onClick={cerrarSesion}>Cerrar Sesión</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
