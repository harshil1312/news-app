import React from 'react';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import ImgNotFound from "../assets/img/img-not-found.png";
import {connect} from "react-redux";
import {addToBookmark, removeFromBookmark} from "../redux/actions";

const News = (props) => {

  const {urlToImage, title, description, author, url} = props.news;
  let isBookmarked = props.articles && props.articles.find(it => it.title === title);

  return <div className={'news-card'}>
    <Card>
      {
        <Button
          className={`bookmark-btn align-items-center justify-content-center ${isBookmarked ? 'active' : ''}`}
          title={isBookmarked ? 'Remove Bookmark' : 'Bookmark'}
          onClick={() => {
            isBookmarked ?
              props.removeFromBookmark(title)
              : props.addToBookmark(props.news);
          }}
        >
          {
            isBookmarked ?
              <span className="material-icons">
              bookmark_added
            </span>
              : <span className="material-icons">
            bookmark_border
            </span>}
        </Button>

      }
      <div className={'img-container'}>
        <CardImg top width="100%" src={urlToImage !== 'null' ? urlToImage : ImgNotFound} alt="Card image cap"/>
      </div>
      <CardBody>
        <CardTitle tag="h5" title={title}>{url ? <a href={url}>{title}</a> : title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">By {author || 'unknown'}</CardSubtitle>
        <CardText title={description}>{description}</CardText>
      </CardBody>
    </Card>
  </div>
}

const mapStateToProps = ({newsBookmark}) => {
  const {articles} = newsBookmark;
  return {articles};
};

export default connect(
  mapStateToProps,
  {
    addToBookmark,
    removeFromBookmark
  }
)(News);


