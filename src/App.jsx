import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Provider } from 'react-redux';
import AddDocument from './pages/AddDocument/AddDocument';
import Navigation from './components/Navigation/Navigation';
import ViewDocument from './pages/ViewDocument/ViewDocument';
import DocumentListing from './pages/DocumentListing/DocumentListing';
import configureStore from '../src/store';

function App() {
	return (
		<div className='App'>
			<Provider store={configureStore()}>
				<Router>
					<Navigation></Navigation>
					<Routes>
						<Route exact path='/' element={<DocumentListing />}></Route>
						<Route path='/add' element={<AddDocument />}></Route>
						<Route path='/document/:id' element={<ViewDocument />}></Route>
					</Routes>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
