import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Stages = () => {
    return (
        <section className="mb-44" id="stages">
            <div className="container mx-auto relative top-[270px]  ">

                <center>
                    <motion.h1
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}
                        className="h2 text-[#FFF] etaps font-bold ">Этапы разработки</motion.h1>
                </center>

                <div className="flex w-[100%] justify-center flex-col">
                    <div className="pt-[10px] flex flex-col ">
                        <center>
                            <motion.p
                                variants={fadeIn("right", 0.5)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}
                                className="text-[#FFF] font-bold text-[30px] ">Этап</motion.p>
                            <motion.p
                                variants={fadeIn("right", 0.5)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}
                                className="text-[#FFF] text-5xl ">01</motion.p>
                        </center>
                        <center>
                            <motion.p
                                variants={fadeIn("left", 0.8)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}
                                className="pt-[10px] text-center h3 ccv text-[31px] text-[#FFF]">
                                Подготовительный
                            </motion.p>
                        </center>
                        <div>
                            <motion.p
                                variants={fadeIn("right", 0.9)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}
                                className="text-center">
                                Определяем цели, общаемся и
                                <br />
                                оговариваем ваши пожелания и
                                <br />
                                идеи, проводим анализ конкурентов.
                            </motion.p>
                        </div>
                    </div>

                    <div className="pt-[10px] flex flex-col ">
                        <center>
                            <motion.p
                                variants={fadeIn("right", 0.5)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}
                                className="text-[#FFF] font-bold text-[30px] pt-[20px] ">
                                Этап
                            </motion.p>
                            <motion.p
                                variants={fadeIn("right", 0.5)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}
                                className="text-[#FFF] text-5xl pt-[10px]">02</motion.p>
                        </center>
                        <motion.p
                            variants={fadeIn("left", 0.8)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="pt-[10px] text-center h3 text-[#FFF] text-[33px]">
                            Проработка структуры
                        </motion.p>
                        <div>
                            <motion.p
                                variants={fadeIn("right", 0.9)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}
                                className="text-center">
                                Прорабатываем архитектуру сайта
                                <br />
                                до внесения предоплаты. Если
                                <br />
                                сайт одностраничный, то полностью планируем блоки
                            </motion.p>
                        </div>
                    </div>

                    <div className="pt-[10px] flex flex-col ">
                        <center>
                            <motion.p
                                variants={fadeIn("left", 0.5)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}
                                className="text-[#FFF] font-bold text-[30px] pt-[20px] ">
                                Этап
                            </motion.p>
                            <motion.p
                                variants={fadeIn("left", 0.5)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}
                                className="text-[#FFF] text-5xl pt-[10px] ">03</motion.p>
                        </center>
                        <motion.p
                            variants={fadeIn("right", 0.8)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="pt-[10px] text-center h3 text-[#FFF] text-[33px] ">
                            Заключаем
                            договор
                        </motion.p>
                        <div>
                            <motion.p
                                variants={fadeIn("left", 0.9)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}
                                className="text-center">
                                Оговариваем сроки выполнения,
                                <br />
                                берем частичную предоплату,
                                <br />
                                разрабатываем дизайн и беремся
                                <br />
                                за работу на основе
                                <br />
                                утвержденного макета.
                            </motion.p>
                        </div>
                    </div>

                    <div className="pt-[10px] flex flex-col ">
                        <center>
                            <motion.p
                                variants={fadeIn("right", 0.5)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}
                                className="text-[#FFF] font-bold text-[30px] pt-[20px] ">
                                Этап
                            </motion.p>
                            <motion.p
                                variants={fadeIn("right", 0.6)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}
                                className="text-[#FFF] text-5xl pt-[10px]">04</motion.p>
                        </center>
                        <motion.p
                            variants={fadeIn("left", 0.8)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="pt-[10px] text-center h3 text-[#FFF] text-[33px] ">
                            Доводим до
                            идеала
                        </motion.p>
                        <div>
                            <motion.p
                                variants={fadeIn("right", 0.9)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}
                                className="text-center">
                                Предоставляем 3 этапа
                                <br />
                                бесплатных правок, чтобы вы
                                <br />
                                получили именно то, что хотите.
                                <br />
                                После согласования работ
                                <br />
                                подписываем документы и берем
                                <br />
                                оставшуюся часть оплаты. Готово!
                            </motion.p>
                        </div>
                    </div>


                    <div className="pt-[10px] flex flex-col ">
                        <center>
                            <motion.p
                                variants={fadeIn("left", 0.5)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}
                                className="text-[#FFF] font-bold text-[30px] pt-[20px] ">
                                Этап
                            </motion.p>
                            <motion.p
                                variants={fadeIn("left", 0.5)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}
                                className="text-[#FFF] text-5xl pt-[10px]">05</motion.p>
                        </center>
                        <center>
                            <motion.p
                                variants={fadeIn("right", 0.8)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}
                                className="pt-[10px] text-center h3 text-[#FFF] text-[33px] ">
                                Дополнительный:
                                пожизненная
                                поддержка
                            </motion.p>
                        </center>
                        <center>
                            <motion.p variants={fadeIn("left", 0.9)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }} >
                                Впоследствии вы можете
                                <br />
                                обратиться к нам по любым
                                <br />
                                вопросам касательно сайта или
                                <br />
                                если заходите доработать свой
                                <br />
                                проект
                            </motion.p>
                        </center>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default Stages;
