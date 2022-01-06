import React, { Fragment } from "react";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

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

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ColumnBooks(props) {
  const { Books } = props;
  let navigate = useNavigate();

  let handleId = (props) => {
    navigate(`/${props.id}`);
  };
  return (
    <Fragment>
      {Books.map((e) => (
        <StyledTableRow key={e.id}>
          <StyledTableCell component="th" scope="row">
            {e.name}
          </StyledTableCell>
          <StyledTableCell align="center">
            {e.author !== null && (
              <Button onClick={() => handleId(e.author)} variant="text">
                {e.author.name}
              </Button>
            )}
          </StyledTableCell>
          <StyledTableCell align="right">{e.publisher_name}</StyledTableCell>
          <StyledTableCell align="right">{e.isbn}</StyledTableCell>
          <StyledTableCell align="right">{e.price}</StyledTableCell>
        </StyledTableRow>
      ))}
    </Fragment>
  );
}
