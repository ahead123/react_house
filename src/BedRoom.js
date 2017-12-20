import React, { Component } from 'react';

export default class BedRoom extends Component {

  constructor(props){
    super(props);
    this.state = {
      bedRoomColor: 'default',
      bedRoomFurniture: '',
      addMultiples: {
        couch: false,
        chair: false,
        table: false,
        bed: false
      }
    };
  }

  componentWillReceiveProps(props){
    if(props.active_room==="Bed Room"){
      this.setState({ 
        bedRoomColor: props.room_color,
        bedRoomFurniture: props.selected_furniture,
        addMultiples: {
          couch: props.couch_is_checked,
          chair: props.chair_is_checked,
          table: props.table_is_checked,
          bed: props.bed_is_checked
        }
      });
    }else{
      this.setState({ 
        bedRoomColor: 'default', 
        bedRoomFurniture: '',
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
    console.log('state in bedroom', this.state)
    const { active_room, selected_furniture, colorPicker, furniturePicker } = this.props;
    const { 
      bedRoomColor, 
      bedRoomFurniture, 
      addMultiples: { couch, bed, chair, table } 
    } = this.state;
    const styles = {
      bedRoomStyles: {
        minHeight: 200,
        backgroundColor: active_room === "Bed Room" ? colorPicker(bedRoomColor) : ''
      },
      imageStyles: {
        imageURL: active_room === "Bed Room" ? furniturePicker(selected_furniture) : '',
        maxHeight: 40
      }
    };

    return(
      <div className="col-md-3 col-sm-6 col-lg-6">
        <div className={`panel panel-${bedRoomColor}`} style={styles.bedRoomStyles}>
        <div className="panel-heading">
          Bed Room
        </div>
        <div className="panel-body" style={styles.bedRoomStyles}>
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