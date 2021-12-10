import React from 'react';
import {API} from "../../apiFactory";
import News from "../../components/news";
import {Col, Container, Row} from "reactstrap";
import {connect} from "react-redux";
import {removeFromBookmark} from "../../redux/newsBookmark/actions";

class BookmarkList extends React.Component {
  constructor() {
    super();
    this.state = {articles: []};
    this.apiFactory = new API();
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  render() {
    const {articles} = this.props;
    if (articles && articles.length) {

      return <Container>
        <Row>
          {
            articles.map((news, i) => <Col key={i} xs={12} sm={6} md={4} xl={3}>
                <News news={news} index={i}/>
              </Col>
            )
          }
        </Row>
      </Container>
    } else {

      return 'No Bookmark'
    }
  }
}

const mapStateToProps = ({newsBookmark}) => {
  const {articles} = newsBookmark;
  return {articles};
};

export default connect(
  mapStateToProps,
  {
  }
)(BookmarkList);
