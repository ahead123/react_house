import React, { Component } from 'react';

export default class LivingRoom extends Component {

  constructor(props){
    super(props);
    this.state = {
      livingRoomColor: 'default',
      livingRoomFurniture: '',
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
        livingRoomFurniture: props.selected_furniture,
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
        livingRoomFurniture: '',
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
    const { active_room, colorPicker, furniturePicker, selected_furniture } = this.props;
    const { 
      livingRoomColor, 
      livingRoomFurniture, 
      addMultiples: { 
        couch, bed, chair, table
      } 
    } = this.state;
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
          <div className="col-md-3">
            {
              couch ? <img style={{maxHeight: 100}} className="img-responsive" src="https://i.pinimg.com/originals/cb/65/fb/cb65fb3931a2b1e3cb6b1a8dfbfceb82.jpg" alt="" /> : ''
            }   
          </div>
          <div className="col-md-3">
            {
              bed ? <img style={{maxHeight: 100}} className="img-responsive" src="https://www.svgrepo.com/show/115528/bed.svg" alt="" /> : ''
            }
          </div>
          <div className="col-md-3">
            {
              table ? <img style={{maxHeight: 100}} className="img-responsive" src="https://png.icons8.com/windows/540/table.png" alt="" /> : ''
            }
          </div>
          <div className="col-md-3">
            {
              chair ? <img style={{maxHeight: 100}} className="img-responsive" src="https://png.icons8.com/small/540/sofa.png" alt="" /> : ''
            } 
          </div>
        </div>
        </div>
      </div>
    )
  }

}