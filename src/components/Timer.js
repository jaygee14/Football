
export default function Timer(props){
    return (
        <div className="timer">
            <h3 id="period">{props.period}</h3>
            <h3 id="clock">{ props.clock }</h3>
        </div>
    )
}