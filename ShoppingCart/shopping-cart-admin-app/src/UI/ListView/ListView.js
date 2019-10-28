import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  checkBoxWidth : {
      width:"5%"
  }
});

 const ListView = ( props ) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const handleItemCheck = itemIndex => {
    const items = selectedItems;
    const index = items.indexOf(itemIndex);
    if (index > -1) {
    setSelectedItems(items.filter(item => item !== itemIndex));
    } else {
    items.push(itemIndex);
    setSelectedItems([...items]);
    }
  };   

const extractData = (data, headers) => {
  if (data && data.length > 0) {
    return data.map((row, index) => {
      return (
        <TableRow key={"row_" + index}>
          <TableCell
            className={classes.checkBoxWidth}
            key={"row_" + index + "_cb"}
          >
            <Checkbox
              checked={
                selectedItems && selectedItems.indexOf(index) === -1
                  ? false
                  : true
              }
              onChange={() => handleItemCheck(index)}
              color="primary"
              inputProps={{
                "aria-label": "secondary checkbox"
              }}
            />
          </TableCell>
          {headers.map((headerData, itemIndex) => {
            return (
              <TableCell
                key={"row_" + index + "_" + itemIndex}
                align={headerData.align ? headerData.align : "left"}
              >
                {row[headerData.name]}
              </TableCell>
            );
          })}
        </TableRow>
      );
    });
  } else {
    return (
      <TableRow key={"row_0"}>
        <td>Nothing to display!!</td>
      </TableRow>
    );
  }
};

  const classes = useStyles();
  const { headers , data , hasPagination , hasSorting , sortFields} = props;
  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
        <TableCell
            key={"header_cb"}
        ></TableCell>
          {headers && headers.length > 0
            ? headers.map((item, index) => {
                return (
                  <TableCell
                    key={"header_" + index}
                    align={item.align ? item.align : "left"}
                  >
                    {item.displayName}
                  </TableCell>
                );
              })
            : null}
          {/* <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {/* {data.map((row,index) => (
          <TableRow key={"row_"+index}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
          </TableRow>
        ))} */}
        { extractData( data , headers ) }
      </TableBody>
    </Table>
  );
}

export default ListView;