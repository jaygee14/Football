
export default function Timer(props){

    if (props.status == "STATUS_IN_PROGRESS") {
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
    } else if (props.status == "STATUS_SCHEDULED") {
        return (
            <div className="timer"> <p> { props.schedule } </p> </div>
        )
    } else if (props.status == "STATUS_HALFTIME") {
        return (
            <div className="timer"><p id="halftime">Halftime</p></div>
        )
    } else {
        return (
            <div className="timer">
                <p id="final"> Final </p>
            </div>
        )
    }
        
}