import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, resetField } = useForm();
    const TOKEN = '6156103879:AAF0l3njGPO11rdkN25QAslof-1dNYtkvbQ'
    const CHAT_ID = '-1001971872400'
    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`
    const notify = (text) => toast(text, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    // const [name, setName] = useState('')
    // const [number, setNumber] = useState('')
    // const [message, setMessage] = useState('')

    const getData = (data) => {
        if (data.name === '' && data.number === '' && data.name === Number) {
            notify('Эти поля обязательны для заполнения!')
        } else {
            axios.post(URL, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: data
            })
            notify('Ваше сообщение принято')
            resetField('name')
            resetField('number')
            resetField('text')
        }
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
                        <motion.form
                            variants={fadeIn("left", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.3 }}
                            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
                            onSubmit={handleSubmit(getData)}
                        >
                            <input
                                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all "
                                type="text"
                                placeholder="Ваше имя"
                                name="name"
                                {...register("name", {
                                    min: 4,
                                    pattern: /[A-Za-z]/
                                })}
                            />
                            <input
                                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all "
                                type="phone"
                                placeholder="Ваш номер телефона"
                                name="number"
                                {...register("number", {
                                    max: 10,
                                    pattern: /[0-9]/

                                })}
                            />

                            <textarea
                                className="bg-transparent resize-none mb-12 border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                                placeholder="Сообщение"
                                name="text"
                                // value={message}
                                // onChange={(e) => setMessage(e.target.value)}
                                {...register("text")}
                            ></textarea>

                            <button className="btn btn-lg" type="submit">Отправить сообщение</button>
                        </motion.form>
                    </div>
                </div>
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
            </section>
        </>
    );
};

export default Contact;
