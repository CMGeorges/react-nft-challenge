import React, { useEffect, useState } from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.css";

const Main = ({ punkListData, selectedCard, flag, kittyListData }) => {
  const [activeCard, setActiveCard] = useState(punkListData[0]);

  useEffect(() => {
    if (flag === "kitty") setActiveCard(kittyListData[selectedCard]);
    if (flag === "punk") setActiveCard(punkListData[selectedCard]);
    //console.log(punkListData[selectedCard]);
    //console.log(kittyListData[selectedCard]);
  }, [punkListData, selectedCard, flag, kittyListData]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighLight">
          <div className="punkContainer">
            <img
              className="selectedCard"
              src={activeCard?.image_original_url}
              alt=""
            />
          </div>

          <div className="punkDetails" style={{ color: "#fff" }}>
            <div className="title">
              {activeCard?.name}
              <span className="itemNumber">·#{activeCard?.token_id}</span>
            </div>

            <div className="owner">
              <div className="ownerImageContainer">
                <img src={activeCard?.owner.profile_img_url} alt="" />
              </div>
              <div className="ownerDetails">
                <div className="ownerNameAndHandle">
                  <div>{activeCard?.owner.address}</div>
                  <div className="ownerHandle">@CMJGeorges&Cie </div>
                </div>
                <div className="ownerLink">
                  <img src={instagramLogo} alt="" />
                </div>
                <div className="ownerLink">
                  <img src={twitterLogo} alt="" />
                </div>
                <div className="ownerLink">
                  <img src={moreIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
