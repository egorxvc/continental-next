import { motion } from "framer-motion"
import {staggerChildren, wordAnimation} from "@/app/utils/animations";
import { Key } from "react";

export const AnimatedWords = ({title}: {title: string}) => {
    return (
        <motion.span variants={staggerChildren}>
            {title.split(" ").map((word: string, index: Key | null | undefined) => {
                return (<div  className="inline-block overflow-hidden" key={index}>
                    <motion.span variants={wordAnimation} className="inline-block overflow-hidden">{word + "\u00A0"}</motion.span>
                </div>)
            })}
        </motion.span>
    )
}