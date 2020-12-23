import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/authContext/authContext";
import { Guestcounter } from "../guests/Guestcounter";
import Guestform from "../guests/Guestform";
import Guestfilter from "../guests/Guestfilter";
import Guestsearch from "../guests/Guestsearch";
import Guests from "../guests/Guests";
import Clock from "react-live-clock";
import { Grid } from "@material-ui/core";
const Home = () => {
  const { getUser } = useContext(AuthContext);
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="app-container" style={{ height: 1500 }}>
      <Grid lg={12} md={12} xs={12} sm={12}>
        <div className="clock">
          <p>
            <Clock
              format={"HH:mm:ss"}
              ticking={true}
              timezone={"Asia/Mumbai"}
            />
            &nbsp; | &nbsp;
            <Clock format={"dddd"} ticking={true} timezone={"Asia/Mumbai"} />
          </p>
        </div>
      </Grid>
      <div className="main">
        <div className="filter">
          <Guestfilter />
          <Guestsearch />
        </div>

        <Guestform />
        <Guestcounter />
      </div>

      <Guests />
    </div>
  );
};

export default Home;
