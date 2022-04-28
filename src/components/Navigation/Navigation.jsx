import { Link } from 'react-router-dom';
import './Navigation.scss';
import logo from '../../assets/logo.png';

export default function Navigation() {
	return (
		<div className='menu-container'>
			<nav>
				<img src={logo}></img>
				<Link to='/'>Home</Link>
				<Link to='/add'>Add Post</Link>
			</nav>
		</div>
	);
}
