import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Подготовительный",
    description:
      "Определяем цели, общаемся и оговариваем ваши пожелания и идеи, проводим анализ конкурентов.",
    link: "learn more",
  },
  {
    name: "Проработка структуры",
    description:
      "Прорабатываем архитектуру сайта до внесения предоплаты. Если сайт одностраничный, то полностью планируем блоки",
    link: "learn more",
  },
  {
    name: "Заключаем договор",
    description:
      "Оговариваем сроки выполнения, берем частичную предоплату, разрабатываем дизайн и беремся за работу на основе утвержденного макета.",
    link: "learn more",
  },
  {
    name: "Доводим до идеала",
    description:
      "Предоставляем 3 этапа бесплатных правок, чтобы вы получили именно то, что хотите. После согласования работ подписываем документы и берем оставшуюся часть оплаты.  Готово!",
    link: "learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">


      <div className="container  mx-auto ">

        <div className="flex flex-col lg:flex-row">


          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 "
          >
            <h2 className="h2 text-accent mb-6 ">Что мы делаем</h2>
            <h3 className="h3 max-w-[455px] mb-16 ">
              I'm a Freelance Front-end Developer with over 5 years of
              expirience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>



          <div className="flex-1">
            
            <div>


              {services.map((service, index) => {
                const { name, description, link } = service;

                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex "
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 ">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight ">
                        {description}
                      </p>
                    </div>



                    <motion.div
                      variants={fadeIn("left", 0.5)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.3 }}
                      className="flex flex-1 flex-col items-end"
                    >


                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center
                        items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm ">
                        {link}
                      </a>



                    </motion.div>


                  </div>
                );
              })}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
