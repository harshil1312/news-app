import React from 'react';
import {API} from "../../apiFactory";
import News from "../../components/news";
import {Col, Container, Row, Spinner} from "reactstrap";

class NewsList extends React.Component {
  constructor() {
    super();
    this.state = {articles: []};
    this.apiFactory = new API();
  }

  componentDidMount() {
    this.getNewsList();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.type !== prevProps.type) this.getNewsList();
  }

  getNewsList = () => {
    this.setState({articles: []})
    this.apiFactory.getNewsList(this.props.type).then(({data}) => {
      this.setState({articles: data.articles})
    }).catch(e => {
    })
  }

  render() {
    const {articles} = this.state;
    if (articles && articles.length) {

      return <Row>
        {
          articles.map((news, i) => <Col key={i} xs={12} sm={6} md={4} xl={3}>
              <News news={news} index={i}/>
            </Col>
          )
        }
      </Row>
    } else {

      return <Spinner style={{width: '3rem', height: '3rem'}}/>
    }
  }
}

export default NewsList;
