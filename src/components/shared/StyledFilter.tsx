import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";

export const StyledFilter = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box sx={{ display: "flex", alignItems: "center", margin: "20px 0 20px 0" }}>
      <Typography variant="h5" color="#C4C4C4" component="span" className={classes.customText}>
        FILTRES
      </Typography>
      <Button variant="contained" className={classes.customFilterBtn}>
        Evénements
      </Button>
      <Button variant="contained" className={classes.customFilterBtn}>
        Articles
      </Button>
      <Button variant="contained" className={classes.customFilterBtn}>
        Avantages
      </Button>
      <Button variant="contained" className={classes.customFilterBtn}>
        Sondages
      </Button>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  customText: {
    marginRight: "12px",
  },
  customFilterBtn: {
    backgroundColor: "#fff",
    color: theme.palette.text.primary,
    marginRight: "12px",
    borderRadius: "9px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
  customGreenBtn: {
    backgroundColor: "#54AC7E",
    color: "#fff",
    marginRight: "12px",
    boxShadow: "none",
    fontWeight: 700,
    fontSize: "12px",
  },
  customBlueGreenBtn: {
    backgroundColor: "#67B19F",
    color: "#fff",
    marginRight: "12px",
    boxShadow: "none",
    fontWeight: 700,
    fontSize: "12px",
  },
  customOutlinedGreenBtn: {
    borderColor: "#54AC7E",
    color: "#54AC7E",
    marginRight: "12px",
    boxShadow: "none",
    fontWeight: 700,
    fontSize: "12px",
  },
  customBlueBtn: {
    backgroundColor: "#51A1FF",
    color: "#fff",
    marginRight: "12px",
    boxShadow: "none",
    fontWeight: 700,
    fontSize: "12px",
  },
  customRedBtn: {
    backgroundColor: "#FF7260",
    color: "#fff",
    marginRight: "12px",
    boxShadow: "none",
    fontWeight: 700,
    fontSize: "12px",
  },
}));
