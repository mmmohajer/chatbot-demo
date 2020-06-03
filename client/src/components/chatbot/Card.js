import React from 'react';

const Card = (props) => (
	<div style = {{float: "left", width: 270, paddingRight: 30}}>
		<div className="card">
	        <div className="card-image" style = {{width: 240}}>
	          <img src = {props.payload.fields.image.stringValue} alt = {props.payload.fields.header.stringValue}/>
	          <span className="card-title">{props.payload.fields.header.stringValue}</span>
	        </div>
	        <div className="card-content">
	          <p>{props.payload.fields.description.stringValue}</p>
	        </div>
	        <div className="card-action">
	          <a target = "_blank" rel = "noopener noreferrer" href = {props.payload.fields.link.stringValue}>See the project</a>
	        </div>
      </div>
	</div>
);

export default Card;