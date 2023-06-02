import Carousel from './Carousel';
import HoverTitle from './HoverTitle';
import '../styles/CategoryList.css'


const CategoryList = ({ categories }) => {
	return (
		<div>
			<ul className="category-list">
				{categories.map((category, index) => (
					<li key={index} className="list-element">
						<div className="category-title">
							<HoverTitle text1={category.title} text2="Tout explorer" />
						</div>
						<Carousel images={category.images} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default CategoryList;