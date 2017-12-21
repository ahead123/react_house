import React, { Component } from 'react';

export default class LivingRoom extends Component {

  constructor(props){
    super(props);
    this.state = {
      livingRoomColor: 'default',
      addMultiples: {
        couch: false,
        chair: false,
        table: false,
        bed: false
      }
    };
  }

  componentWillReceiveProps(props){
    if(props.active_room==="Living Room"){
      this.setState({ 
        livingRoomColor: props.room_color,
        addMultiples: {
          couch: props.couch_is_checked,
          chair: props.chair_is_checked,
          table: props.table_is_checked,
          bed: props.bed_is_checked
        }
      });
    }else{
      this.setState({ 
        livingRoomColor: 'default', 
        addMultiples: {
          couch: false,
          chair: false,
          table: false,
          bed: false
        } 
      });
    }
  }

  render(){    
    const { active_room, colorPicker, furniturePicker } = this.props;
    const { 
      livingRoomColor, addMultiples: { couch, bed, chair, table } } = this.state;
    const styles = {
      livingRoomStyles: {
        minHeight: 200,
        backgroundColor: active_room === "Living Room" ? colorPicker(livingRoomColor) : ''
      },
      imageStyles: {
        maxHeight: 100
      }
    };
    const { livingRoomStyles, imageStyles } = styles;

    return(
      <div className="col-md-3 col-sm-6 col-lg-6">
        <div className={`panel panel-${livingRoomColor}`}>
        <div className="panel-heading">
          Living Room
        </div>
        <div className="panel-body" style={livingRoomStyles}>
          <div className="col-md-3">
            {
              couch ? <img style={imageStyles} className="img-responsive" src={furniturePicker('couch')} alt="" /> : ''
            }   
          </div>
          <div className="col-md-3">
            {
              bed ? <img style={imageStyles} className="img-responsive" src={furniturePicker('bed')} alt="" /> : ''
            }
          </div>
          <div className="col-md-3">
            {
              table ? <img style={imageStyles} className="img-responsive" src={furniturePicker('table')} alt="" /> : ''
            }
          </div>
          <div className="col-md-3">
            {
              chair ? <img style={imageStyles} className="img-responsive" src={furniturePicker('chair')} alt="" /> : ''
            } 
          </div>
        </div>
        </div>
      </div>
    )
  }

}