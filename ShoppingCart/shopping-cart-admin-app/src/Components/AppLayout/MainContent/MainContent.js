import React from "react";
import clsx from "clsx";
import { makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Header from "../Header/Header";
import Loader from '../Loader/Loader';
import { useSelector, shallowEqual } from "react-redux";
import { Route, Switch } from "react-router-dom";
import ProductListCompoenent  from "../../Products/ProductList/ProductList";
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  title: {
    flexGrow: 1
  },
  profileImg: {
    borderRadius: "50%"
  },
  paperContent: {
    display: "flex",
    flexGrow: 1,
    padding: theme.spacing(0, 1)
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "center"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

const MainContent = ( props ) => {
    const classes = useStyles();
    const appDrawerState = useSelector(state => state.CoreReducer.appdrawer , shallowEqual);
    const authState = useSelector(
      state => state.CoreReducer.auth,
      shallowEqual
    );
    return (
      <React.Fragment>
        <div className={classes.root}>
          <CssBaseline />
          <Header
            appDrawerState={appDrawerState}
            authState={authState}
            classes={classes}
          />
          <Loader>
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: appDrawerState.open
              })}
            >
              <div className={classes.drawerHeader} />
              <Paper className={classes.paperContent}>
                <Switch>
                  <Route path="/" exact component={ProductListCompoenent} />
                  {/* <Route component={NotFoundComponent} /> */}
                </Switch>
              </Paper>
              <div />
            </main>
          </Loader>
        </div>
      </React.Fragment>
    );
}

export default MainContent;