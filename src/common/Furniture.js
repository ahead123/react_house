import React from 'react';

const Furniture = ({ couch, bed, chair, table, furniturePicker }) => {
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

