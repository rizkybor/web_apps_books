import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@mui/material";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import { pink } from "@mui/material/colors";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { getBooks } from "../../store/actions/books";
import ColumnBook from "../../components/ColumnBooks";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: pink[400],
    color: theme.palette.common.white,
    fontSize: 14,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function Books() {
  const dispatch = useDispatch();
  const Books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "90vh" }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Nama</StyledTableCell>
                <StyledTableCell align="center">Author</StyledTableCell>
                <StyledTableCell align="right">Publisher</StyledTableCell>
                <StyledTableCell align="right">ISBN</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <ColumnBook Books={Books.books}></ColumnBook>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Container>
  );
}
