import ProfileClass from "./ProfileClass";
import { Component } from "react";
import { github_user_name } from "../constant";

class About extends Component{
    constructor(props){
        super(props);
        console.log("parent-constructor");
    }
    componentDidUpdate(){
        console.log("parent-componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("parent componentWillUnmount");
    }
    render(){
        console.log("parent-render");
        return(
            <div className="container flex justify-around mob:flex-col">
                <div className="card-container shadow-md w-[30%] h-2/4 mob:w-auto">
                    <h1 className="card-container-title">About Me</h1>
                    <ProfileClass name={github_user_name}/>
                </div>
                <div className="card-container shadow-md w-[70%] mob:w-auto">
                    <h1 className="card-container-title">About Big Bites</h1>
                    <h2 className="flex gap-5 card-container mob:flex-col mob:items-center">
                    Our mission is to elevate the quality of life for the urban consumer 
                    with unparalleled convenience. Convenience is what makes us tick. 
                    It's what makes us get out of bed and say, 
                    "Let's do this."We build innovative products & 
                    solutions that deliver unparalleled convenience to urban consumers.
                    The best part? Every bit of your work at Big Bites 
                    will help elevate the lives of our users across India.
                    </h2>
                </div>
            </div>
        );
    }
}
export default About;













// const About2 = () =>{
//     return(
//     <div className="about-container">
//         <h1 className="about-title">About Us</h1>
//         <h2 className="about-content">
//             We are among the top food delivery app in the world.
//             our delivery service is so fast, that the avarage time of food delivering through our platform is 10min 
//             We build innovative products & solutions that deliver unparalleled convenience to urban consumers.
//             Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. 
//             Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."
//         </h2>
//         <ProfileFunctionalComponent name={"Swayam"}/>
//         <Profile name={"Devta"} xyz="abc"/>
//     </div>
// )}