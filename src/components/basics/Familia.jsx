import React, {cloneElement} from 'react'

export default props =>{

	return(

		<div>
			{/*{React.cloneElement(props.children, props)}To clonando o que tem o elemento que tem dentro do componente 
			Familia, e passando pra ele o props que recebi em FamiliaMembro e o props que recebi em Familia*/}

			{
				React.Children.map(props.children, child=>{
					return cloneElement(child,props)
				})
			}
		</div>

		)
}