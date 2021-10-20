import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";

export const StyledCard = (props: {
  title: string;
  image?: any;
  desc: string;
  helperText: string;
  actions: JSX.Element;
  shouldDisplayAnImage: boolean;
}): JSX.Element => {
  const { title, image, desc, helperText, actions, shouldDisplayAnImage } = props;
  const classes = useStyles();
  return (
    <Card
      sx={{
        flex: 1,
        height: 200,
        marginBottom: "24px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
        display: "flex",
      }}>
      {shouldDisplayAnImage && image && (
        <CardMedia component="img" height={200} sx={{ width: 312 }} image={image} alt="Live from space album cover" />
      )}
      <Box sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", paddingTop: 0 }}>
          <Box sx={{ display: "flex", flex: 1, justifyContent: "space-between", margin: "24px 0 17px 0" }}>
            <Box sx={{ display: "flex" }}>{actions}</Box>
            <Typography component="div" className={classes.customHelperText}>
              {helperText}
            </Typography>
          </Box>
          <Typography component="div" color="text.secondary" variant="h4" className={classes.customText}>
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" component="div">
            {desc}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }} />
      </Box>
    </Card>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  customText: {
    marginBottom: "8px",
  },
  customHelperText: {
    color: theme.palette.text.secondary,
    fontWeight: 400,
    fontSize: "14px",
  },
}));
