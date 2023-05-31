import { WorkLink } from "./Work.Component";
import { StatusAnimation } from "./Animation.Component";
import { ApiDataState } from "../src/types/APIDataState";
import style from "../styles/pages.module.css";
import { motion } from "framer-motion";
import {
  stagger,
  fadeInUp,
  fadeInDown,
} from "../src/utils/framer-motion/StatusConfig";
import { useEffect, useState } from "react";

interface BoxProps {
  id?: string;
  className?: string;
  animate?: "animate" | "initial" | undefined;
  initial?: "initial" | "animate" | undefined;
  exit?: "exit" | undefined;
  variants?: any;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Box: React.FC<BoxProps> = ({
  id,
  className = "",
  animate,
  initial,
  exit,
  variants,
  children,
  style,
}) => (
  <motion.div
    id={id}
    className={className}
    variants={variants}
    animate={animate}
    initial={initial}
    exit={exit}
    style={style}
  >
    {children}
  </motion.div>
);

export const StatusLayout = (props: ApiDataState) => {
  const { date, description, name, statusColor, workLink } = props.data;

  const [height, setHeight] = useState("50vh");

  useEffect(() => {
    const handleResize = () => {
      const navbar = document.getElementById("navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      ); // Get viewport height

      setHeight(`${vh - navbarHeight}px`);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Box
        id={"MainContainer"}
        variants={stagger}
        animate={"animate"}
        initial={"initial"}
        exit={"exit"}
      >
        <Box
          id={"WorkContainer"}
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ height }}
        >
          <Box
            id={"WorkLeft"}
            className={`${style.pagesBackground} bg-opacity-100 saturate-100
            flex items-center justify-center text-white text-4xl md:text-5xl font-semibold leading-10`}
            variants={fadeInUp}
          >
            <span>
              <WorkLink href={`${workLink}`}>{name}</WorkLink> Integration
            </span>
          </Box>

          <Box
            id={"WorkRight"}
            className={`bg-white text-black flex items-center justify-center text-center`}
            variants={fadeInDown}
          >
            <Box id={"StatusContainer"} className="text-2xl md:text-3xl">
              <Box
                id={"StatusAnimation"}
                className="flex justify-center mb-[60px] h-[100px]"
              >
                <StatusAnimation statusColor={statusColor} />
              </Box>
              <p>Status: {description}</p>
              {date}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
