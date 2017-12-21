import React from 'react';

const Select = ({ onChange, values }) => {
	return(
		<select onChange={onChange}>
			{
				values.map((val, index) => {
           if(val.value){
             return <option value={val.value} key={index}>{val.name}</option>
           }else{
             return <option value={val} key={index}>{val}</option>
           }
				})
			}
		</select>
	)
}

export { Select }