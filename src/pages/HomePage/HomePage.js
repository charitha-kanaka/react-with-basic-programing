
//Fn comp with arrow fn
//rafce

import LatestVideo from "./LatestVideo/LatestVideo";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to homepage</h1>
            <div className="row">
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
        </div>
    );
}
export default HomePage;