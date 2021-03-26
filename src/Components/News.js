import React, { Component } from 'react';
import axios from "axios";
import CardNews from "./CardNews"
class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
    }
  }
  componentDidMount() {
    axios.get(
      "http://newsapi.org/v2/everything?q=bitcoin&apiKey=966865887cbf40099e1320b60c682e88"
    )
      .then(response => {
        this.setState({ info: response.data.articles });
        console.log(this.state.info)
      }
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }
  render() {
    return (
      <div id="news">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-8-md">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {this.state.info.map((article, i) =>
                <CardNews
                  key={i}
                  img={article.urlToImage}
                  title={article.title}
                  url={article.url}
                  date={article.publishedAt}
                  description={article.description}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default News;
