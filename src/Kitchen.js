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

  componentWillReceiveProps(props){
    if(props.active_room=="Kitchen"){
      this.setState({ kitchenColor: props.room_color })
    }else{
      this.setState({ kitchenColor: 'default' })
    }
  }

  render(){
    const { active_room } = this.props;
    const { colorPalette, kitchenColor } = this.state;
    const styles = {
      kitchenStyles: {
        minHeight: 150,
        backgroundColor: active_room == "Kitchen" ? colorPalette[kitchenColor] : ''
      }
    };

    return(
      <div className="col-md-3 col-sm-6 col-lg-6">
        <div className={`panel panel-${this.state.kitchenColor}`}>
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