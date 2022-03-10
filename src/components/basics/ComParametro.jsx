import React from 'react'

export default function ComParametro(props){//O props é os parametros, la no index.js, quando eu chamo o componente, eu passo o nome do parametro, e o que vai ter nele, e aqui o "props" recebe eles
	
	const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'

	return(
		<div>
			<h2>{ props.titulo }</h2>
			<h3>
				<strong> { props.aluno } </strong>
				 tem nota 
				<strong> { props.nota } </strong>
				e foi
				<strong> { status }</strong>
			</h3>
		</div>
	) 
}