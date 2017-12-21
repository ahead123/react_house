import React, { Component } from 'react';
import { Furniture } from '../common';

export default class Kitchen extends Component {

  constructor(props){
    super(props);
    this.state = {
      kitchenColor: 'default',
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
    if(props.active_room==="Kitchen"){
      this.setState({ 
        kitchenColor: props.room_color,
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
        kitchenColor: 'default', 
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
    const { active_room, colorPicker, furniturePicker } = this.props;
    const { 
      kitchenColor, 
      addMultiples: { 
        couch, bed, chair, table, desk, tv, fridge, microwave 
      } 
    } = this.state;
    const styles = {
      kitchenStyles: {
        minHeight: 250,
        backgroundColor: active_room === "Kitchen" ? colorPicker(kitchenColor) : ''
      },
      imageStyles: {        
        maxHeight: 100
      }
    };
    const { kitchenStyles, imageStyles } = styles;

    return(
      <div className="col-md-3 col-sm-6 col-lg-6">
        <div className={`panel panel-${kitchenColor}`}>
          <div className="panel-heading">
            Kitchen
          </div>
          <div className="panel-body" style={kitchenStyles}>
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