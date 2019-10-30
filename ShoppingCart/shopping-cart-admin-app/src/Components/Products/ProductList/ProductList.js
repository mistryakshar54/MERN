import React from 'react';
import ListView from '../../../UI/ListView/ListView';
import { listViewHeaders } from './ProductListUtil';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flex : "1 auto"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));


const ProductListCompoenent  = ( props ) => {
    const classes = useStyles();
    const data = [
      {
        name: "Laptop",
        price: 50000,
        code: "Laptop-785",
        isActive: "true"
      },
      {
        name: "Laptop",
        price: 50000,
        code: "Laptop-785",
        isActive: "true"
      }
    ];
    return (
      <div className={classes.container}>
        <div>
          <TextField
            id="standard-search"
            label="Search"
            type="search"
            className={classes.textField}
            margin="normal"
          />
        </div>
        <ListView
          data={data}
          hasMultiSelect={false}
          headers={listViewHeaders}
        />
      </div>
    );
    
    
};

export default ProductListCompoenent;