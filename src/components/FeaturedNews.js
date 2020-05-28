import React, { Component } from "react";
import { MyContext } from "../context";
import { Loading } from "../components";
import NewsListView from "./NewsListView";

export default class FeaturedNews extends Component {
  static contextType = MyContext;
  render() {
    const { featuredNews, loading } = this.context;

    let news = featuredNews.map(news => (
      <NewsListView key={news.id} news={news} />
    ));

    return (
      <section className="featured-news m-5">
        <div className="container">
          <h3>Latest property news</h3>
          {loading ? <Loading /> : <div className="row">{news}</div>}
        </div>
      </section>
    );
  }
}
