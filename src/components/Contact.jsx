import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import axios from "axios";

const Contact = () => {
  const TOKEN = '6156103879:AAF0l3njGPO11rdkN25QAslof-1dNYtkvbQ'
  const CHAT_ID = '-1001971872400'
  const URL = `https://api.telegram.org/bot${ TOKEN }/sendMessage`
  useEffect(() => {
     
  })
  const getData = (e) => {
    e.preventDefault()

    const data = {}

    let fr = new FormData(e.target)

    fr.forEach((value, key) => {
      data[key] = value
    })
    axios.post(URL, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: data
    })
  }
  return (
    <section className=" lg:section py-16 mt-10" id="contact">
      <div className="container   mx-auto">
        <div className="flex flex-col lg:flex-row ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center "
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide ">
              СВЯЗАТЬСЯ
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
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start "
            onSubmit={(e) => getData(e)}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all "
              type="text"
              placeholder="Ваше имя"
              name="name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all "
              type="text"
              placeholder="Ваш email"
              name="email"
            />

            <textarea
              className="bg-transparent resize-none mb-12 border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Сообщение"
              name="text"
            ></textarea>

            <button className="btn btn-lg" type="submit">Отправить сообщение</button>
          </motion.form>
          {/* </form> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
