import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles/PlaysLog.css";

import plays from "./Plays.json";

import Drawer from "material-ui/Drawer";
import PlayLogItem from "./PlayLogItem";

export default class SpotterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { current: { plays } };
  }

  handlePlayClick(play) {
    const { onChange } = this.props;
    this.setState({ current: plays.key });
    onChange(play);
  }
  render() {
    const { plays, processed, selected, onChange, phase, clock } = this.props;
    return (
      <div className="ContainerLog">
        <div>
          <Drawer
            width={135}
            className="PlayLog"
            openSecondary={true}
            docked={true}
          >
            <div className="LogHead">
              <h1 className="LogHeadPending">PENDING:</h1>
              <h1 className="LogHeadNumber">2</h1>
            </div>
            <div className="LogStats">
              <p className="StatTitle">PLAYS LOG</p>
              {plays.map(play => {
                return (
                  <PlayLogItem
                    key={play.key}
                    onClick={() => this.handlePlayClick(play)}
                    selected={this.state.current === play.key}
                    processed={play.processed}
                    phase={play.phase}
                    clock={play.clock}
                  />
                );
              })}
            </div>
          </Drawer>
        </div>
      </div>
    );
  }
}

PlayLogItem.propTypes = {
  onChange: PropTypes.func,
  processed: PropTypes.bool,
  selected: PropTypes.bool,
  phase: PropTypes.string,
  clock: PropTypes.string
};
PlayLogItem.defaultProps = {
  onChange: () => {},
  processed: false,
  selected: true,
  phase: "Quarter 0 ",
  clock: "00:00"
};
