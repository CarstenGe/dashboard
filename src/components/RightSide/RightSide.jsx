import './rightSide.css';
import Updates from '../Updates/Updates';
import CustomerReview from '../CustomerReview/CustomerReview';

function RightSide(props) {
	return (
		<div className='RightSide'>
			<div>
				<h3>Updates</h3>
				<Updates />
			</div>
			<div>
				<h3>Customer review</h3>
				<CustomerReview />
			</div>
		</div>
	);
}

export default RightSide;