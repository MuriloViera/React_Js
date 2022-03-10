import React from 'react'

export default props =>{
	const { min, max } = props;//Isso aqui é o destruct, ele vai destruir o props e fazer o primeiro valor passado ser o min e o segundo ser o max
	const aleatorio = parseInt(Math.random() * (max - min)) + min;

	return (
		<div>
			<h2>Valor Aleatório</h2>
			<p>Valor Mínimo: <strong>{min}</strong></p>
			<p>Valor Máximo: <strong>{max}</strong></p>
			<p>Valor Escolhido: <strong>{aleatorio}</strong></p>
		</div>
	)
}
	