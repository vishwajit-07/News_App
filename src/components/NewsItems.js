import React from "react";

const NewsItems=(props)=>{
    let { title, description, imageUrl, newsUrl, date, author, source } = props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            alt="..."
            src={
              !imageUrl || imageUrl.endsWith(".webp")
                ? "https://th.bing.com/th/id/R.5e02f51966bce6d1ba4ac1bb86b812da?rik=9GwFZ%2bACwPM93g&riu=http%3a%2f%2fwww.herdofcats.ca%2ffiles%2fimages%2fno+news.jpg&ehk=bVC947muaBRoqYRsdMGe%2bhqef%2fy15OtNuKgJBUdvFz8%3d&risl=&pid=ImgRaw&r=0"
                : imageUrl
            }
            className="card-img-top"
          />

          <div className="card-body">
            <h5 className="card-title">{title}<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ left:'90%',zIndex:1 }}>{source}</span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} <br /> {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">
              Read more...
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItems;
