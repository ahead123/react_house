import React, { Component } from 'react';
import { render } from 'react-dom';
import LivingRoom from './components/LivingRoom';
import BedRoom from './components/BedRoom';
import Kitchen from './components/Kitchen';
import ManCave from './components/ManCave';
import { Select } from './common';
import { 
  furniturePicker, 
  colorPicker, 
  colorSelectDropDownValues 
} from './constants';
import './styles/style.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      message: 'React House',
      room: 'Select a room',
      color: 'Select a color',
      room_color: '',
      furniture: 'Select furniture',
      selected_furniture: '',
      active_room: '',            
      color_drop_down_values: [],
      couch_is_checked: false,
      bed_is_checked: false,
      chair_is_checked: false,
      table_is_checked: false,
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

    const { room, color, furniture } = this.state;
   
    if(room!=="Select a room" && color!=="Select a color"){
      this.setState({
        room_color: color,
        selected_furniture: furniture,
        active_room: room    
       });
    }else{
      this.setState({
        error: "Please select a room, a color, and furnture!"
      });
    };

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
              values={this.state.color_drop_down_values} 
            />
          </div>

        </div>

        <div style={{marginTop: 30}}></div>

        <div className="row">
          <div className="col-md-4 col-md-offset-4 well">
           <h4>Add Furniture</h4>
            <div className="checkbox">
              <label>
                <input 
                  type="checkbox" 
                  value="couch" 
                  onChange={() => this.setState({couch_is_checked:!this.state.couch_is_checked})} 
                />
               Couch
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="bed" onChange={() => this.setState({bed_is_checked:!this.state.bed_is_checked})} />
                  Bed
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="chair" onChange={() => this.setState({chair_is_checked:!this.state.chair_is_checked})} />
                  Chair
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="table" onChange={() => this.setState({table_is_checked:!this.state.table_is_checked})} />
                  Table
              </label>
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
