import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px gray;
  img {
    width: 100%;
    border-radius: 5px 5px 0 0;

    background-image: url("https://source.unsplash.com/random?wallpapers");
  }
  div {
    padding: 15px;
  }
`;

const Heading = () => {
  return (
    <Div>
      <img src="https://source.unsplash.com/random?wallpapers" alt="" />
      <div>
        <h3>Heading</h3>
        <p>
          This is a media card. You can use this section to describe the
          content.
        </p>
        <span>
          <Button sx={{ fontSize: "12px", fontWeight: "600" }}>View</Button>
          <Button sx={{ fontSize: "12px", fontWeight: "600" }}>Edit</Button>
        </span>
      </div>
    </Div>
  );
};

export default Heading;
