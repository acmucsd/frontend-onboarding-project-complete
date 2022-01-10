import React from 'react'
import ItemCard from '../../components/ItemCard'
import Navbar from '../../components/Navbar'
import './style.less'

const items = [
	{
		name: "TShirt",
		uuid: "slkdfjds-32492-dsf-132",
		price: 3.40,
		description: "like its a tshirt. what description do you need?"
	},
	{
		name: "TShirt",
		uuid: "slkdfjds-32492-dsf-132",
		price: 3.40,
		description: "like its a tshirt. what description do you need?"
	},
	{
		name: "TShirt",
		uuid: "slkdfjds-32492-dsf-132",
		price: 3.40,
		description: "like its a tshirt. what description do you need?"
	},
	{
		name: "TShirt",
		uuid: "slkdfjds-32492-dsf-132",
		price: 3.40,
		description: "like its a tshirt. what description do you need?"
	},
	{
		name: "TShirt",
		uuid: "slkdfjds-32492-dsf-132",
		price: 3.40,
		description: "like its a tshirt. what description do you need?"
	},
]

const Home: React.FC = () => {
	return (
		<>
			<Navbar loggedIn />
			<div className='items'>
				{items.map((item) => (
					<ItemCard key={item.uuid} {...item} />
				))}
			</div>
		</>
	)
}

export default Home