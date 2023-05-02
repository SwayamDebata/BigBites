import { useState } from "react";
import contact from "../assets/img/contact-us.png";

const Contact = () => {
const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
return (
    <div className="container flex flex-wrap justify-evenly mob:flex-col">
    <div className="mob:w-auto mt-[100px]">
    <img src={contact} alt="" />
    </div>
    <div className="flex flex-col items-center justify-center">
    <h1 className="text-lg font-semibold">Contact us</h1>
                <form className="flex  shadow-lg flex-col items-center justify-center rounded-sm" onSubmit={handleSubmit}>
                <input className="p-5 hover:bg-gray-light rounded-md" type="text" placeholder="Name" required/>
                    <input className="p-5 hover:bg-gray-light rounded-md" type="email" placeholder="Email" required/>
                    <textarea className="p-5 hover:bg-gray-light rounded-md" placeholder="Type your Message here..." required></textarea>
                    <button className="p-5 nav--btn mr-5 hover:text-green rounded-md" type="submit">Submit</button>
                    {message && <span>Thanks for contacting Big Bites, We will reply ASAP.</span>}
                </form>
    </div>
    </div>
);
};

export default Contact;