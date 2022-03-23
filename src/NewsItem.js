
import React from 'react'


const NewsItem =(props)=> {
    
        let { title, description, Imgurl, newsUrl, author, date, source } = props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>


                        <span className="badge rounded-pill bg-danger" >{source}
                        </span>
                    </div>
                    <img src={!Imgurl ? "https://images.news18.com/ibnlive/uploads/2021/12/giant-planet-163910153216x9.png" : Imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
