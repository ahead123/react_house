import React from 'react';

const Furniture = ({ couch, bed, chair, table, desk, tv, fridge, microwave, furniturePicker }) => {
	return(
		<div>
			<div className="col-md-3">
	      {
	        couch ? <img style={imageStyles} className="img-responsive" src={furniturePicker('couch')} alt="" /> : ''
	      }   
	    </div>
	    <div className="col-md-3">
	      {
	        bed ? <img style={imageStyles} className="img-responsive" src={furniturePicker('bed')} alt="" /> : ''
	      }
	    </div>
	    <div className="col-md-3">
	      {
	        table ? <img style={imageStyles} className="img-responsive" src={furniturePicker('table')} alt="" /> : ''
	      }
	    </div>
	    <div className="col-md-3">
	      {
	        chair ? <img style={imageStyles} className="img-responsive" src={furniturePicker('chair')} alt="" /> : ''
	      } 
	    </div>
	    <div className="col-md-3">
	      {
	        desk ? <img style={imageStyles} className="img-responsive" src={furniturePicker('desk')} alt="" /> : ''
	      }   
	    </div>
	    <div className="col-md-3">
	      {
	        tv ? <img style={imageStyles} className="img-responsive" src={furniturePicker('tv')} alt="" /> : ''
	      }
	    </div>
	    <div className="col-md-3">
	      {
	        fridge ? <img style={imageStyles} className="img-responsive" src={furniturePicker('fridge')} alt="" /> : ''
	      }
	    </div>
	    <div className="col-md-3">
	      {
	        microwave ? <img style={imageStyles} className="img-responsive" src={furniturePicker('microwave')} alt="" /> : ''
	      } 
	    </div>

		</div>
	)
}

const styles = {
	imageStyles: {        
	  maxHeight: 100
	}
};

const { imageStyles } = styles;


export { Furniture }

