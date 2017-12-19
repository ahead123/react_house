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

  componentWillReceiveProps(props){
    if(props.active_room=="Living Room"){
      this.setState({ livingRoomColor: props.room_color })
    }else{
      this.setState({ livingRoomColor: 'default' })
    }
  }
  
  render(){
    const { active_room } = this.props;
    const { colorPalette, livingRoomColor } = this.state;
    const styles = {
      livingRoomStyles: {
        minHeight: 150,
        backgroundColor: active_room == "Living Room" ? colorPalette[livingRoomColor] : ''
      }
    };
    
    return(
      <div className="col-md-3 col-sm-6 col-lg-6">
        <div className={`panel panel-${this.state.livingRoomColor}`}>
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