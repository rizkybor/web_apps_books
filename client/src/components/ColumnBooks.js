import React, { Fragment } from "react";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.info.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ColumnBooks(props) {
  const row = props;

  console.log(row, "<<<");
  return (
    <Fragment>
      {/* {row.map((e) => ( */}
      <StyledTableRow key="Disini Keynya">
        <StyledTableCell component="th" scope="row">
          "Books Name"
        </StyledTableCell>
        <StyledTableCell align="right">"Authors Name"</StyledTableCell>
        <StyledTableCell align="right">"Who Publish ?"</StyledTableCell>
        <StyledTableCell align="right">"ISBN Code"</StyledTableCell>
        <StyledTableCell align="right">"How Many ?"</StyledTableCell>
      </StyledTableRow>
      {/* ))} */}
    </Fragment>
  );
}
