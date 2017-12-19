import React, { Component } from 'react';

export default class ManCave extends Component {

  constructor(props){
    super(props);
    this.state = {
      manCaveColor: 'default',
      activeBackground: '',
      colorPalette : {
        'success': '#27ae60',
        'primary': '#2980b9',
        'warning': '#f1c40f',
        'danger': '#c0392b'
      }
    };
    
  }

  checkManCaveColor = () => {
    const { room_color, active_room } = this.props;
    const { manCaveColor } = this.state;
    let color = manCaveColor;
    if(active_room == "Man Cave"){
      color = room_color;
    }
    return color;
  };

  render(){
    const { active_room, room_color } = this.props;
    const { colorPalette } = this.state;
    const styles = {
      manCaveStyles: {
        minHeight: 150,
        backgroundColor: active_room == "Man Cave" ? colorPalette[room_color] : ''
      }
    };

    return(
      <div className="col-md-3 col-sm-6 col-lg-6">
        <div className={`panel panel-${this.checkManCaveColor()}`}>
        <div className="panel-heading">
           Man Cave
        </div>
        <div className="panel-body" style={styles.manCaveStyles}>
          
        </div>
        </div>
      </div>
    )
  }

}