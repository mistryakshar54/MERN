import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { typography } from "@material-ui/system";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

const extractData = ( data , headers ) => {
    if(data && data.length > 0 ) {
        return(
            data.map( ( row , index ) => {
                return (
                <TableRow key={"row_"+index}>
                    {headers.map((headerData , itemIndex) => {
                        return (
                          <TableCell
                            key={"row_" + index + "_" + itemIndex}
                            align={headerData.align ? headerData.align : "left"}
                          >
                            {row[headerData.title]}
                          </TableCell>
                        );
                    })}
                
                </TableRow>
                );
            })
        )
    }
    else{
        return (
          <TableRow key={"row_0"}>
            <td>Nothing to display!!</td>
          </TableRow>
        );
    }
}

 const ListView = ( props ) => {
  const classes = useStyles();
  const { headers , data , hasPagination , hasSorting , sortFields } = props;
  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          {headers && headers.length > 0
            ? headers.map((item, index) => {
                return (
                  <TableCell
                    key={"header_" + index}
                    align={item.align ? item.align : "left"}
                  >
                    {item.title}
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