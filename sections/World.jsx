'use client';

import { motion } from 'framer-motion';
import styles from '../styles';

import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText
        textStyles="text-center"
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-24 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" className="w-full h-full" />
        </div>

        <div className="absolute top-[15%] right-[28%] p-[8px] w-[196px] h-[150px] overflow-hidden rounded-[24px] bg-[#09597E]">
          <img src="/people-04.png" className="w-full h-full rounded-[24px]" />
          <div className="flex flex-col gap-1 absolute bottom-3 left-5">
            <div className="flex  items-center">
              <div className="flex ">
                <img
                  src="people-01.png"
                  className="w-[24px] h-[24px] relative z-10  left-1  top-0"
                />
                <img
                  src="people-02.png"
                  className="w-[24px] h-[24px] relative z-20 -left-1 top-0 "
                />
                <img
                  src="people-03.png"
                  className="w-[24px] h-[24px] relative z-30 -left-3 top-0 "
                />
              </div>
              <h4 className="font-normal text-[12px] -ml-1  text-white">
                + 256 has joined
              </h4>
            </div>
            <h3 className="text-center font-bold text-[24px] text-white">
              Hawkins Lab
            </h3>
          </div>
        </div>

        <div className="absolute  top-[45%] left-[15%] p-[8px] w-[240px] h-[150px] overflow-hidden rounded-[24px] bg-[#09597E]">
          <img src="/people-05.png" className="w-full h-full rounded-[24px]" />
          <div className="flex flex-col gap-1 absolute bottom-5 left-5">
            <div className="flex  items-center">
              <div className="flex ">
                <img
                  src="people-01.png"
                  className="w-[24px] h-[24px] relative z-10  left-1  top-0"
                />
                <img
                  src="people-02.png"
                  className="w-[24px] h-[24px] relative z-20 -left-1 top-0 "
                />
                <img
                  src="people-03.png"
                  className="w-[24px] h-[24px] relative z-30 -left-3 top-0 "
                />
              </div>
              <h4 className="font-normal text-[12px] -ml-1  text-white">
                + 264 has joined
              </h4>
            </div>
            <h3 className="text-center font-bold text-[24px] text-white">
              The Upside Down
            </h3>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
