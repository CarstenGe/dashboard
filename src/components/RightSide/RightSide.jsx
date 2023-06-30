import './rightSide.css';
import Updates from '../Updates/Updates';

function RightSide(props) {
	return (
		<div className='RightSide'>
			<div>
				<h3>Updates</h3>
				<Updates />
			</div>
			<div>
				<h3>Customer review</h3>
			</div>
		</div>
	);
}

export default RightSide;