// import Heart from "./Heart";
import CandyColoredHeart from "./CandyColoredHeart";

const messages = ["cool cud", "me my <3", "you are bear", "team bear", "time hug", "fang", "bog love", "me have love", "all hover", "sweat poo", "u hack", "stank love", "heart me", "wink bear", "bear bear", "be my bear", "yank o way", "mage love", "oy", "in a fan"];

const HeartList = (props) => {
    return (
        <div className="hearts-container">
            {/* Implicit return in JSX ()  - Explicit has curly braces, return, and semicolon*/}
            {messages.map((message, index) => (
                // <Heart key={index} msg={message} />
                <CandyColoredHeart key={index} msg={message} />
            ))}
        </div>
    );
};

export default HeartList;
