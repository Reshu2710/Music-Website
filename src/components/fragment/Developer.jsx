import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/reshu.jpg";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Reshu Sharma</h3>
                        <p>Full Stack Developer</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A Computer Science and Engineering Student at Noida Institute of Engineering and Technology</p>
                    <p>Graduating in 2024 and looking for a responsible position to gain practical knowledge</p>
                    <p>A full-stack web developer.</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"} href={"https://linkedin.com/in/reshu-sharma-9a57681b9"}  title={"vishalsingh-"}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/reshu_10_/"}  title={"vishalsingh023"}>
                            <Instagram/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://reshusharma1210@gmail.com"}  title={"Web Portfolio"}>
                            <Portrait/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;