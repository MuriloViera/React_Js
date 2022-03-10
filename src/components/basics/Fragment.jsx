import React from 'react'

export default function Fragmento(props){
	return(
		<React.Fragment>{/*Usar o React.Fragment substitui a div pra nao dar aquele erro de ter elementos nao envolvidos*/}
			<h2>Fragmento</h2>
			<p>Cuidado com esse erro</p>
		</React.Fragment>

		/*OU, assim tb funfa para nao dar erro
		<>
			<h2>Fragmento</h2>
			<p>Cuidado com esse erro</p>
		</>
		*/
	)
}