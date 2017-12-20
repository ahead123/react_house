import React, { Component } from 'react';

export default class Kitchen extends Component {

  constructor(props){
    super(props);
    this.state = {
      kitchenColor: 'default',
      kitchenFurniture: ''
    };
  }

  componentWillReceiveProps(props){
    if(props.active_room==="Kitchen"){
      this.setState({ 
        kitchenColor: props.room_color,
        kitchenFurniture: props.selected_furniture
      });
    }else{
      this.setState({ 
        kitchenColor: 'default', 
        kitchenFurniture: '' 
      });
    }
  }

  render(){
    const { active_room, selected_furniture, colorPicker, furniturePicker } = this.props;
    const { kitchenColor, kitchenFurniture } = this.state;
    const styles = {
      kitchenStyles: {
        minHeight: 200,
        backgroundColor: active_room === "Kitchen" ? colorPicker(kitchenColor) : ''
      },
      imageStyles: {
        imageURL: active_room === "Kitchen" ? furniturePicker(selected_furniture) : '',
        maxHeight: 100
      }
    };

    return(
      <div className="col-md-3 col-sm-6 col-lg-6">
        <div className={`panel panel-${kitchenColor}`}>
        <div className="panel-heading">
          Kitchen
        </div>
        <div className="panel-body" style={styles.kitchenStyles}>
          <h4 style={{color: 'white'}}>
          {
            active_room === "Kitchen" && kitchenFurniture !== 'Select furniture' && kitchenFurniture !== '' ? `${kitchenFurniture} added!` : ''
          }
          </h4>
          <div>
            {
              kitchenFurniture !== '' ? <img className="img-responsive" src={styles.imageStyles.imageURL} style={styles.imageStyles} alt="" /> : ''
            }
          </div>
        </div>
        </div>
      </div>
    )
  }

}