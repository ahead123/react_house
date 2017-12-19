import React, { Component } from 'react';

export default class Kitchen extends Component {

  constructor(props){
    super(props);
    this.state = {
     kitchenColor: 'default',
     colorPalette : {
        'success': '#27ae60',
        'primary': '#2980b9',
        'warning': '#f1c40f',
        'danger': '#c0392b'
      }
    };
  }

  checKitchenColor = () => {
    const { room_color, active_room } = this.props;
    const { kitchenColor } = this.state;
    let color = kitchenColor;
    if(active_room == "Kitchen"){
      color = room_color
    }
    return color;
  };

  render(){
    const { active_room, room_color } = this.props;
    const { colorPalette } = this.state;
    const styles = {
      kitchenStyles: {
        minHeight: 150,
        backgroundColor: active_room == "Kitchen" ? colorPalette[room_color] : ''
      }
    };

    return(
      <div className="col-md-3 col-sm-6 col-lg-6">
        <div className={`panel panel-${this.checKitchenColor()}`}>
        <div className="panel-heading">
           Kitchen
        </div>
        <div className="panel-body" style={styles.kitchenStyles}>
          
        </div>
        </div>
      </div>
    )
  }

}