import React from 'react'

import "./Card.css"

export default props =>{

	const cardStyle = {
		backgroundColor: props.color,
		borderColor: props.color,
	}


	return(
		<div className="Card" style={cardStyle}>
			<div className="Title">{props.titulo}</div>
			<div className="Content">
				{props.children}{/*Aqui to pegando o componente que ta dentro do componente card*/}
			</div>
		</div>
	)

}