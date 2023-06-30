import './cards.css';
import { CardsData } from '../../Data/Data';
import Card from '../Card/Card';

function Cards(props) {
	return (
		<div className='Cards'>
			{CardsData.map((card,index)=>(
				<div className="parentContainer">
					<Card 
						title={card.title}
						color={card.color}
						barValue={card.barValue}
						value={card.value}
						png={card.png}
						series={card.series}
						key={index}
					/>
				</div>
			))}
		</div>
	);
}

export default Cards;