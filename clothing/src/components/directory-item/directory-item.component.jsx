import { 
  BackgroundImage, 
  Body, 
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    const imageurl = imageUrl;
    return (
        <DirectoryItemContainer>
          <BackgroundImage imageurl={imageurl} />
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;