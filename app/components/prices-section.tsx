"use client";

import {useState} from "react";
import {motion, MotionConfig} from "framer-motion";

// const prices = ['INSTRUCTOR ON TRACK', 'TRACK DAYS ACADEMY', 'TRACK DAYS PROFESSIONAL']
const prices = [{
    title: 'INSTRUCTOR ON TRACK',
    carList: [
        {
            title: '',
            list: [
                {
                    name: 'Go-Karting (1-2 ppl)',
                    price: '400 AED/person'
                },
                {
                    name: 'Go-Karting (3+ ppl)',
                    price: '300 AED/person'
                },
                {
                    name: 'Autodrome Training',
                    price: '1 500 AED'
                },
                {
                    name: 'Racing Simulator Training',
                    price: '400 AED'
                }
            ]
        }
    ],
    small: `Car rental, track time prices are not included.\n*Rotax, Shifter, X30 etc.`
},
    {
        title: 'ACADEMY TRACK DAYS',
        carList: [
            {
                title: 'Rotax DD2',
                list: [
                    {
                        name: 'Dubai Kartdrome',
                        price: '2 300 AED'
                    },
                ]
            },
            {
                title: 'Renault Megane R.S',
                list: [
                    {
                        name: 'Dubai Autodrome',
                        price: '4 500 AED'
                    }, {
                        name: 'YAS Marina Circuit',
                        price: '5 000 AED'
                    },
                ]
            }
        ],
        small: `Car, instructor included. Track time price not included.`
    },
    {
        title: 'PROFESSIONAL TRACK DAYS',
        carList: [
            {
                title: '',
                list: [
                    {
                        name: 'Rotax DD2',
                        price: '2 300 AED'
                    },
                    {
                        name: 'Renault Clio R.S. V (Cup)',
                        price: '8 500 AED'
                    },
                    {
                        name: 'Toyota Supra GT4 EVO',
                        price: '15 000 AED'
                    },
                ]
            }
        ],
        small: `Track time price not included.
Used tyres, technical support included
`
    }
]
export default function PricesSection() {
    const [current, setCurrent] = useState(0);
    const onPrevClick = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    }

    const onNextClick = () => {
        if (current < prices.length - 1) {
            setCurrent(current + 1);
        }
    }

    return (<div className="overflow-x-hidden py-16 md:py-32">
            <MotionConfig transition={{
                duration: 0.5, ease: [0.32, 0.72, 0, 1]
            }}>
                <div className="container mx-auto">
                    <h2 className="h2 text-center mb-12">Prices</h2>
                </div>

                <div className="relative max-w-screen-xl mx-auto h-min">
                    <div
                        className="absolute text-white md:text-black h-full left-2 lg:left-0 right-2  lg:right-0 flex items-center justify-between z-10">
                        {
                            current > 0 ?
                                <button className="w-4 md:w-8 hover:-translate-y-1 transition" onClick={onPrevClick}>
                                    <svg viewBox="0 0 35 75" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31.5 72.3428L4.5 36.3428L31.5 2.34277" stroke="currentColor"
                                              strokeWidth="7"/>
                                    </svg>
                                </button> : <div></div>
                        }
                        {
                            current < prices.length - 1 ?
                                <button className="w-4 md:w-8 left-4 hover:-translate-y-1 transition"
                                        onClick={onNextClick}>
                                    <svg viewBox="0 0 35 75" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 72.3428L30.5 36.3428L3.5 2.34277" stroke="currentColor"
                                              strokeWidth="7"/>
                                    </svg>
                                </button> : <div></div>
                        }

                    </div>
                    <motion.div
                        animate={{x: `calc(-${current * 100}% - ${current}rem)`}}
                        className="flex flex-nowrap gap-4">
                        {
                            [...prices].map((price, idx) => (
                                <motion.div
                                    className="parallelogram-md w-full bg-accent text-white container shrink-0 flex justify-center items-center text-whiteshadow p-8"
                                    key={price.title}
                                    animate={{
                                        // scale: current === idx ? 1 : 0.9,
                                        y: current === idx ? '0' : '80px',
                                        x: current === idx ? '0' : '0',
                                        opacity: current === idx ? 1 : 0.5,
                                        backgroundColor: current === idx ? '#DA0A0A' : '#000000'
                                    }}
                                >
                                    <div className="flex flex-col items-start">
                                        <h3 className="h4">{price.title}</h3>
                                        <div className="border-t-[5px] border-white flex py-6 body flex-col gap-6">
                                            {
                                                [...price.carList].map((car, _) => (
                                                    <div key={car.title} className="flex flex-col gap-1">
                                                        {car.title && <span className="font-bold">{car.title}</span>}
                                                        <div className="flex">
                                                            <div
                                                                className="flex flex-col pr-4 border-r-2 border-white max-w-screen-2xl">
                                                                {
                                                                    [...car.list].map((item, _) => (
                                                                        <span key={item.name}>
                                                                            <span>{item.name}</span>
                                                                        </span>
                                                                    ))
                                                                }
                                                            </div>
                                                            <div className="flex flex-col pl-4">
                                                                {
                                                                    [...car.list].map((item, _) => (
                                                                        <span key={item.price}>{item.price}</span>
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <span
                                            className="font-light italic text-sm">{price.small}</span>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                </div>
            </MotionConfig>
        </div>
    );
}