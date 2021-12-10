import React from 'react';
import {API} from "../../apiFactory";
import News from "../../components/news";
import {Col, Container, Row, Spinner} from "reactstrap";
import {connect} from "react-redux";

class BookmarkList extends React.Component {
  constructor() {
    super();
    this.state = {articles: []};
    this.apiFactory = new API();
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

      return <Spinner style={{width: '3rem', height: '3rem'}}/>
    }
  }
}

const mapStateToProps = ({newsBookmark}) => {
  const {articles} = newsBookmark;
  return {articles};
};

export default connect(
  mapStateToProps,
  {}
)(BookmarkList);
