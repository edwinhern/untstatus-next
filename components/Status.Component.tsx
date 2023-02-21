import { motion } from "framer-motion";
import { WorkLink } from "../components/Work.Component";
import Animation from "../components/Animation.Component";
import style from "../styles/pages.module.css";

const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  inital: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
const fadeInDown = {
  inital: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface Props {
  children: React.ReactNode;
}

export const MainContainer1: React.FC<Props> = ({ children }) => (
  <motion.div
    variants={stagger}
    animate="animate"
    initial="inital"
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.div>
);

export const WorkContainer1: React.FC<Props> = ({ children }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2">{children}</div>
);

export const WorkLeft1: React.FC<Props> = ({ children }) => (
  <div
    className={`${style.pagesBackground} bg-opacity-100 saturate-100
    flex flex-col items-center justify-center h-[30vh] lg:min-h-screen text-white text-4xl md:text-5xl font-semibold leading-10`}
  >
    <motion.div variants={fadeInUp}>{children}</motion.div>
  </div>
);

export const WorkRight1: React.FC<Props> = ({ children }) => (
  <div
    className={`bg-white text-black lg:min-h-screen flex flex-1 lg:items-center text-center justify-center`}
  >
    <motion.div
      variants={fadeInDown}
      className="text-2xl md:text-3xl w-full max-w-md pt-10 lg:pt-0 px-0 md:px-0"
    >
      {children}
    </motion.div>
  </div>
);

export const WorkAnimation1: React.FC<Props> = ({ children }) => (
  <div className="flex flex-1 justify-center mb-[60px] h-[100px]">
    {children}
  </div>
);

export const StatusLayout = ({ props }) => {
  return (
    <>
      <MainContainer1>
        <WorkContainer1>
          <WorkLeft1>
            <WorkLink href={`${props.WorkLink}`}>{props.Name}</WorkLink>{" "}
            Integration
          </WorkLeft1>
          <WorkRight1>
            <WorkAnimation1>
              <Animation />
            </WorkAnimation1>
            <p>Status: {props.Description}</p>
            {props.Date}
          </WorkRight1>
        </WorkContainer1>
      </MainContainer1>
    </>
  );
};
