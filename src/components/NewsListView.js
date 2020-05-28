import React from "react";

const NewsListView = ({ news }) => {
  return (
    <div className="news-list-view text-left">
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col-8 p-4">
          <strong className="d-inline-block mb-2">{news.postDate}</strong>
          <h4>{news.heading}</h4>
          <p className="author-name text-muted">{news.user}</p>
          <p className="card-text mb-2">{news.description}</p>
          <a href="#" className="stretched-link">
            Continue Reading
          </a>
        </div>
        <div className="news-post-img col-4">
          <img src={news.images[0]} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewsListView;
