import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { TransitionGroup, CSSTransition } from "react-transition-group"; // Import animation components

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const fetchMoreData = async () => {
    try {
      // Increment page and fetch the next set of data
      const nextPage = page + 1;
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${nextPage}&pageSize=30`;
      const data = await fetch(url);
      const parsedData = await data.json();

      if (parsedData.articles) {
        // Append new articles to existing ones
        setArticles((prevArticles) => prevArticles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setPage(nextPage); // Update the page state to the next page
      } else {
        alert("No articles found.");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      alert("Failed to fetch news articles. Please check your internet connection.");
    }
  };

  const fetchNews = async () => {
    props.setProgress(10);
    setLoading(true);
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=30`;
      const data = await fetch(url);
      props.setProgress(50);
      const parsedData = await data.json();

      if (parsedData.articles) {
        setArticles(parsedData.articles);
        setLoading(false);
        setTotalResults(parsedData.totalResults);
      } else {
        setLoading(false);
        alert("No articles found.");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      setLoading(false);
      alert("Failed to fetch news articles. Please check your internet connection.");
    }
    props.setProgress(100);
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.category]); // Re-fetch news when category changes

  return (
    <>
      <h1 className="text-center" style={{  margin:'35px 0px',marginTop:'70px' }}>
        News Express - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            <TransitionGroup component={null}>
              {articles.map((element, index) => (
                <CSSTransition
                  key={`${element.url}-${index}`}
                  timeout={500}
                  classNames="fade"
                >
                  <div className="col-md-4">
                    <NewsItems
                      title={element.title ? element.title.slice(0, 71) : ""}
                      description={element.description ? element.description.slice(0, 100) : ""}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  category: PropTypes.string.isRequired,
  pageSize: PropTypes.number,
};

export default News;
