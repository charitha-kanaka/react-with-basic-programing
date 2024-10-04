
//Fn comp with arrow fn
//rafce

import LatestVideo from "./LatestVideo/LatestVideo";
import RecommendedVideoList from "./RecommendedVideoList/RecomendedVideoList";
import TrendingVideoList from "./TrendingVideoList/TrendingVideoList";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to homepage</h1>
            <div className="row mb-3">
                <h2>Latest video | props demo</h2>
                <div className="col-md-4">
                    <LatestVideo title='Arg vs Fra FIFA 2022 Final'
                    thumbnail="https://placehold.co/280x200/EEE/31343C"
                    views="2M"
                    publishedOn="2 months"
                    >
                    watch the highest from the match between 
                    Argentina and france played in qatar on sunday 
                    18 december 2022
                    </LatestVideo>
                </div>

                <div className="col-md-4">
                    <LatestVideo title='IND vs Pakistan'
                    thumbnail="https://placehold.co/280x200/EEE/31343C"
                    views="2M"
                    publishedOn="2 months"
                    >
                    watch the highest from the match between 
                    Argentina and france played in qatar on sunday 
                    18 december 2022
                    </LatestVideo>
                </div>


                <div className="col-md-4">
                    <LatestVideo title='Austrelia vs india'
                    thumbnail="https://placehold.co/280x200/EEE/31343C"
                    views="2M"
                    publishedOn="6 months"
                    >
                    watch the highest from the match between 
                    Argentina and france played in qatar on sunday 
                    18 december 2022
                    </LatestVideo>
                </div>
                
            </div>
            <div className="row mb-3">
                <h2>
                  Trending Videos| Class Component, States and Events Demo
                </h2>
            <TrendingVideoList />

            </div>

            <div className="mb-3">
                <h2>
                  Recommended Videos| Class Component, States and Events List & keys and Conditionals Demo
                </h2>
            <RecommendedVideoList />

            </div>
            
        </div>
    );
}
export default HomePage;