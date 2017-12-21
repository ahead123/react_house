import React, { Component } from 'react';
import { Furniture } from '../common';

export default class BedRoom extends Component {

  constructor(props){
    super(props);
    this.state = {
      bedRoomColor: 'default',
      addMultiples: {
        couch: false,
        chair: false,
        table: false,
        bed: false,
        tv: false,
        desk: false,
        fridge: false,
        microwave: false
      }
    };
  }

  componentWillReceiveProps(props){
    if(props.active_room==="Bed Room"){
      this.setState({ 
        bedRoomColor: props.room_color,
        addMultiples: {
          couch: props.couch_is_checked,
          chair: props.chair_is_checked,
          table: props.table_is_checked,
          bed: props.bed_is_checked,
          desk: props.desk_is_checked,
          tv: props.tv_is_checked,
          fridge: props.fridge_is_checked,
          microwave: props.microwave_is_checked
        }
      });
    }else{
      this.setState({ 
        bedRoomColor: 'default', 
        addMultiples: {
          couch: false,
          chair: false,
          table: false,
          bed: false,
          tv: false,
          desk: false,
          fridge: false,
          microwave: false
        } 
      });
    }
  }

  render(){
    console.log('state in bedroom', this.state);
    const { active_room, colorPicker, furniturePicker } = this.props;
    const { 
      bedRoomColor, 
      addMultiples: { 
        couch, bed, chair, table, desk, tv, fridge, microwave 
      } 
    } = this.state;
    const styles = {
      bedRoomStyles: {
        minHeight: 250,
        backgroundColor: active_room === "Bed Room" ? colorPicker(bedRoomColor) : ''
      },
      imageStyles: {        
        maxHeight: 100
      }
    };
    const { bedRoomStyles, imageStyles } = styles;

    return(
      <div className="col-md-3 col-sm-6 col-lg-6">

        <div className={`panel panel-${bedRoomColor}`}>
        <div className="panel-heading">
          Bed Room
        </div>
          <div className="panel-body" style={bedRoomStyles}>
            <Furniture 
              couch={couch} 
              bed={bed} 
              chair={chair} 
              table={table}
              microwave={microwave}
              tv={tv}
              fridge={fridge}
              desk={desk} 
              furniturePicker={furniturePicker} 
            />
          </div>
        </div>

      </div>
    )
  }

}