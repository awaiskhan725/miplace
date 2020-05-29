import React from "react";
import styled from "styled-components";

const FeaturedNewsImage = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.image}) center/cover no-repeat;
`;

const NewsListView = ({ news }) => {
  return (
    <div className="news-list-view text-left mb-4 shadow-sm border rounded">
      <div className="row no-gutters overflow-hidden flex-md-row position-relative">
        <div className="col-8 p-4 overflow-hidden">
          <strong className="d-inline-block mb-2">{news.postDate}</strong>
          <h4>{news.heading}</h4>
          <p className="author-name text-muted">{news.user}</p>
          <p className="card-text mb-2">{news.description}</p>
          <a href="#" className="stretched-link">
            Continue Reading
          </a>
        </div>
        <div className="news-post-img col-4">
          <FeaturedNewsImage image={news.images[0]} />
        </div>
      </div>
    </div>
  );
};

export default NewsListView;
