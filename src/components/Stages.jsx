import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Stages = () => {
  return (
    <section className="mb-44" id="stages">
      <div className="container mx-auto relative top-[270px]  ">
        <center>
          <h1 className="h2 text-[#FFF] etaps font-bold ">Этапы разработки</h1>
          <div className="flex w-[40%] justify-center flex-col">
            <div className="pt-[10px] flex flex-col ">
              <p className="text-[#FFF] font-bold text-[30px] ">Этап</p>
              <p className="text-[#FFF] text-5xl ">01</p>
              <p className="pt-[10px] h3 ccv text-[33px] text-[#FFF]">
                Подготовительный
              </p>
              <div>
                <p>
                  Определяем цели, общаемся и
                  <br />
                  оговариваем ваши пожелания и
                  <br />
                  идеи, проводим анализ конкурентов.
                </p>
              </div>
            </div>

            <div className="pt-[10px] flex flex-col ">
              <p className="text-[#FFF] font-bold text-[30px] pt-[20px] ">
                Этап
              </p>
              <p className="text-[#FFF] text-5xl pt-[10px]">02</p>
              <p className="pt-[10px] h3 text-[#FFF] text-[33px]">
                Проработка структуры
              </p>
              <div>
                <p>
                  Прорабатываем архитектуру сайта
                  <br />
                  до внесения предоплаты. Если
                  <br />
                  сайт одностраничный, то полностью планируем блоки
                </p>
              </div>
            </div>

            <div className="pt-[10px] flex flex-col ">
              <p className="text-[#FFF] font-bold text-[30px] pt-[20px] ">
                Этап
              </p>
              <p className="text-[#FFF] text-5xl pt-[10px] ">03</p>
              <p className="pt-[10px] h3 text-[#FFF] text-[33px] ">
                Заключаем договор
              </p>
              <div>
                <p>
                  Оговариваем сроки выполнения,
                  <br />
                  берем частичную предоплату,
                  <br />
                  разрабатываем дизайн и беремся
                  <br />
                  за работу на основе
                  <br />
                  утвержденного макета.
                </p>
              </div>
            </div>

            <div className="pt-[10px] flex flex-col ">
              <p className="text-[#FFF] font-bold text-[30px] pt-[20px] ">
                Этап
              </p>
              <p className="text-[#FFF] text-5xl pt-[10px]">04</p>
              <p className="pt-[10px] h3 text-[#FFF] text-[33px] ">
                Доводим до идеала
              </p>
              <div>
                <p>
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
                </p>
              </div>
            </div>


            <div className="pt-[10px] flex flex-col ">
              <p className="text-[#FFF] font-bold text-[30px] pt-[20px] ">
                Этап
              </p>
              <p className="text-[#FFF] text-5xl pt-[10px]">05</p>
              <p className="pt-[10px] h3 text-[#FFF] text-[33px] ">
                Дополнительный:
                пожизненная
                поддержка
              </p>
              <div>
                <p>
                  Впоследствии вы можете
                  <br />
                  обратиться к нам по любым
                  <br />
                  вопросам касательно сайта или
                  <br />
                  если заходите доработать свой
                  <br />
                  проект
                </p>
              </div>
            </div>



          </div>
        </center>
      </div>
    </section>
  );
};

export default Stages;
