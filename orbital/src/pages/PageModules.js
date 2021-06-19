// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Drawer from '@material-ui/core/Drawer';
// import Box from '@material-ui/core/Box';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import Badge from '@material-ui/core/Badge';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import NotificationsIcon from '@material-ui/icons/Notifications';

// import Button from '@material-ui/core/Button';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://talentconnect.herokuapp.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const logout = () => {
//     window.localStorage.removeItem('loggedUser')
//   }

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   toolbar: {
//     paddingRight: 24, // keep right padding when drawer closed
//   },
//   toolbarIcon: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: '0 8px',
//     ...theme.mixins.toolbar,
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: 36,
//   },
//   menuButtonHidden: {
//     display: 'none',
//   },
//   title: {
//     flexGrow: 1,
//   },
//   drawerPaper: {
//     position: 'relative',
//     whiteSpace: 'nowrap',
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerPaperClose: {
//     overflowX: 'hidden',
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     width: theme.spacing(7),
//     [theme.breakpoints.up('sm')]: {
//       width: theme.spacing(9),
//     },
//   },
//   appBarSpacer: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     height: '100vh',
//     overflow: 'auto',
//   },
//   container: {
//     paddingTop: theme.spacing(4),
//     paddingBottom: theme.spacing(4),
//   },
//   paper: {
//     padding: theme.spacing(2),
//     display: 'flex',
//     overflow: 'auto',
//     flexDirection: 'column',
//   },
//   fixedHeight: {
//     height: 240,
//   },
// }));

// const PageProf = () => {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(true);
//   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar position="fixed" className={clsx(classes.appBar, open && classes.appBarShift)}>
//         <Toolbar className={classes.toolbar}>
//           <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
//             TA-lent Connect
//           </Typography>
//           <IconButton color="inherit">
//           <Button variant="contained" id="logout" onClick={logout}>logout</Button>
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         className={classes.drawer}
//         variant="permanent"
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//       >
//         <Toolbar />
//         <div className={classes.drawerContainer}>
//         <List>{mainListItems}</List>
//         </div>
//       </Drawer>
//       <main className={classes.content}>
//         <div className={classes.appBarSpacer} />
//         <Container maxWidth="lg" className={classes.container}>
//           <Grid container spacing={3}>
//             {/* Chart */}
//             <Grid item xs={12} md={8} lg={9}>
//               <Paper className={fixedHeightPaper}>
//               </Paper>
//             </Grid>
//             {/* Recent Deposits */}
//             <Grid item xs={12} md={4} lg={3}>
//               <Paper className={fixedHeightPaper}>
//               </Paper>
//             </Grid>
//             {/* Recent Orders */}
//             <Grid item xs={12}>
//               <Paper className={classes.paper}>
//               </Paper>
//             </Grid>
//           </Grid>
//           <Box pt={4}>
//             <Copyright />
//           </Box>
//         </Container>
//       </main>
//     </div>
//   );
// }

// export default PageProf

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Module from '../components/Module'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { mainListItems } from '../components/ProfListItems';
import PeopleIcon from '@material-ui/icons/People';
import Logo from '../components/logo.png';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
    fixedHeight: {
    height: 240,
  },
}));

export default function PageModules() {
  const classes = useStyles();

  const [user, setUser] = useState(null)
  const [modules, setModules] = useState([]);
  const [newFind, setNewFind] = useState('')

  useEffect(() => {
    axios
      .get('https://api.nusmods.com/v2/2020-2021/moduleInfo.json')
      .then(response => {
        setModules(response.data)
      })
  }, [])

  const handleFindChange = (event) => {
    setNewFind(event.target.value)
  }

  const modulesToShow = modules.filter(module => {
    return module.moduleCode.includes(newFind)
  })

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <ListItem button>
      <ListItemIcon>
      <img src={Logo} />
      </ListItemIcon>
      <h2>  Lent Connect</h2>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
      <ExitToAppIcon style={{fill: "white"}}/>
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItem>

          {/* <Typography variant="h6" noWrap>
            Clipped drawer
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
        <List>{mainListItems}</List>
          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
          <div>
            <h1>Modules</h1>
            <form>
              <label>
                <TextField
                  className={classes.margin}
                  id="input-with-icon-textfield"
                  label="Module Code"
                  value={newFind}
                  onChange={handleFindChange}
                  InputProps={{
                  startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                   ),
                  }}
                />
              </label>
            </form>
            {" "}
            <div>
            <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
             {/* Chart */}
             <Grid item xs={12} md={8} lg={9}>
               <Paper>
               {modulesToShow.map(module => 
                <Module key={module.moduleCode} module={module} />
              )}
               </Paper>
             </Grid>
             {/* Recent Deposits */}
             <Grid item xs={12} md={4} lg={3}>
               <Paper>
               </Paper>
             </Grid>
             {/* Recent Orders */}
             <Grid item xs={12}>
               <Paper>
               </Paper>
             </Grid>
           </Grid>
         </Container>
            </div>
          </div>
      </main>
    </div>
  );
}