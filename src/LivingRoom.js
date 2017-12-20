import React, { Component } from 'react';

export default class LivingRoom extends Component {

  constructor(props){
    super(props);
    this.state = {
      livingRoomColor: 'default',
      livingRoomFurniture: ''
    };
  }

  componentWillReceiveProps(props){
    if(props.active_room==="Living Room"){
      this.setState({ 
        livingRoomColor: props.room_color,
        livingRoomFurniture: props.selected_furniture
      });
    }else{
      this.setState({ 
        livingRoomColor: 'default', 
        livingRoomFurniture: '' 
      });
    }
  }

  render(){
    console.log(this.state)
    const { active_room, colorPicker, furniturePicker, selected_furniture } = this.props;
    const { livingRoomColor, livingRoomFurniture } = this.state;
    const styles = {
      livingRoomStyles: {
        minHeight: 200,
        backgroundColor: active_room === "Living Room" ? colorPicker(livingRoomColor) : ''
      },
      imageStyles: {
        imageURL: active_room === "Living Room" ? furniturePicker(selected_furniture) : '',
        maxHeight: 100
      }
    };

    return(
      <div className="col-md-3 col-sm-6 col-lg-6">
        <div className={`panel panel-${livingRoomColor}`}>
        <div className="panel-heading">
          Living Room
        </div>
        <div className="panel-body" style={styles.livingRoomStyles}>
          <h4 style={{color: 'white'}}>
          {
            active_room === "Living Room" && livingRoomFurniture !== 'Select furniture' && livingRoomFurniture !== '' ? `${livingRoomFurniture} added!` : ''
          }
          </h4>
          <div>
            {
              livingRoomFurniture !== '' ? <img className="img-responsive" src={styles.imageStyles.imageURL} style={styles.imageStyles}/> : ''
            }
          </div>
        </div>
        </div>
      </div>
    )
  }

}