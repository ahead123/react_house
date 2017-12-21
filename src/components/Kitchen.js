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
        bed: false
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
          bed: props.bed_is_checked
        }
      });
    }else{
      this.setState({ 
        kitchenColor: 'default', 
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
    const { kitchenColor, addMultiples: { couch, bed, chair, table } } = this.state;
    const styles = {
      kitchenStyles: {
        minHeight: 200,
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
              furniturePicker={furniturePicker} 
            />
          </div>
        </div>
      </div>
    )
  }

}