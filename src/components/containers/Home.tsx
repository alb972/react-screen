import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";
import MicIcon from "@mui/icons-material/Mic";
import ArticleIcon from "@mui/icons-material/Article";
import RedeemIcon from "@mui/icons-material/Redeem";
import EventIcon from "@mui/icons-material/Event";
import AddIcon from "@mui/icons-material/Add";
import picOne from "src/assets/images/pic1.jpeg";
import picTwo from "src/assets/images/pic2.jpeg";
import picThree from "src/assets/images/pic3.jpeg";
import picFour from "src/assets/images/pic4.jpeg";
import { StyledCard } from "../shared/StyledCard";
import { StyledFilter } from "../shared/StyledFilter";

export const Home = (): JSX.Element => {
  const classes = useStyles();
  const shortLoremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
    " Ultrices nec, leo, nunc tempor, suspendisse eu et.  " +
    "Aliquam tortor et faucibus semper ornare vitae nibh tincidunt. " +
    "Ultricies in arcu eleifend porta fringilla tellus lacus.";
  const longLoremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices nec, leo, nunc tempor, suspendisse eu et. " +
    "Aliquam tortor et faucibus semper ornare vitae nibh tincidunt." +
    " Ultricies in arcu eleifend porta fringilla tellus lacus." +
    " Aliquam tortor et faucibus semper ornare vitae nibh tincidunt." +
    " Ultricies in arcu eleifend porta fringilla tellus lacus.";
  return (
    <Box sx={{ minWidth: "1112px", maxWidth: "1112px", padding: "0 64px 0 64px" }}>
      <TopBar />
      <StyledFilter />
      <StyledCard
        title="Nom de l'évènement"
        image={picOne}
        desc={shortLoremText}
        helperText="Il y a 2 jours"
        actions={
          <>
            <Button variant="contained" startIcon={<EventIcon />} className={classes.customGreenBtn}>
              EVENEMENT
            </Button>
            <Button variant="outlined" className={classes.customOutlinedGreenBtn}>
              VENDREDI 3 JUIL 2020
            </Button>
            <Button variant="outlined" className={classes.customOutlinedGreenBtn}>
              14H30
            </Button>
          </>
        }
        shouldDisplayAnImage
      />
      <StyledCard
        title="Nom de l'évènement"
        desc={longLoremText}
        helperText="Il y a 2 jours"
        actions={
          <>
            <Button variant="contained" startIcon={<EventIcon />} className={classes.customGreenBtn}>
              EVENEMENT
            </Button>
            <Button variant="outlined" className={classes.customOutlinedGreenBtn}>
              VENDREDI 3 JUIL
            </Button>
            <Button variant="outlined" className={classes.customOutlinedGreenBtn}>
              14H30
            </Button>
          </>
        }
        shouldDisplayAnImage={false}
      />
      <StyledCard
        title="Titre du sondage"
        image={picThree}
        desc={shortLoremText}
        helperText="Il y a 1 mois"
        actions={
          <>
            <Button variant="contained" startIcon={<MicIcon />} className={classes.customBlueBtn}>
              SONDAGE
            </Button>
          </>
        }
        shouldDisplayAnImage
      />
      <StyledCard
        title="Nom de l'évènement"
        image={picOne}
        desc={shortLoremText}
        helperText="Il y a 2 jours"
        actions={
          <>
            <Button variant="contained" startIcon={<ArticleIcon />} className={classes.customRedBtn}>
              ARTICLE
            </Button>
          </>
        }
        shouldDisplayAnImage
      />
      <StyledCard
        title="Nouvelle subvention liberté 🎈"
        image={picOne}
        helperText="Il y a 2 jours"
        desc="Utilisez votre e-cagnotte sur toutes les offres culturelles sélectionnées pour vous par @company."
        actions={
          <>
            <Button variant="contained" startIcon={<RedeemIcon />} className={classes.customBlueGreenBtn}>
              AVANTAGE
            </Button>
          </>
        }
        shouldDisplayAnImage
      />
      <StyledCard
        title="Nouvelle subvention vacances 🌴"
        image={picOne}
        desc="Voyagez l’esprit léger et faites vous rembourser vos dépenses de vacances grâce à @company."
        helperText="Il y a 2 jours"
        actions={
          <>
            <Button variant="contained" startIcon={<RedeemIcon />} className={classes.customBlueGreenBtn}>
              AVANTAGE
            </Button>
          </>
        }
        shouldDisplayAnImage
      />
      <StyledCard
        title="Nouvelle subvention Culture 🎭"
        image={picFour}
        desc="Utilisez votre e-cagnotte sur toutes les offres culturelles sélectionnées pour vous par @company. "
        helperText="Il y a 2 jours"
        actions={
          <>
            <Button variant="contained" startIcon={<RedeemIcon />} className={classes.customBlueGreenBtn}>
              AVANTAGE
            </Button>
          </>
        }
        shouldDisplayAnImage
      />
      <StyledCard
        title="Nouvelle subvention Cinéma 🍿"
        image={picOne}
        desc="@Company vous offre des billets de cinéma à tarifs mini, profitez-en."
        helperText="Il y a 2 jours"
        actions={
          <>
            <Button variant="contained" startIcon={<RedeemIcon />} className={classes.customBlueGreenBtn}>
              AVANTAGE
            </Button>
          </>
        }
        shouldDisplayAnImage
      />
    </Box>
  );
};

export const TopBar = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", margin: "20px 0 20px 0" }}>
      <Typography variant="h4" color="text.primary" component="div">
        Toutes les actualités
      </Typography>
      <Button variant="outlined" startIcon={<AddIcon />} className={classes.customNewsBtn}>
        Nouvelle actualité
      </Button>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
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
  customNewsBtn: {
    borderColor: "#00CD9C",
    color: "#009975",
    marginRight: "12px",
    boxShadow: "none",
    fontWeight: 700,
    fontSize: "16px",
    textTransform: "none",
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
