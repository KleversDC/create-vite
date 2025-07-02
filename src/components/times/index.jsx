import{ useState }from "react";
function Timer({start})
{

    const [value , setValue] = useState(+start);
    const showValue=()=>{
        setValue(value + 1)



    }
    const show10Value=()=>{
        setValue(value + 10)
    }
    const show100Value=()=>{
        setValue(value + 100)
    }

    const shownot100Value=()=>{
        setValue(value - 100)
    }


return (

    <>
    <h3>Timer</h3>
    <p>Value : {value}</p>
    <button onClick={showValue}>+1</button>
    <button onClick={show10Value}>+10</button>
    <button onClick={show100Value}>+100</button>
    <button onClick={shownot100Value}>-100</button>
    </>
)

}
export default Timer;