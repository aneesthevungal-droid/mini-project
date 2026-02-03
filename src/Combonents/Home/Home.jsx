import HomeHed from "./HomeHed";
import './Home.css'
function Home(){
    return(
        <>
        <HomeHed/>
        <Homecondent/>
        </>
    )
}
function Homecondent(){
    return(
        <div className="con-body">
        <div className="co-hed">
            <div>
            <h1>Budget with BUDGETER</h1>
            <p>Track Your Budjet With BUDGETER</p>
            </div>
            <div className="paragraph">
                <p><strong>BUDGETER</strong> is a budget tracker for the modern age. Say no more to carrying paper envelopes. This virtual budget program keeps you on track with family and friends with the time-tested envelope budgeting method.</p>
            </div>
            <div>
                <img src="data:image/jpeg;base64,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" alt="" />

            </div>
            <div className="footer">
                <div>
                    <h2>Budjeting</h2>
                    <h2>That Works</h2>
                </div>
                <div>
                   <h2>Easy To</h2>
                   <h2>Yous</h2>
                </div>
                <div>
                    <h2>Comparing</h2>
                   
                </div>
            </div>
        </div>
        </div>
    )
}


export default Home;