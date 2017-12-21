import React from 'react';

const Checkbox = ({ onChange, value, name }) => {
	return(
		<div className="checkbox">
		  <label>
		    <input type="checkbox" value={value} onChange={onChange} />
		      { name }
		  </label>
		</div>
	)
}

export { Checkbox }