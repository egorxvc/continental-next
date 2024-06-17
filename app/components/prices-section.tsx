"use client";

import {useEffect, useRef, useState} from "react";
import {MotionConfig, motion, wrap} from "framer-motion";

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

const xOffset = 100;
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

    const hasPaginated = useRef(false);

    // @ts-ignore
    function detectPaginationGesture(e, { offset }) {
        if (hasPaginated.current) return;
        let newPage = current;
        const threshold = xOffset / 2;

        if (offset.x < -threshold) {
            // If user is dragging left, go forward a page
            newPage = current + 1;
        } else if (offset.x > threshold) {
            // Else if the user is dragging right,
            // go backwards a page
            newPage = current - 1;
        }

        if (newPage !== current) {
            hasPaginated.current = true;
            // Wrap the page index to within the
            // permitted page range
            newPage = wrap(0, prices.length, newPage);
            // @ts-ignore
            setCurrent(newPage, offset.x < 0 ? 1 : -1);
        }
    }


    return (
        <>
            <div className="hidden xl:block container mx-auto py-16 md:py-32">
                <h2 className="h2 text-center mb-12">Prices</h2>
            <div className="flex">
                {
                    [...prices].map((price, idx) => (
                        <div
                            key={idx}
                            className="parallelogram-md flex-1 bg-gray-500 hover:bg-accent transition text-white container text-whiteshadow p-8 px-16">
                            <div className="flex flex-col justify-between h-full">
                                <h3 className="text-xl font-mono bold">{price.title}</h3>
                                <div className="border-t-[2px] border-white flex py-4 small flex-col gap-2">
                                    {
                                        [...price.carList].map((car, _) => (
                                            <div key={car.title} className="flex flex-col gap-1 h-full">
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
                                <div
                                    className="font-light italic text-sm mt-auto">{price.small}</div>
                            </div>
                        </div>
                    ))
                }
            </div>

            </div>
            <div className="overflow-x-hidden py-16 md:py-32 xl:hidden">
                <MotionConfig transition={{
                    duration: 0.5, ease: [0.32, 0.72, 0, 1]
                }}>
                    <div className="container mx-auto">
                        <h2 className="h2 text-center mb-12">Prices</h2>
                    </div>

                    <motion.div
                        onDrag={detectPaginationGesture}
                        onDragStart={() => (hasPaginated.current = false)}
                        onDragEnd={() => (hasPaginated.current = true)}
                        drag={"x"} dragConstraints={{left: 0, right: 0}}
                        className="relative max-w-screen-xl mx-auto h-min">
                        <div
                            className="absolute text-white md:text-black h-full left-2 lg:left-0 right-2  lg:right-0 flex items-center justify-between z-10">
                            {
                                current > 0 ?
                                    <button className="w-4 md:w-8 hover:-translate-y-1 transition"
                                            onClick={onPrevClick}>
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
                            className="flex flex-nowrap gap-4 items-start">
                            {
                                [...prices].map((price, idx) => (
                                    <motion.div
                                        className="parallelogram-md min-w-[100dvw] bg-accent text-white container flex justify-center items-center text-whiteshadow px-[20%] py-12"
                                        key={price.title}
                                        animate={{
                                            // scale: current === idx ? 1 : 0.9,
                                            x: current === idx ? '0' : '0',
                                            opacity: current === idx ? 1 : 0.5,
                                            backgroundColor: current === idx ? '#DA0A0A' : '#000000'
                                        }}
                                    >
                                        <div className="flex flex-col items-start w-full">
                                            <h3 className="h4">{price.title}</h3>
                                            <div className="border-t-[5px] border-white flex py-6 body flex-col gap-6">
                                                {
                                                    [...price.carList].map((car, _) => (
                                                        <div key={car.title} className="flex flex-col gap-1">
                                                            {car.title &&
                                                                <span className="font-bold">{car.title}</span>}
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
                    </motion.div>
                </MotionConfig>
            </div>
        </>
    );
}