//Nao faz muita diferença o componente ser .js ou .jsx, so ajuda pro compilador setar qual linguagem é

import React from 'react'

export default function Primeiro(){//O export, é para que essa função esteja apta a ser usada em um arquivo React
	const msg = 'Seja Bem Vindo!'

	return (
		<div>{/*Se eu nao envolver eles com uma div, da erro*/}
			<h2>Primeiro Componente</h2>
			<p> {msg} </p>{/*Eu basicamente coloco algo em {} quando eu to usando algo de fora em JS e quero usar no JSX*/}
		</div>
	)
}
