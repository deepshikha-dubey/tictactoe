import React from 'react'


const style = {
	background: "lightblue",
	border: "2px solid darkblue",
	fontSize: "30px",
	fontWeight: "800",
	cursor: "pointer",
	outline: "none",
};

const  Squire = ({value, onClick}) => 
    (
    <div style={style}>
        <button onClick={onClick}>{value}</button>
    </div>
  );




export default Squire
