import React, { Component } from 'react';

export default class ManCave extends Component {

  constructor(props){
    super(props);
    this.state = {
      manCaveColor: 'default',
      activeBackground: '',
      colorPalette : {
        'success': '#27ae60',
        'primary': '#2980b9',
        'warning': '#f1c40f',
        'danger': '#c0392b'
      }
    };
  }

  componentWillReceiveProps(props){
    if(props.active_room=="Man Cave"){
      this.setState({ manCaveColor: props.room_color })
    }else{
      this.setState({ manCaveColor: 'default' })
    }
  }

  render(){
    const { active_room } = this.props;
    const { colorPalette, manCaveColor } = this.state;
    const styles = {
      manCaveStyles: {
        minHeight: 150,
        backgroundColor: active_room == "Man Cave" ? colorPalette[manCaveColor] : ''
      }
    };

    return(
      <div className="col-md-3 col-sm-6 col-lg-6">
        <div className={`panel panel-${this.state.manCaveColor}`}>
        <div className="panel-heading">
           Man Cave
        </div>
        <div className="panel-body" style={styles.manCaveStyles}>
          
        </div>
        </div>
      </div>
    )
  }

}