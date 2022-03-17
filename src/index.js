import React from 'react' //É a biblioteca do react
import ReactDOM from 'react-dom' //É uma extensão para o DOM do JavaScript
import './index.css'//Importanto o arquivo index.css aqui para que ele funcione, pq o index.js ta ligado diretamente com o index.html, e isso é REACT

import Componente1 from './components/basics/Primeiro'
import Componente2 from './components/basics/ComParametro'
import Componente3 from './components/basics/Fragment'
import Componente4 from './components/basics/app'
import Componente5 from './components/basics/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import Componente6 from './components/repeticao/ListaAlunos'
import Componente7 from './components/repeticao/TabelasProdutos'



ReactDOM.render('Olá React!!!',document.getElementById('root')) //render, ele rendezira o que eu colocar aqui, dentro de algum lugar que eu seleciono através do DOM

const tag = <div className="tituloPrincipal">FUNDAMENTOS</div>

/*Eu preciso da biblioteca react, para que ela importe o JSX
 que é o que me possibilita colocar codigos "HTML" dentro do
 render, so que ai eles sao considerados codigos JSX, mas na 
 real sao so codigos HTML dentro de uma tag React*/
ReactDOM.render( 
	<div>{/*SE eu nao envolver os componentes em uma div, se for so 1, ok, se for mais de 1*/}
		
		{ tag }{/*Aqui, eu to usando uma variavel, que possui um elemento HTML, quando eu abro {}, tudo que tiver ali dentro, é codigo JavaScript*/}

		<div className="Cards">
			
			<Card titulo="Card com o Primeiro Componente" color="#008 ">
				<Componente1></Componente1>{/*Aqui eu to chamando o que tem dentro de Primeiro.js, que é a função Primeiro, o componente é chamado como se fosse um elemento HTML*/}
			</Card>

			<Card titulo="Card com Componente Com Parametro" color="#6B5B95">
				<Componente2 titulo="Situação do Aluno" aluno="Pedro" nota="9.3" />{/*Se eu quiser passar nota como um valor e nao como uma string, é so passar {9.3}*/}
				<Componente2 titulo="Situação do Aluno" aluno="Maria" nota={6.8} />{/*Se eu quiser tb, posso definir o componente so do jeito acima, sem abrir e fechar*/}
			</Card>

			<Card titulo="Card com Componente Fragment" color="#88B04B">
				<Componente3/>
			</Card>

			<Card titulo="Card com Componente Enxuto" color="#DD4124">
				<Componente4/>
			</Card>

			<Card titulo="Card com Desafio Aleatorio" color="#009B77">
				<Componente5 min={9.0} max={18}/>
			</Card>

			<Card titulo="Componente com Filhos" color="#955251">
				<Familia sobrenome="Combas">
					<FamiliaMembro nome="Ferdinando"/>
					{/*<FamiliaMembro nome="Matias"/>
					<FamiliaMembro nome="Edubardo"/>*/}
				</Familia>
			</Card>

			<Card titulo="Componente de repetição" color="#F7CAC9">
				<Componente6/>
			</Card>

			<Card titulo="Componente de repetição 2" color="#9B2335">
				<Componente7/>
			</Card>

		</div>
			
	</div>,
	document.getElementById('root')
)

