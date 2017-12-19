import React, { Component } from 'react';

export default class LivingRoom extends Component {

  constructor(props){
    super(props);
    this.state = {
     livingRoomColor: 'default',
     colorPalette : {
        'success': '#27ae60',
        'primary': '#2980b9',
        'warning': '#f1c40f',
        'danger': '#c0392b'
      }
    };
  }

  checkLivingRoomColor = () => {
    const { room_color, active_room } = this.props;
    const { livingRoomColor } = this.state;
    let color = livingRoomColor;
    if(active_room == "Living Room"){
      color = room_color
    }
    return color;
  };
  
  render(){
    const { active_room, room_color } = this.props;
    const { colorPalette } = this.state;
    const styles = {
      livingRoomStyles: {
        minHeight: 150,
        backgroundColor: active_room == "Living Room" ? colorPalette[room_color] : ''
      }
    };
    
    return(
      <div className="col-md-3 col-sm-6 col-lg-6">
        <div className={`panel panel-${this.checkLivingRoomColor()}`}>
        <div className="panel-heading">
          Living Room
        </div>
        <div className="panel-body" style={styles.livingRoomStyles}>
          
        </div>
        </div>
      </div>
    )
  }

}