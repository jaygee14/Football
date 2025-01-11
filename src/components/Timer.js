
export default function Timer(props){
    return (
        <div className="timer">
            <section id="period">
                <p>QTR</p>
                <p>{ props.period }</p>
            </section>
            <section id="clock">
                <p>Time</p>
                <p>{ props.clock }</p>
            </section>
        </div>
    )
}