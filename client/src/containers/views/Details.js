import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { pink, purple } from "@mui/material/colors";
import { getAuthor } from "../../store/actions/authors";

export default function Details() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const author = useSelector((state) => state.authors.authors);
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(getAuthor(id));
  }, []);

  let toHomePage = () => {
    navigate(`/`);
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "90vh" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            bgcolor: pink[400],
            overflow: "hidden",
            borderRadius: "25px",
            boxShadow: 8,
            fontWeight: "bold",
            height: 233,
          }}
        >
          <Box
            component="img"
            sx={{
              height: 400,
              width: 300,
              maxHeight: { xs: 300, md: 250 },
              maxWidth: { xs: 450, md: 350 },
            }}
            alt="The house from the offer."
            src="https://cdn.techinasia.com/data/images/28277e55befe8886590d2d43f95fcc85.jpg"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              m: 3,
              minWidth: { md: 350 },
            }}
          >
            <Box
              component="span"
              sx={{ color: purple[900], fontSize: 25, mt: 1 }}
            >
              {author.name}
            </Box>
            <Box
              component="span"
              sx={{ color: pink[50], fontSize: 14, marginTop: 1 }}
            >
              Email : {author.email}
            </Box>
            <Box
              component="span"
              sx={{ color: pink[50], fontSize: 14, marginTop: 1 }}
            >
              Phone : {author.phone}
            </Box>
            <Box
              sx={{
                mt: 1.5,
                p: 0.5,
                backgroundColor: (theme) =>
                  alpha(theme.palette.primary.main, 0.1),
                borderRadius: "5px",
                color: "primary.main",
                fontWeight: "medium",
                display: "flex",
                fontSize: 12,
                alignItems: "center",
                "& svg": {
                  fontSize: 21,
                  mr: 0.5,
                },
              }}
            ></Box>
            <Button
              onClick={() => toHomePage()}
              variant="contained"
              size="small"
            >
              Back
            </Button>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
}
