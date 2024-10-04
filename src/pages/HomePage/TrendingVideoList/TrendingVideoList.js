// class component
import  {Component} from "react";
class TrendingVideoList extends Component {

    //state is a place to hold comp-wide data
    //state is object

// state is a keyword in react
state={
videoResolution:'4k',
videos: [
    {
      id: 1,
      trendingRank: 1,
      title: 'Man Vs Wild',
      thumbnailUrl: 'https://placehold.co/260x220',
      desc: 'A Wild Adventure show in Discovery Channel',
      views: '700K',
      publishedOn: '1 week ago'
    },
    {
      id: 2,
      trendingRank: 2,
      title: 'Planet Earth II',
      thumbnailUrl: 'https://placehold.co/260x220',
      desc: 'A show by David Attenborough on BBC Earth Channel',
      views: '900K',
      publishedOn: '2 weeks ago'
    }
  ],
};

handleChangeResolution = () =>{
    this.setState({
        videoResolution: '8k'
    })

}
    //must have render method
    render(){
        return (
        
    
    <div className="row">
        <p>Enjoy watching the videos {this.state.videoResolution}Resolution

{" "}
        <button 
        type="button" 
        className="btn btn-primary btn-sm"
        onClick={this.handleChangeResolution}>
            change Resolution
        </button>
        </p>
<div className="col-md-4">
   <div className="card">
            <img src={this.state.videos[0].thumbnailUrl}
            className="card-img-top" alt= {this.state.videos[0].title}/>
            <div className="card-body">
                <h5 className="card-title">
                    #{this.state.videos[0].trendingRank} {" "}
                    {this.state.videos[0].title}
                    </h5>
                <p className="card-text">{this.state.videos[0].desc}</p>
                <div className="card">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{this.state.videos[0].views}</li>
                        <li className="list-group-item">{this.state.videos[0].title}</li>
                    </ul>
                </div>
        </div>

</div>

</div>


<div className="col-md-4">
   <div className="card">
            <img src={this.state.videos[0].thumbnailUrl}
            className="card-img-top" alt= {this.state.videos[0].title}/>
            <div className="card-body">
                <h5 className="card-title">
                    #{this.state.videos[0].trendingRank} {" "}
                    {this.state.videos[0].title}
                    </h5>
                <p className="card-text">{this.state.videos[0].desc}</p>
                <div className="card">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{this.state.videos[0].views}</li>
                        <li className="list-group-item">{this.state.videos[0].title}</li>
                    </ul>
                </div>
        </div>

</div>

</div>


<div className="col-md-4">
   <div className="card">
            <img src={this.state.videos[0].thumbnailUrl}
            className="card-img-top" alt= {this.state.videos[0].title}/>
            <div className="card-body">
                <h5 className="card-title">
                    #{this.state.videos[0].trendingRank} {" "}
                    {this.state.videos[0].title}
                    </h5>
                <p className="card-text">{this.state.videos[0].desc}</p>
                <div className="card">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{this.state.videos[0].views}</li>
                        <li className="list-group-item">{this.state.videos[0].title}</li>
                    </ul>
                </div>
        </div>

</div>

</div>
</div>
);
}
}

export default TrendingVideoList;

