import React from "react";
import { github_user_api, github_profile_link,linkedin_link} from "../constant";
import {SiGoogle, SiLinkedin, SiGithub } from 'react-icons/si';


class ProfileClass extends React.Component{
constructor(props){
    super(props);
    this.state = {
        userInfo:{
            name:"",
            bio:""
        }
    };
    console.log("child1-constructor");
}
async componentDidMount(){
    console.log("child1-componentDidMount");
    const data = await fetch(github_user_api+this.props.name);
    const json = await data.json();

    this.setState({
        userInfo:json
    })
}
componentDidUpdate(){
    console.log("child1-componentDidUpdate");
}
componentWillUnmount(){
    console.log("child1-componentWillUnmount");
}

    render(){
        console.log("Child1-render");
        const {userInfo} = this.state;
        return(
            <div>
                <div className="flex flex-col justify-center items-center mt-4 gap-5">
                    <div>
                        <img className="rounded-full w-[150px] h-[150px] border-none align-middle" src={userInfo.avatar_url} alt={userInfo.name}/>
                    </div>
                    <div className="profile-details">
                        <p className="text-base text-bio pt-5 mt-0 mb-8">{userInfo.bio}</p>
                        <div className="social-media-div text-[2em] text-center w-full flex items-center justify-center">
                            <a className="mb-2.5 text-[25px] text-github" href={github_profile_link} target="_blank"><i ><SiGithub /></i></a>
                            <a className="mb-2.5 pl-3 text-[25px] text-linkedin" href={linkedin_link} target="_blank"><i><SiLinkedin/></i></a> 
                            <a className="mb-2.5 pl-3 text-[25px] text-google" href="mailto:swayamdebata2003@gmail.com" ><i><SiGoogle/></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProfileClass;