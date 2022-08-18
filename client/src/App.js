import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Layout />
		</div>
	);
}

export default App;
