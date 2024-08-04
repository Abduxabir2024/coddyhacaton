import { useState } from "react"
import { url } from "../../axios/axios"
import "./shoxzamon.scss"
import { Button } from "@material-tailwind/react"
import { Input } from "antd"
import React from 'react';
import { Select, Space } from 'antd';
const handleChange = (value) => {
    console.log(`selected ${value}`);
};

export default function Login() {
    let [src, setSrc] = useState("")
    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [portfolio, setPortfolio] = useState("")
    let [phone2, setPhone2] = useState("")
    let [fullStack2, setfullStack2] = useState("")
    let [about, setAbout] = useState("")
    let [location, setLocation] = useState("")
    let [language, setLanguage] = useState("")


    const createProd2 = (e) => {
        e.preventDefault();
        url.post("/xodim", {
            src: src,
            name: name,
            age: age,
            portfolio: portfolio,
            phone2: phone2,
            fullStack2: fullStack2,
            about: about,
            location: location,
            language: language,
        })
    };
    return (
        <>
            <div className="login">
                <form onSubmit={(e) => createProd2(e)}>
                    <Input value={src} onChange={(e) => setSrc(e.target.value)} addonBefore={<i class="fa-regular fa-image"></i>} required placeholder="Your image source" />
                    <div>
                        <Input value={name} onChange={(e) => setName(e.target.value)} addonBefore={<i class="fa-regular fa-user"></i>} required placeholder="Full name" />
                        <Input type="number" value={age} onChange={(e) => setAge(e.target.value)} addonBefore={<i class="fa-solid fa-rotate-right"></i>} required placeholder="Your age" />
                    </div>
                    <Input value={portfolio} onChange={(e) => setPortfolio(e.target.value)} addonBefore={<i class="fa-regular fa-address-book"></i>} placeholder="Your portfolio source (optional)" />
                    <div>
                        <Input value={phone2} onChange={(e) => setPhone2(e.target.value)} addonBefore={<i class="fa-solid fa-phone"></i>} required placeholder="Your phone number +000_000_00_00" />
                        <Input value={fullStack2} onChange={(e) => setfullStack2(e.target.value)} addonBefore={<i class="fa-solid fa-code"></i>} required placeholder="Full-stack Frontend or Backend" />
                    </div>
                    <Input value={about} onChange={(e) => setAbout(e.target.value)} addonBefore={<i class="fa-solid fa-address-card"></i>} required placeholder="About yourself" />
                    <div>
                        <Input value={location} onChange={(e) => setLocation(e.target.value)} addonBefore={<i class="fa-solid fa-location-dot"></i>} required placeholder="Your location" />
                        <Input value={language} onChange={(e) => setLanguage(e.target.value)} addonBefore={<i class="fa-solid fa-language"></i>} required placeholder="What languages ​​do you know?" />
                    </div>
                    <Button type="submit">Send</Button>
                </form>
            </div>
        </>
    )
}