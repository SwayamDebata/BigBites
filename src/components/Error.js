import { Form, useRouteError } from "react-router-dom";
import error from "../assets/img/error.png";

const Error = ()=>{
    const err = useRouteError();
    return(
        <div className="container ml-[300px] fixed">
            <img className="h-[400px]" src={error}/>
            <h2 className="ml-[200px] font-bold"> OOPS!! Something went wrong</h2>
            <h2 className="ml-[200px] font-bold">{err.status + ":" + err.statusText}</h2>
        </div>
    )
}
export default Error;