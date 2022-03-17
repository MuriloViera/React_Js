import React from 'react';
import produtos from '../../data/produtos.js';
import './TabelaProdutos.css'

export default props =>{

	function getLinhas(){
		return produtos.map(produto =>{//Com o map, vou percorrer o array produto, e pra cada vez que eu percorrer 1 eu entro aqui
			return(
				<tr key={produto.id} className={produto.id % 2 == 0 ? 'Par' : 'Impar'}>
					<td>{produto.id}</td>
					<td>{produto.nome}</td>
					<td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>{/*O toFixed serve pra ele mostrar so duas casas decimais depois da virgula*/}
				</tr>
			)
		})
	}


	return(//Lembrando que o return tem que abrir () se eu for retornar algo maior que 1 linha

			<div className='TabelaProdutos'>
				<table>
					<thead>{/*Thead e Tbody sao so pra organização*/}
						<tr>
							<th>Id</th>
							<th>Nome</th>
							<th>Preço</th>
						</tr>
					</thead>
					<tbody>
						{getLinhas()}
					</tbody>
				</table>
			</div>

		)


}