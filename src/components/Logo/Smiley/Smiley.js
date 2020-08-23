import React, { Component } from "react";

import styled from "styled-components";

import { FaRegGrin, FaRegGrinWink } from "react-icons/fa";

const StyledSmiley = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 1.5rem;
  min-width: 1.5rem;
  & svg {

    display: inline-block;
  }

  .wink {
    display: ${props => (props.wink ? "inline;" : "none;")}
    position: absolute;
    top: auto;
    left: auto;
  }

  .notwink {
      display: ${props => (props.wink ? "none;" : "inline;")}
    position: absolute;
    top: auto;
    left: auto;
  }

  .hide {
    display: none;
  }
`;

class Smiley extends React.Component {
  state = {
    winking: false
  };

  wink = () => {
    this.setState({ winking: true });
  };

  noWink = () => {
    this.setState({ winking: false });
  };

  render() {
    return (
      <StyledSmiley
        onMouseOver={this.wink}
        onMouseOut={this.noWink}
        wink={this.state.winking}
      >
        <FaRegGrinWink className={"wink"} />
        <FaRegGrin className={"notwink"} />
      </StyledSmiley>
    );
  }
}

export default Smiley;
