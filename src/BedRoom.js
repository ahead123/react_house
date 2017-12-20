import React, { Component } from 'react';

export default class BedRoom extends Component {

  constructor(props){
    super(props);
    this.state = {
      bedRoomColor: 'default',
      bedRoomFurniture: ''
    };
  }

  componentWillReceiveProps(props){
    if(props.active_room==="Bed Room"){
      this.setState({ 
        bedRoomColor: props.room_color,
        bedRoomFurniture: props.furniture
      });
    }else{
      this.setState({ 
        bedRoomColor: 'default', 
        bedRoomFurniture: '' 
      });
    }
  }

  render(){
    console.log('this.props',this.props)
    const { active_room, furniture, colorPalette, furnitureStore } = this.props;
    const { bedRoomColor, bedRoomFurniture } = this.state;
    const styles = {
      bedRoomStyles: {
        minHeight: 200,
        backgroundColor: active_room === "Bed Room" ? colorPalette[bedRoomColor] : ''
      },
      imageStyles: {
        imageURL: active_room === "Bed Room" ? furnitureStore[furniture] : '',
        maxHeight: 100
      }
    };

    return(
      <div className="col-md-3 col-sm-6 col-lg-6">
        <div className={`panel panel-${bedRoomColor}`}>
        <div className="panel-heading">
          Bed Room
        </div>
        <div className="panel-body" style={styles.bedRoomStyles}>
          <h4 style={{color: 'white'}}>
          {
            active_room === "Bed Room" && bedRoomFurniture !== 'Select furniture' && bedRoomFurniture !== '' ? `${bedRoomFurniture} added!` : ''
          }
          </h4>
          <div>
            {
              bedRoomFurniture !== '' ? <img className="img-responsive" src={styles.imageStyles.imageURL} style={styles.imageStyles}/> : ''
            }
          </div>
        </div>
        </div>
      </div>
    )
  }

}