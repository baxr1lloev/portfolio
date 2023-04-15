import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const TOKEN = '6156103879:AAF0l3njGPO11rdkN25QAslof-1dNYtkvbQ'
    const CHAT_ID = '-1001971872400'
    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`
    const notify = () => toast(`Ваше сообщение принято!`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')
    
    const getData = (e) => {
        e.preventDefault()

        const data = {}

        let fr = new FormData(e.target)

        fr.forEach((value, key) => {
            data[key] = value
        })
        // axios.post(URL, {
        //     chat_id: CHAT_ID,
        //     parse_mode: 'html',
        //     text: data
        // })
        setName('')
        setNumber('')
        setMessage('')
        notify()
    }
    return (
        <>
        <section className=" lg:section py-16 mt-10 relative" id="contact">
            <div className="container   mx-auto">
                <div className="flex flex-col lg:flex-row ">
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex-1 flex justify-start items-center "
                    >
                        <div>
                            <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide ">
                                Связаться с нами
                            </h4>
                            <h2 className="text-[45px] lg:text-[90px] leading-none mb-12 ">
                                Давайте работать <br />
                                вместе!
                            </h2>
                        </div>
                    </motion.div>
                    {/* <form onSubmit={(e) => getData(e)}> */}
                    <motion.form
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
                        onSubmit={(e) => getData(e)}
                    >
                        <input
                            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all "
                            type="text"
                            placeholder="Ваше имя"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all "
                            type="phone"
                            placeholder="Ваш номер телефона"
                            name="number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />

                        <textarea
                            className="bg-transparent resize-none mb-12 border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                            placeholder="Сообщение"
                            name="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>

                        <button className="btn btn-lg" type="submit">Отправить сообщение</button>
                    </motion.form>
                </div>
            </div>
            <div className="absolute top-1 left-3">
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            >
            </ToastContainer>
            </div>
        </section>
        </>
    );
};

export default Contact;
