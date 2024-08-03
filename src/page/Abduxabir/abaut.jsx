import "./abaut.scss"
import { useState } from "react";
import { Input } from 'antd';


export default function Abaut(){
    let [name, setName] = useState("")
    let [massage, setMassage] = useState("")
    let [tel, setTel] = useState("")

        const { TextArea } = Input;
        const createProd = (e) => {
            e.preventDefault();
            inctance.post("/xabarlar", {
                nomi: nomi,
                tel: tel,
                massage: massage,
            })
                .then((r) => toast.success("Successfully Created"))
                .catch((er) => toast.error("Something went wrong"))
        };
    return(
        <>
           <div className="bi">
            <h1>Bizning jamoa azolari</h1>
        </div>
        <div className="katta">
                <div className="main">
                    <div id="c2" className="card">
                        <div className="card-info">
                            <div className="contact-title">Contact</div>
                            <div className="card-contact">
                                <li className="icon-contact">
                                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path>
                                    </svg>
                                    Tel:(+998) 085 41 73
                                </li>
                                <li class="icon-contact">
                                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                                    </svg>
                                    Email: jamshidt234@gmail.com
                                </li>
                            </div>
                        </div>
                    </div>

                    <div id="c3" className="card">
                        <div className="card-info">
                            <li className="address-icon">
                                <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path>
                                </svg>
                            </li>
                            <li class="address-title">Address:</li>
                            <li class="address">Qorasaroy 102 uy</li>
                        </div>
                    </div>

                    <div id="c1" className="card">
                        <div className="card-info">
                            <div className="card-avatar">
                                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"></path>
                                </svg>
                            </div>
                            <div className="card-title">Jamshid</div>
                            <div className="card-subtitle">Tursunov</div>
                            <div className="card-social">
                                <li id="cs1" className="card-social-icon">
                                    <a href=""><i className="text-lg fa-brands fa-instagram"></i></a>
                                    Instagram
                                </li>
                                <li id="cs2" className="card-social-icon">
                                    <a href="https://t.me/jamshid194"><i className="text-lg fa-brands fa-telegram"></i></a>
                                   Telegram
                                </li>
                                <li id="cs3" className="card-social-icon">
                                <a href="https://github.com/jamshid-dev"><i class="text-lg fa-brands fa-github"></i></a>
                                    GitHub
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div id="c2" className="card">
                        <div className="card-info">
                            <div className="contact-title">Contact</div>
                            <div className="card-contact">
                                <li className="icon-contact">
                                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path>
                                    </svg>
                                    Tel:(+998) 99 090 18 44
                                </li>
                                <li className="icon-contact">
                                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                                    </svg>
                                    Email: ibroximova014.gmail.com
                                </li>
                            </div>
                        </div>
                    </div>

                    <div id="c3" className="card">
                        <div className="card-info">
                            <li className="address-icon">
                                <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path>
                                </svg>
                            </li>
                            <li className="address-title">Address:</li>
                            <li className="address">Aviasozlar 74 61`</li>
                        </div>
                    </div>

                    <div id="c1" className="card">
                        <div className="card-info">
                            <div className="card-avatar">
                                   <img src="./azizbek.jpg" alt="" />
                            </div>
                            <div className="card-title">Azizbek</div>
                            <div className="card-subtitle">Ibohimov</div>
                            <div className="card-social">
                                <li id="cs1" className="card-social-icon">
                                <a href="https://www.instagram.com/ibrohiimov_/?next=%2F"><i class="text-lg fa-brands fa-instagram"></i></a>
                                Instagram
                                    
                                </li>
                                <li id="cs2" className="card-social-icon">
                                <a href="https://t.me/ibn_iqbol"><i class="text-lg fa-brands fa-telegram"></i></a>
                                Telegram
                                </li>
                                <li id="cs3" className="card-social-icon">
                                    <a href="https://github.com/azyz08"><i class="text-lg fa-brands fa-github"></i></a>
                                GitHub
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div id="c2" className="card">
                        <div className="card-info">
                            <div className="contact-title">Contact</div>
                            <div className="card-contact">
                                <li className="icon-contact">
                                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path>
                                    </svg>
                                    Tel:(+998) 77 800 46 00
                                </li>
                                <li className="icon-contact">
                                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                                    </svg>
                                    Email: abduxabir2009.gmail.com
                                </li>
                            </div>
                        </div>
                    </div>

                    <div id="c3" className="card">
                        <div className="card-info">
                            <li className="address-icon">
                                <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path>
                                </svg>
                            </li>
                            <li className="address-title">Address:</li>
                            <li className="address">Qorasaroy 179 uy</li>
                        </div>
                    </div>

                    <div id="c1" className="card">
                        <div className="card-info">
                            <div className="card-avatar">
                                   <img src="./abduxabir.jpg" alt="" />
                            </div>
                            <div className="card-title">Abduxabir</div>
                            <div className="card-subtitle">Abduqayumov</div>
                            <div className="card-social">
                                <li id="cs1" className="card-social-icon">
                                <a href="https://www.instagram.com/adxbir/followers/"><i class="text-lg fa-brands fa-instagram"></i></a>
                                Instagram
                                    
                                </li>
                                <li id="cs2" className="card-social-icon">
                                <a href="https://t.me/AbduxabirA"><i class="text-lg fa-brands fa-telegram"></i></a>
                                Telegram
                                </li>
                                <li id="cs3" className="card-social-icon">
                                    <a href="https://github.com/Abduxabir2024"><i class="text-lg fa-brands fa-github"></i></a>
                                GitHub
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div id="c2" className="card">
                        <div className="card-info">
                            <div className="contact-title">Contact</div>
                            <div className="card-contact">
                                <li className="icon-contact">
                                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path>
                                    </svg>
                                    Tel:(+998) 097 06 63
                                </li>
                                <li className="icon-contact">
                                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                                    </svg>
                                    Email: shoxzamon06@gmail.com
                                </li>
                            </div>
                        </div>
                    </div>

                    <div id="c3" className="card">
                        <div className="card-info">
                            <li className="address-icon">
                                <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path>
                                </svg>
                            </li>
                            <li class="address-title">Address:</li>
                            <li class="address">Sputnik 16a 8dom 2etaj 27honadonx`</li>
                        </div>
                    </div>

                    <div id="c1" className="card">
                        <div className="card-info">
                            <div className="card-avatar">
                                   <img src="./shoxzamon.jpg" alt="" />
                            </div>
                            <div className="card-title">Shoxzamon</div>
                            <div className="card-subtitle">Xasanov</div>
                            <div className="card-social">
                                <li id="cs1" className="card-social-icon">
                                <a href="https://www.instagram.com/shox_0uroe/"><i class="text-lg fa-brands fa-instagram"></i></a>
                                Instagram
                                    
                                </li>
                                <li id="cs2" className="card-social-icon">
                                <a href="https://t.me/shox_0uroe"><i class="text-lg fa-brands fa-telegram"></i></a>
                                Telegram
                                </li>
                                <li id="cs3" className="card-social-icon">
                                    <a href="https://github.com/ShoxzamonXasanov"><i class="text-lg fa-brands fa-github"></i></a>
                                GitHub
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div id="c2" className="card">
                        <div className="card-info">
                            <div className="contact-title">Contact</div>
                            <div className="card-contact">
                                <li className="icon-contact">
                                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path>
                                    </svg>
                                    Tel:(+998) 97 130 40 47
                                </li>
                                <li class="icon-contact">
                                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                                    </svg>
                                    Email: farhodtojiyev3@gmail.com
                                </li>
                            </div>
                        </div>
                    </div>

                    <div id="c3" className="card">
                        <div className="card-info">
                            <li className="address-icon">
                                <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path>
                                </svg>
                            </li>
                            <li className="address-title">Address:</li>
                            <li className="address">Chilonzor 20-kv hakimxon 88-a uy</li>
                        </div>
                    </div>

                    <div id="c1" className="card">
                        <div className="card-info">
                            <div className="card-avatar">
                                   <img src="./farhot.jpg" alt="" />
                            </div>
                            <div className="card-title">Farhot</div>
                            <div className="card-subtitle">Tojiev</div>
                            <div className="card-social">
                                <li id="cs1" className="card-social-icon">
                                <a href="https://www.instagram.com/pgc_royal/"><i class="text-lg fa-brands fa-instagram"></i></a>
                                Instagram
                                    
                                </li>
                                <li id="cs2" className="card-social-icon">
                                <a href="https://t.me/Pgc_RoYaL"><i class="text-lg fa-brands fa-telegram"></i></a>
                                Telegram
                                </li>
                                <li id="cs3" className="card-social-icon">
                                    <a href="https://github.com/farhod07"><i class="text-lg fa-brands fa-github"></i></a>
                                GitHub
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div id="c2" className="card">
                        <div className="card-info">
                            <div className="contact-title">Contact</div>
                            <div className="card-contact">
                                <li className="icon-contact">
                                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path>
                                    </svg>
                                    Tel:(+998) 90 115 58 18
                                </li>
                                <li class="icon-contact">
                                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                                    </svg>
                                    Email: 20notabu10@gmail.com
                                </li>
                            </div>
                        </div>
                    </div>

                    <div id="c3" class="card">
                        <div class="card-info">
                            <li class="address-icon">
                                <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path>
                                </svg>
                            </li>
                            <li className="address-title">Address:</li>
                            <li className="address">Sputnik 16 9-dom 34-xonadon</li>
                        </div>
                    </div>

                    <div id="c1" className="card">
                        <div className="card-info">
                            <div className="card-avatar">
                              <img src="./abdulaziz.jpg" alt="" />
                            </div>
                            <div className="card-title">Abdulaziz</div>
                            <div className="card-subtitle">Sunnatulayev</div>
                            <div className="card-social">
                                <li id="cs1" className="card-social-icon">
                                <a href="https://www.instagram.com/abdulaz1z.3110/?next=%2F"><i class="text-lg fa-brands fa-instagram"></i></a>
                           
                                Instagram
                                    
                                </li>
                                <li id="cs2" className="card-social-icon">
                                <a href="https://t.me/Abdulaz1z_31"><i class="text-lg fa-brands fa-telegram"></i></a>
                                Telegram
                                </li>
                                <li id="cs3" className="card-social-icon">
                                    <a href="https://github.com/Abgit commit -m 'mklop'dulaziz31082010"><i class="text-lg fa-brands fa-github"></i></a>
                                GitHub
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bi">
            <h1>Qilgan praektlarimiz </h1>
             </div>
            <div className="kat">
                <div className="card2">
                    <img src="./t.png" alt="" />
                    <a href="https://tailwindtemplates.co/">
                        <button>Bosing</button>
                    </a>
                </div>
                <div className="card2">
                    <img src="./e.png" alt="" />
                    <a href="https://tailkit.com/">
                        <button>Bosing</button>
                    </a>
                </div>
                <div className="card2">
                    <img src="./w.png" alt="" />
                    <a href="https://www.tranexteint.ec/?c=premium-landing-page-pack-for-tailwind-css-jj-A6z0lWSN">
                        <button>Bosing</button>
                    </a>
                </div>
                <div className="card2">
                    <img src="./r.png" alt="" />
                    <a href="https://tailwindfromscratch.com/website-projects/loopstudios/">
                        <button>Bosing</button>
                    </a>
                </div>
                <div className="card2">
                    <img src="./y.png" alt="" />
                    <a href="https://tailwindfromscratch.com/website-projects/bookmark/">
                        <button>Bosing</button>
                    </a>
                </div>
                <div className="card2">
                    <img src="./op.png" alt="" />
                    <a href="https://www.shopify.com/">
                        <button>Bosing</button>
                    </a>
                </div>
            </div>
            <div className="kattaa">
            <form onSubmit={(e) => createProd(e)}>
            <div className="in">
            <h1>Cantak</h1>
                <input value={name} onChange={(e) => setName(e. target.value)} className='l' type="text" placeholder='FullName'/>
                <input value={tel} onChange={(e) => setTel(e. target.value)} className='l' type="text" placeholder='Tel'/>
                <TextArea value={massage} onChange={(e) => setMassage(e. target.value)}  rows={4} placeholder='Massage' />
               <button>Add</button>
            </div>
            </form>
            <div className="text">
            <img src="" alt="" />
            </div>
          </div>
        </>
    )
}