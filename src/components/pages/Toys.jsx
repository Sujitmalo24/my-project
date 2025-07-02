import React from "react";
import toy1 from "../../assets/images/toys-img/toy-1.jpg";
import toy2 from "../../assets/images/toys-img/toy-2.jpg";
import toy3 from "../../assets/images/toys-img/toy-3.jpg";
import toy4 from "../../assets/images/toys-img/toy-4.jpg";
import toy5 from "../../assets/images/toys-img/toy-5.jpg";

const toysProducts = [
	{
		name: "Building Blocks",
		img: toy1,
		category: "Educational",
		price: "$19.99",
	},
	{
		name: "Action Figure",
		img: toy2,
		category: "Figures",
		price: "$14.99",
	},
	{
		name: "Doll House",
		img: toy3,
		category: "Pretend Play",
		price: "$39.99",
	},
	{
		name: "Puzzle Set",
		img: toy4,
		category: "Puzzles",
		price: "$9.99",
	},
	{
		name: "Remote Car",
		img: toy5,
		category: "Vehicles",
		price: "$24.99",
	},
];

const categories = [
	{ name: "Educational", color: "from-yellow-400 to-yellow-600" },
	{ name: "Figures", color: "from-blue-400 to-blue-600" },
	{ name: "Pretend Play", color: "from-pink-400 to-pink-600" },
	{ name: "Puzzles", color: "from-green-400 to-green-600" },
	{ name: "Vehicles", color: "from-purple-400 to-purple-600" },
];

const Toys = () => (
	<div className="max-w-7xl mx-auto py-16 px-4">
		<h1 className="text-4xl font-extrabold text-indigo-700 mb-4 tracking-tight">
			Toys
		</h1>
		<p className="text-gray-700 text-lg mb-10">
			Find toys, games, and fun activities for kids of all ages, from
			educational to entertaining.
		</p>

		{/* Category Section */}
		<div className="mb-12">
			<h2 className="text-2xl font-bold text-indigo-600 mb-6">
				Categories
			</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
				{categories.map((cat) => (
					<div
						key={cat.name}
						className={`rounded-xl p-6 text-center text-white font-semibold text-lg shadow-lg bg-gradient-to-br ${cat.color} hover:scale-105 transition-transform cursor-pointer`}
					>
						{cat.name}
					</div>
				))}
			</div>
		</div>

		{/* Product Section */}
		<h2 className="text-2xl font-bold text-indigo-600 mb-6">
			Featured Products
		</h2>
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
			{toysProducts.map((product, idx) => (
				<div
					key={idx}
					className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow flex flex-col"
				>
					<img
						src={product.img}
						alt={product.name}
						className="h-48 w-full object-cover"
					/>
					<div className="p-4 flex-1 flex flex-col justify-between">
						<div>
							<div className="text-sm text-gray-400 mb-1">
								{product.category}
							</div>
							<h3 className="font-bold text-lg text-indigo-700 mb-2">
								{product.name}
							</h3>
						</div>
						<div className="mt-auto text-indigo-600 font-bold text-lg">
							{product.price}
						</div>
						<button
							className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-full font-medium shadow hover:bg-indigo-700 transition"
							onClick={() => {
								const cart = JSON.parse(
									localStorage.getItem("cart")
								) || [];
								cart.push({
									name: product.name,
									image: product.img,
									price: product.price,
									category: product.category,
								});
								localStorage.setItem("cart", JSON.stringify(cart));
								window.location.href = "/cart";
							}}
						>
							Add to Cart
						</button>
					</div>
				</div>
			))}
		</div>
	</div>
);

export default Toys;
