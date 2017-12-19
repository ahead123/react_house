import React, { Component } from 'react';

export default class BedRoom extends Component {

  constructor(props){
    super(props);
    this.state = {
      bedRoomColor: 'default',
      colorPalette : {
        'success': '#27ae60',
        'primary': '#2980b9',
        'warning': '#f1c40f',
        'danger': '#c0392b'
      }
    };
  }

  componentWillReceiveProps(props){
    if(props.active_room=="Bed Room"){
      this.setState({ bedRoomColor: props.room_color })
    }else{
      this.setState({ bedRoomColor: 'default' })
    }
  }

  render(){
    const { active_room } = this.props;
    const { colorPalette, bedRoomColor } = this.state;
    const styles = {
      bedRoomStyles: {
        minHeight: 150,
        backgroundColor: active_room == "Bed Room" ? colorPalette[this.state.bedRoomColor] : ''
      }
    };

    return(
      <div className="col-md-3 col-sm-6 col-lg-6">
        <div className={`panel panel-${this.state.bedRoomColor}`}>
        <div className="panel-heading">
          Bed Room
        </div>
        <div className="panel-body" style={styles.bedRoomStyles}>
          
        </div>
        </div>
      </div>
    )
  }

}