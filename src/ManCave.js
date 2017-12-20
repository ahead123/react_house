import React, { Component } from 'react';

export default class ManCave extends Component {

  constructor(props){
    super(props);
    this.state = {
      manCaveColor: 'default',
      manCaveFurniture: ''
    };
  }

  componentWillReceiveProps(props){
    if(props.active_room==="Man Cave"){
      this.setState({ 
        manCaveColor: props.room_color,
        manCaveFurniture: props.selected_furniture
      });
    }else{
      this.setState({ 
        manCaveColor: 'default', 
        manCaveFurniture: '' 
      });
    }
  }

  render(){    
    const { active_room, selected_furniture, colorPicker, furniturePicker } = this.props;
    const { manCaveColor, manCaveFurniture } = this.state;
    const styles = {
      manCaveStyles: {
        minHeight: 200,
        backgroundColor: active_room === "Man Cave" ? colorPicker(manCaveColor) : ''
      },
      imageStyles: {
        imageURL: active_room === "Man Cave" ? furniturePicker(selected_furniture) : '',
        maxHeight: 100
      }
    };

    return(
      <div className="col-md-3 col-sm-6 col-lg-6">
        <div className={`panel panel-${manCaveColor}`}>
        <div className="panel-heading">
          Man Cave
        </div>
        <div className="panel-body" style={styles.manCaveStyles}>
          <h4 style={{color: 'white'}}>
          {
            active_room === "Man Cave" && manCaveFurniture !== 'Select furniture' && manCaveFurniture !== '' ? `${manCaveFurniture} added!` : ''
          }
          </h4>
          <div>
            {
              manCaveFurniture !== '' ? <img className="img-responsive" src={styles.imageStyles.imageURL} style={styles.imageStyles} alt="" /> : ''
            }
          </div>
        </div>
        </div>
      </div>
    )
  }

}