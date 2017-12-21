import React, { Component } from 'react';
import { Furniture } from '../common';

export default class ManCave extends Component {

  constructor(props){
    super(props);
    this.state = {
      manCaveColor: 'default',
      addMultiples: {
        couch: false,
        chair: false,
        table: false,
        bed: false
      }
    };
  }

  componentWillReceiveProps(props){
    if(props.active_room==="Man Cave"){
      this.setState({ 
        manCaveColor: props.room_color,
        addMultiples: {
          couch: props.couch_is_checked,
          chair: props.chair_is_checked,
          table: props.table_is_checked,
          bed: props.bed_is_checked
        }
      });
    }else{
      this.setState({ 
        manCaveColor: 'default', 
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
      manCaveColor, addMultiples: { couch, bed, chair, table } } = this.state;
    const styles = {
      manCaveStyles: {
        minHeight: 200,
        backgroundColor: active_room === "Man Cave" ? colorPicker(manCaveColor) : ''
      },
      imageStyles: {
        maxHeight: 100
      }
    };
    const { manCaveStyles, imageStyles } = styles;

    return(
      <div className="col-md-3 col-sm-6 col-lg-6">
        <div className={`panel panel-${manCaveColor}`}>
        <div className="panel-heading">
          Man Cave
        </div>
        <div className="panel-body" style={manCaveStyles}>
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