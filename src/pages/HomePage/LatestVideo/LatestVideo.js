import React from 'react'

const LatestVideo = (props) => {
    //you can receive the data from parent comp via props
    //props are objects
    //props are read only
    return (
        <div className="card">
            <img src={props.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                    {props.children}
                    </p>
                    </div>
                
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{props.views}</li>
                        <li className="list-group-item">{props.publishedOn}</li>
                    </ul>
                </div>
    );
};

export default LatestVideo