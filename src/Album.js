import { Box, Grid, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import styled from "styled-components";
import Heading from "./Heading";
import { DarkModeContext } from "./App";

const AlbumBox = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const ButtonGr = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-bottom: 120px;
`;

const Album = () => {
  const { mode, toggleMode } = useContext(DarkModeContext);
  return (
    <Box>
      <Grid
        container
        xs={12}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Grid
          item
          xs={12}
          sx={{
            background: "#1976d2",
            // background: "background.then",
            display: "flex",
            padding: "20px",
            gap: "20px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <AlbumBox>
            <CameraAltIcon sx={{ color: "white" }} />
            <Typography
              sx={{
                color: "white",
                fontFamily: "arial",
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              Album layout
            </Typography>
          </AlbumBox>
          <Button
            variant="contained"
            sx={{ display: "flex", alignItems: "center" }}
            onClick={toggleMode}
          >
            {mode === "dark" ? (
              <WbSunnyIcon sx={{ color: "yellow" }} />
            ) : (
              <DarkModeIcon sx={{ color: "yellow" }} />
            )}
          </Button>
        </Grid>

        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Typography
            sx={{ textAlign: "center", fontSize: "60px", marginTop: "50px" }}
          >
            Album layout
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "23px",
              width: "43%",
              color: "gray",
            }}
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don't simply skip over it entirely.
          </Typography>

          <ButtonGr>
            <Button variant="contained">MAIN CALL TO ACTION</Button>
            <Button variant="outlined">SECONDARY ACTION</Button>
          </ButtonGr>
        </Grid>

        <Grid
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
            width: "100%",
          }}
        >
          <Grid
            xs={12}
            sx={{
              width: "100%",
              display: "flex",
              gap: "20px",
            }}
          >
            <Grid xs={4}>
              <Heading />
            </Grid>
            <Grid
              xs={4}
              sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <Heading />
            </Grid>
            <Grid
              xs={4}
              sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <Heading />
            </Grid>
          </Grid>
          <Grid
            xs={12}
            sx={{
              width: "100%",
              display: "flex",
              gap: "20px",
            }}
          >
            <Grid
              xs={4}
              sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <Heading />
            </Grid>
            <Grid
              xs={4}
              sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <Heading />
            </Grid>
            <Grid
              xs={4}
              sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <Heading />
            </Grid>
          </Grid>
          <Grid
            xs={12}
            sx={{
              width: "100%",
              display: "flex",
              gap: "20px",
            }}
          >
            <Grid
              xs={4}
              sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <Heading />
            </Grid>
            <Grid
              xs={4}
              sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <Heading />
            </Grid>
            <Grid
              xs={4}
              sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <Heading />
            </Grid>
          </Grid>

          <Grid
            xs={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "50px 0",
            }}
          >
            <Typography
              component="h4"
              sx={{ fontSize: "20px", fontWeight: "600" }}
            >
              Footer
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "gray" }}>
              Something here to give the footer a purpose!
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "gray" }}>
              Copyright © Your Website 2024
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Album;
