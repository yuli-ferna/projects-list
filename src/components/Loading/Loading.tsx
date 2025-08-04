import * as motion from "motion/react-client"
import { useInView, type Variants } from "motion/react"
import { useRef } from 'react';
import { useTranslation } from "react-i18next";
import Separator from "components/Separator/Separator";
import { loadingDuration } from "utils";

type Props = {}

const Loading = (props: Props) => {
  const { t } = useTranslation();
  const variant: Variants = {
    onscreen: {
      width: ["0%", "20%", "40%", "60%", "80%", "100%"],
      transition: {
        duration: loadingDuration,
      },
    },

  }
  return (
    <motion.div
      initial={{ display: "flex" }}
      animate={{ display: "none", transition: { duration: loadingDuration } }}
      className="flex flex-col justify-center items-center w-full lg:h-full min-w-[200px] max-w-[350px] relative gap-[17px] pb-10">

      <p className="self-stretch flex-grow-0 flex-shrink-0 w-full min-w-[200px] max-w-[350px] h-[37px] text-[31px] text-center text-black">
        {t("projects.loading")}...
      </p>
      <div
        className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-1.5 py-[5px] rounded-[3px] bg-white border-2 border-black"
        style={{ boxShadow: "3px 2px 0px 0 #000" }}
      >
        <motion.div
          variants={variant}
          animate={"onscreen"}
          viewport={{ amount: 0.8 }}
          className="flex-grow-0 flex-shrink-0 w-[111px] h-[19px] relative overflow-hidden rounded-[3px] bg-[#fef7c3] border-2 border-black"
        />
      </div>
    </motion.div>
  )
}

export default Loading