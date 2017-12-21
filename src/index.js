import React, { Component } from 'react';
import { render } from 'react-dom';
import LivingRoom from './components/LivingRoom';
import BedRoom from './components/BedRoom';
import Kitchen from './components/Kitchen';
import ManCave from './components/ManCave';
import { Select, Checkbox } from './common';
import { furniturePicker, colorPicker, colorSelectDropDownValues } from './constants';
import './styles/style.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      message: 'React House',
      room: 'Select a room',
      color: 'Select a color',
      room_color: '',
      active_room: '',            
      color_drop_down_values: [],
      couch_is_checked: false,
      bed_is_checked: false,
      chair_is_checked: false,
      table_is_checked: false,
      desk_is_checked: false,
      tv_is_checked: false,
      fridge_is_checked: false,
      microwave_is_checked: false,
      error: '',
      furniturePicker,
      colorPicker
    };
  };

  componentDidMount(){
    this.setState({ color_drop_down_values: colorSelectDropDownValues });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { room, color } = this.state;

    if(room!=="Select a room" && color!=="Select a color"){
      this.setState({ room_color: color, active_room: room });
    }else{
      this.setState({ error: "Please select a room, a color!" });
    };
  };

  handleReset = (event) => {
    event.preventDefault();
    this.setState({ error: '', room_color: '', active_room: '' });
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
              values={this.state.color_drop_down_values} 
            />
          </div>

        </div>

        <div style={{marginTop: 30}}></div>

        <div className="row">
          <div className="col-md-4 col-md-offset-4 well">
            <h4>Add Furniture</h4>
            <div className="row col-md-6">
              <Checkbox name="Couch" value="couch" onChange={() => this.setState({ couch_is_checked: !this.state.couch_is_checked })} />
              <Checkbox name="Bed" value="bed" onChange={() => this.setState({ bed_is_checked: !this.state.bed_is_checked })} />
              <Checkbox name="Chair" value="chair" onChange={() => this.setState({ chair_is_checked: !this.state.chair_is_checked })} />
              <Checkbox name="Table" value="table" onChange={() => this.setState({ table_is_checked: !this.state.table_is_checked })} />
            </div>
            <div className="row col-md-6">
              <Checkbox name="Desk" value="desk" onChange={() => this.setState({ desk_is_checked: !this.state.desk_is_checked })} />
              <Checkbox name="TV" value="tv" onChange={() => this.setState({ tv_is_checked: !this.state.tv_is_checked })} />
              <Checkbox name="Fridge" value="fridge" onChange={() => this.setState({ fridge_is_checked: !this.state.fridge_is_checked })} />
              <Checkbox name="Microwave" value="microwave" onChange={() => this.setState({ microwave_is_checked: !this.state.microwave_is_checked })} />
            </div>
          </div>
        </div>

        <div style={{marginTop: 30}}></div>

        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <div 
              className="btn btn-block btn-success"
              onClick={this.handleSubmit}
            >
              Apply Selections
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
