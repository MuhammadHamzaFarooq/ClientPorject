import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PlayerCardOne from "./../../assets/tild3966-3830-4633-b034-326330656166__frame_4_1.png";
import PlayerCardTwo from "./../../assets/tild3731-3635-4266-b061-656666636665__frame_6_1.png";
import MobileInHand from "./../../assets/tild6532-3839-4239-b165-653032353137__pngwingcom.png";
import CoinOne from "./../../assets/tild3032-3432-4765-a337-363265343965__frame_18.png";
import CoinTwo from "./../../assets/tild6363-3938-4239-b236-333737613633__frame_19.png";

import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <Container>
        <Grid container>
          <Grid item xs={12} lg={7}>
            <div>
              <div className="section-heading">
                Powering the blockchain digital collectibles NFT revolution
              </div>
              <p className="description">
                Get the NFT wallet for iPhone or Android
              </p>

              <div>
                <div className="hero_players_cards">
                  <img
                    src={PlayerCardOne}
                    className="player_card_one"
                    width="100%"
                  />
                  <img
                    src={PlayerCardTwo}
                    className="player_card_two"
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} lg={5}>
            <div>
              <div style={{ width: "100%", position: "relative" }}  >
                <img
                  src={CoinOne}
                  style={{ position: "absolute", right: 0, top: "150px" }}
                  width="120px"
                
                />
                <img
                  src={CoinOne}
                  style={{ position: "absolute", right: "70px", top: "0px" }}
                  width="80px"
                />
                <img
                  src={MobileInHand}
                  style={{ width: "100%", marginTop: "50px" }}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Hero;
