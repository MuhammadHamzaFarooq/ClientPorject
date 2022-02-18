import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PlayerOne from "./../../assets/tild6638-3638-4139-b232-343134376434__frame_37.png";
import PlayerTwo from "./../../assets/tild3063-3966-4635-b836-653039373935__frame_38.png";

import "./hero.css";
function Hero() {
  return (
    <div className="section-three" id="artist-and-teams">
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={7}>
            <div>
              <div className="section-heading section-three-title">
                Offer your fans unique limited edition digital merch
              </div>
              <p className="description">
                Drive new revenue, raise funds for charities, and increase fan
                engagement
              </p>
            </div>
          </Grid>

          <Grid item xs={12} md={5}>
            <div className="player-box">
              <div>
                <img src={PlayerOne} width="100%" />
              </div>
              <div style={{ width: "100px" }}></div>
              <div>
                <img src={PlayerTwo} width="100%" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Hero;
