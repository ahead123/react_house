import React, { Component } from 'react';
import { render } from 'react-dom';
import LivingRoom from './LivingRoom';
import BedRoom from './BedRoom';
import Kitchen from './Kitchen';
import ManCave from './ManCave';
import './style.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      message: 'React House',
      room: 'Select a room',
      color: 'Select a color',
      room_color: '',
      active_room: '',      
      error: ''
    };
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { room, color } = this.state
   
    if(room!="Select a room" && color!="Select a color"){
     this.setState({
       room_color: this.state.color,
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
          <div className="col-sm-3 col-sm-offset-2 styled-select blue rounded">
            <select 
              onChange={event => this.setState({ room: event.target.value, error: '' })}
            >
              <option value="Select a room">Select a room</option>
              <option value="Living Room">Living Room</option>
              <option value="Bed Room">Bed Room</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Man Cave">Man Cave</option>
            </select>
          </div>

          <div className="col-sm-3 col-sm-offset-2 styled-select blue rounded">
            <select onChange={event => this.setState({ color: event.target.value, error: '' })}>
              <option value="Select a color">Select a color</option>
              <option value="warning">Yellow</option>
              <option value="primary">Blue</option>
              <option value="success">Green</option>
              <option value="danger">Red</option>
            </select>
          </div>

        </div>

        <div style={{marginTop: 30}}></div>

        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <div 
              className="btn btn-block btn-success"
              onClick={this.handleSubmit}
            >
              Update Room
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
