import Cards from '../Cards/Cards';
import Table from '../Table/Table';
import './mainDash.css';

function MainDash(props) {
	return (
		<div className='MainDash'>
			<h1>Dashboard</h1>
			<Cards />
			<Table />
		</div>
	);
}

export default MainDash;