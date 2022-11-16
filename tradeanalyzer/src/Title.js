import './App.css';

const Description = () => {
    const textStyle = {
        color: 'white',
        fontFamily: "Sans-Serif",
        fontSize: "large",
        fontWeight: "normal"
    }
    
    return (
        <div>
            <h1> FANTASY FOOTBALL <br/> TRADE ANALYZER </h1>
            <h3 style = {textStyle}> Utilizing advanced stats like average depth of target, breakaway percentage,<br/> 
                and our very own statistic known as explosive percentage, we can accurately calculate <br/>
                which side in a fantasy football trade is better. We know how much is on the line <br/> 
                when making trades in fantasy, so our tool will help make those money moves. 
            </h3>
        </div>
    );
}

export default Description;

