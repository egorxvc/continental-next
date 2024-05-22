"use client"

import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";

export default function Paragraph({children}: {children: any}) {
    const element = useRef(null);
    const {scrollYProgress} = useScroll({
        target: element,
        offset: ['start 0.9', 'start center']
    })

    return (
        // @ts-ignore
        <motion.p className="" ref={element} style={{opacity: scrollYProgress}}>
            {children}
        </motion.p>
    )
}