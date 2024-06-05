"use client"

import {useRef} from "react";
import {motion, useScroll} from "framer-motion";

export default function FadeInScroll({children}: {children: any}) {
    const element = useRef(null);
    const {scrollYProgress} = useScroll({
        target: element,
        offset: ['start 0.9', 'start center']
    })

    return (
        // @ts-ignore
        <motion.div ref={element} style={{opacity: scrollYProgress}}>
            {children}
        </motion.div>
    )
}