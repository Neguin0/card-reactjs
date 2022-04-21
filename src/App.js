import "./styles.css";
import Card from "./components/Card"

export default function App() {
	return (
		<div className="App">
			<Card
				img="https://cdn.discordapp.com/avatars/474649614348189697/4d139f29bbfd1123d3dd808a9966c5ae.png?size=2048"
				title="Neguin"
				details="Do proident tempor velit nostrud exercitation consectetur reprehenderit deserunt magna do sint cillum. Officia officia laborum ullamco dolore nulla et elit amet culpa id id of"
				/>
			<Card
				img="https://avatars.githubusercontent.com/u/64214553?v=40"
				title="Eriton"
				details="Do proident tempor velit nostrud exercitation consectetur reprehenderit deserunt magna do sint cillum. Officia officia laborum ullamco dolore nulla et elit amet culpa id id of"
				/>
			<Card
				img="https://static.dicionariodesimbolos.com.br/upload/77/50/veado-3_xl.jpeg"
				title="Fillipe"
				details="Do proident tempor velit nostrud exercitation consectetur reprehenderit deserunt magna do sint cillum. Officia officia laborum ullamco dolore nulla et elit amet culpa id id of"
				/>
		</div>
	);
}