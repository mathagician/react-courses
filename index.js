/*

	ReactDOM.render(<h1>Hello </h1>, document.getElementById("root"))

*/

const navbar = (
	<nav>
		<h1>Restro</h1>
		<ul>
			<li>Mango Juice</li>
			<li>Apple Juice</li>
		</ul>
	</nav>
)


const root = document.getElementById("root")
ReactDOM.render(navbar, root)