import React from 'react' //É a biblioteca do react
import ReactDOM from 'react-dom' //É uma extensão para o DOM do JavaScript
import './index.css'//Importanto o arquivo index.css aqui para que ele funcione, pq o index.js ta ligado diretamente com o index.html, e isso é REACT

import Componente1 from './components/basics/Primeiro'
import Componente2 from './components/basics/ComParametro'
import Componente3 from './components/basics/Fragment'
import Componente4 from './app'
import Componente5 from './components/basics/Aleatorio'



ReactDOM.render('Olá React!!!',document.getElementById('root')) //render, ele rendezira o que eu colocar aqui, dentro de algum lugar que eu seleciono através do DOM

const tag = <strong>Olá React!!</strong>

/*Eu preciso da biblioteca react, para que ela importe o JSX
 que é o que me possibilita colocar codigos "HTML" dentro do
 render, so que ai eles sao considerados codigos JSX, mas na 
 real sao so codigos HTML dentro de uma tag React*/
ReactDOM.render(
	<div>{/*SE eu nao envolver os componentes em uma div, se for so 1, ok, se for mais de 1*/}
		{ tag }{/*Aqui, eu to usando uma variavel, que possui um elemento HTML*/}
		<Componente1></Componente1>{/*Aqui eu to chamando o que tem dentro de Primeiro.js, que é a função Primeiro, o componente é chamado como se fosse um elemento HTML*/}
		<Componente2 titulo="Situação do Aluno" aluno="Pedro" nota="9.3" />{/*Se eu quiser passar nota como um valor e nao como uma string, é so passar {9.3}*/}
		<Componente2 titulo="Situação do Aluno" aluno="Maria" nota={6.8} />{/*Se eu quiser tb, posso definir o componente so do jeito acima, sem abrir e fechar*/}
		<Componente3/>
		<Componente4/>
		<Componente5 min={9.0} max={18}/>
	</div>,
	document.getElementById('root')
)

