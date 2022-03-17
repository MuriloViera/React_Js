import React from 'react'
import alunos from  '../../data/alunos'

export default props =>{

	/*const li1 = ( //Se a variavel tiver mais que 1 linha, tem que por o (), se nao so escrever como uma variavel qualquer
		<li>
			{alunos[0].id} - {alunos[0].nome} -> {alunos[0].nota} 
		</li>
		);*/

	const alunosLI = alunos.map((aluno) => { //O map ele mapeando, recebendo varios, e vai passando ele pro atributo que eu coloquei dentro dos (), nesse caso aluno
		return (
			<li key={aluno.id}> {/*Eu por key, faz com que ele nao deixe nenhum id se repetir*/}
				{aluno.id}	- {aluno.nome} -> {aluno.nota}
			</li>

		);
	});

	return (

		<div>
			<ul style={{listStyle: "none"}}>
				{alunosLI}
			</ul>
		</div>


		)
}