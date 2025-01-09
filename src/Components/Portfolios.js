import React, { useState, useEffect } from "react";
// import { HiOutlineArrowRight } from "react-icons/hi";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Portfolios = ({
  projectName,
  gameStack,
  projectInformation,
  githubLink,
  deploymentLink,
  imgPlaceHolder,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    const handleMediaQueryChange = (mediaQueryList) => {
      // setFlip(mediaQueryList.matches);
    };

    handleMediaQueryChange(mediaQuery);

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % imgPlaceHolder.length
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : imgPlaceHolder.length - 1
    );
  };

  return (
    <div className="portfolio-section">
      <Card
        sx={{
          width: { xs: "90%", sm: "400px" }, // Responsive width
          marginRight: "2.5%",
          marginLeft: "2.5%",
          height: "auto",
          marginBottom: "10%",
          transition: "transform 0.3s ease", // Smooth scaling
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow
          "&:hover": {
            transform: "scale(1.05)", // Subtle scaling on hover
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Enhance shadow on hover
          },
        }}
      >
        <CardMedia
          component="picture"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 220,
            backgroundColor: "black",
          }}
        >
          <img
            src={imgPlaceHolder[currentImageIndex]}
            alt="logo"
            style={{ height: "100%", width: "auto" }}
          />
        </CardMedia>
        <div
          className="button-container"
          style={{ textAlign: "center", margin: "1rem 0" }}
        >
          <Button
            variant="contained"
            onClick={previousImage}
            sx={{ marginRight: "0.5rem" }}
          >
            {"<"}
          </Button>
          <Button variant="contained" onClick={nextImage}>
            {">"}
          </Button>
        </div>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            {projectName}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              marginBottom: "5%",
              maxHeight: 120,
              overflowY: "auto",
              textAlign: "justify",
            }}
          >
            {projectInformation}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ textAlign: "center", color: "#616161" }}
          >
            {gameStack}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          {githubLink ? (
            <Button
              size="small"
              variant="outlined"
              onClick={() => window.open(githubLink, "_blank", "noopener")}
            >
              GitHub
            </Button>
          ) : (
            <Button
              size="small"
              variant="outlined"
              disabled
              sx={{ color: "black", pointerEvents: "none" }}
            >
              Private
            </Button>
          )}

          {deploymentLink ? (
            <Button
              size="small"
              variant="outlined"
              onClick={() => window.open(deploymentLink, "_blank", "noopener")}
            >
              Deployment/Video
            </Button>
          ) : (
            <Button
              size="small"
              variant="outlined"
              disabled
              sx={{ color: "black", pointerEvents: "none" }}
            >
              Private
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default Portfolios;
