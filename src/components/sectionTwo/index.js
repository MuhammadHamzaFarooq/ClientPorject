import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import BoyOne from "./../../assets/tild3361-3163-4562-b435-636235383964__casual-life-3d-13.png";
import BoyTwo from "./../../assets/tild3733-3335-4161-a230-616266646263__business-3d-young-bl.png";

import PlayerCardOne from "./../../assets/tild3966-3830-4633-b034-326330656166__frame_4_1.png";
import PlayerCardTwo from "./../../assets/tild3731-3635-4266-b061-656666636665__frame_6_1.png";
import GrilImage from "./../../assets/tild3631-6662-4535-a434-363939336339__casual-life-3d-young.png";

import "./hero.css";
function Hero() {
  return (
    <div className="section-two" id="brands">
      <Container>
        <Grid container>
          <Grid item xs={12} lg={4}>
            <img src={BoyOne} width="100%" />
          </Grid>

          <Grid item xs={12} lg={8}>
            <div style={{ position: "relative" }}>
              <div className="section-heading">
                Sweet has pioneered Flexible NFT Distribution
              </div>
              <br />
              <p className="description" style={{ padding: 0 }}>
                What does this mean? It means you can share, sell, gift, auction
                bundle, integrate, gamify, and drop NFTs anywhere you want.
              </p>
              <p className="description" style={{paddingTop:'2px'}}>
                Including your own e-commerce stores.
              </p>

              <div>
                <div className="hero_players_cards">
                  <img
                    src={PlayerCardOne}
                    className="player_card_one"
                    width="100%"
                    style={{ maxWidth: "150px" }}
                  />
                  <img
                    src={PlayerCardTwo}
                    className="player_card_two"
                    width="100%"
                    style={{ maxWidth: "150px" }}
                  />
                </div>
              </div>

              <div>
                <img src={GrilImage} width="80%" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Hero;
