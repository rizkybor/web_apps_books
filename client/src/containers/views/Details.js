import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAuthor } from "../../store/actions/authors";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { pink, purple } from "@mui/material/colors";
import { Grid } from "@mui/material";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";

export default function Details() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const author = useSelector((state) => state.authors.authors);
  let navigate = useNavigate();
  console.log(author, "<< siapa yaa ?");

  useEffect(() => {
    dispatch(getAuthor(id));
  });

  let toNewsPage = () => {
    navigate(`/`);
  };

  const blue = {
    500: "#007FFF",
    600: "#0072E5",
    700: "#0059B2",
  };

  const CustomButtonRoot = styled("span")`
    font-family: IBM Plex Sans, sans-serif;
    font-weight: bold;
    font-size: 0.875rem;
    background-color: ${blue[500]};
    padding: 12px 24px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;

    &:hover {
      background-color: ${blue[600]};
    }

    &.${buttonUnstyledClasses.active} {
      background-color: ${blue[700]};
    }

    &.${buttonUnstyledClasses.focusVisible} {
      box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
        0 0 0 5px rgba(0, 127, 255, 0.5);
      outline: none;
    }

    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  function CustomButton(props) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
  }
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
            borderRadius: "48px",
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
              sx={{ color: purple[900], fontSize: 30, mt: 1 }}
            >
              {author.name}
            </Box>
            <Box component="span" sx={{ color: pink[50], fontSize: 18 }}>
              {author.email}
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
            <CustomButton onClick={toNewsPage} variant="contained" size="small">
              Back
            </CustomButton>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
}
