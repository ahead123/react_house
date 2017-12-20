import React, { Component } from 'react';
import { render } from 'react-dom';
import LivingRoom from './LivingRoom';
import BedRoom from './BedRoom';
import Kitchen from './Kitchen';
import ManCave from './ManCave';
import Select from './Select';
import { 
  furniturePicker, 
  colorPicker, 
  colorSelectDropDownValues 
} from './constants';
import './style.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      message: 'React House',
      room: 'Select a room',
      color: 'Select a color',
      room_color: '',
      furniture: 'Select furniture',
      active_room: '',      
      error: '',
      furniturePicker,
      colorPicker,
      colorSelectDropDownValues
    };
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { room, color, furniture } = this.state;
   
    if(room!=="Select a room" && color!=="Select a color"){
     this.setState({
       room_color: color,
       furniture,
       active_room: room       
      });
    }else{
       this.setState({error: "Please select both a room and a color!"});
    }
  };

  handleReset = (event) => {
    event.preventDefault();
    this.setState({
      error: '',
      room_color: '',
      active_room: ''
    });
  };


  render() {
    console.log('state inside parent',this.state);
    return (
      <div className="container">

        <div className="row">
          <h4 className="text-center text-danger"><strong>{this.state.error}</strong></h4>
        </div>

        <div className="row">
          <div className="page-header">
            <h3 className="text-center">{this.state.message}</h3>
          </div>
        </div>

        <div style={{marginTop: 15}}></div>

        <div className="row">
          <div className="col-sm-3 styled-select blue rounded">
            <Select 
              onChange={event => this.setState({ room: event.target.value, error: '' })} 
              values={["Select a room","Living Room","Bed Room","Kitchen","Man Cave"]} 
            />
          </div>

          <div className="col-sm-3 styled-select blue rounded">
            <Select 
              onChange={event => this.setState({ color: event.target.value, error: '' })} 
              values={this.state.colorSelectDropDownValues} 
            />
          </div>

          <div className="col-sm-3 styled-select blue rounded">
            <Select 
              onChange={event => this.setState({ furniture: event.target.value, error: '' })} 
              values={["Select furniture","chair","couch","bed","table"]} 
            />
          </div>

        </div>

        <div style={{marginTop: 30}}></div>

        <div style={{marginTop: 30}}></div>

        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <div 
              className="btn btn-block btn-success"
              onClick={this.handleSubmit}
            >
              Apply Color / Update Room Selection
            </div>
          </div>
        </div>
        

        <div style={{marginTop: 30}}></div>

        <div className="row">
          <div className="col-md-12 text-center">
            <LivingRoom {...this.state} />
            <BedRoom {...this.state} />
            <Kitchen {...this.state} />
            <ManCave {...this.state} />
          </div>
        </div>

        <div style={{marginTop: 30}}></div>

        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <div 
              className="btn btn-block btn-danger"
              onClick={this.handleReset}
            >
              Clear Room Selection
            </div>
          </div>
        </div>

        <div style={{marginTop: 30}}></div>

      </div>
    );
  }
}

render(<App />, document.getElementById('house'));
