import {
	DirectoryContainer,
	BackgroundImage,
	Body,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
	const { imageUrl, title } = category;
	return (
		<DirectoryContainer>
			<BackgroundImage imageUrl={imageUrl}></BackgroundImage>
			<Body to={`shop/${title}`}>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</Body>
		</DirectoryContainer>
	);
};

export default DirectoryItem;
