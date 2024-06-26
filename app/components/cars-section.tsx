"use client";

import {useRef, useState} from "react";
import {motion, MotionConfig, useScroll, useTransform, wrap} from "framer-motion";

import dd2Img from "../../public/img/cars/dd2.png"
import clioImg from "../../public/img/cars/Clio.png"
import supraImg from "../../public/img/cars/supra.png"
import audiImg from "../../public/img/cars/audi.png"
import radicalImg from "../../public/img/cars/radical.png"
import renaultMeganeImg from "../../public/img/cars/renault_megane.png"
import todoImg from "../../public/img/cars/todo.png"

const xOffset = 100;
const cars = [{
    imgSrc: dd2Img.src,
    name: 'dd2 rotax',
    trophies: [],
    settings: [
        {
            title: 'Power',
            value: '34 hp at 12,000 rpm',
        },
        {
            title: 'Weight',
            value: '95 kg',
        },
        {
            title: 'Acceleration',
            value: 'From 0 to 100 km/h in 3.5 sec',
        },
        {
            title: 'Special features',
            value: 'Chainless drive system, 2-speed gearbox, operated by shift paddle from the steering wheel, cylinder with electronically controlled exhaust valve',
        }
    ]

}, {
    imgSrc: renaultMeganeImg.src,
    name: 'Renault Megane R.S.',
    trophies: [],
    settings: [
        {
            title: 'Power',
            value: '250 hp at 6 500 rpm',
        },
        {
            title: 'Weight',
            value: '1 200 kg',
        },
        {
            title: 'Acceleration',
            value: 'From 0 to 100 km/h in 6.5 sec',
        },
        {
            title: 'Special features',
            value: '5 speed manual gearbox, front-wheel-drive, rollcage, racing seats',
        }
    ]
}, {
    imgSrc: clioImg.src,
    name: 'Renault Clio R.S. V (Cup)',
    trophies: ['Winning car of Clio Cup Middle East'],
    settings: [
        {
            title: 'Power',
            value: '200 hp at 6 500 rpm',
        },
        {
            title: 'Weight',
            value: '1 030 kg',
        },
        {
            title: 'Acceleration',
            value: 'From 0 to 100 km/h in 6.9 sec\n',
        },
        {
            title: 'Special features',
            value: 'Sadev ST82 SEQ, rollcage, FIA homologated\n',
        }
    ]
},
    {
        imgSrc: supraImg.src,
        name: 'Toyota Supra GT4 Evo',
        trophies: [
            'The winner of 24H Dubai GT4 Class, the first-ever winning Supra GT4 Evo in 24H Dubai GT4 Class',
            'Multiple Gulf ProCar 23-24 victories in the GT4 Class'
        ],
        settings: [
            {
                title: 'Power',
                value: '430+ hp at 6 500 rpm',
            },
            {
                title: 'Weight',
                value: '1 370 kg',
            },
            {
                title: 'Acceleration',
                value: 'From 0 to 100 km/h in 4.4 sec',
            },
            {
                title: 'Special features',
                value: 'Modified ZF transmission, GT4 FIA homologated',
            },
        ]
    },
    {
        imgSrc: radicalImg.src,
        name: 'Radical SR3 XXR/XX',
        trophies: [],
        settings: [
            {
                title: 'Power',
                value: '232 hp at 6 500 rpm',
            },
            {
                title: 'Weight',
                value: '610 kg',
            },
            {
                title: 'Acceleration',
                value: 'From 0 to 100 km/h in 3.1 sec',
            },
            {
                title: 'Special features',
                value: 'Six-speed sequential gearbox',
            }
        ]
    },
    {
        imgSrc: audiImg.src,
        name: 'Audi R8 LMS GT3 Evo II',
        trophies: [],
        settings: [
            {
                title: 'Power',
                value: '585 hp at 6 500 rpm',
            },
            {
                title: 'Weight',
                value: '1 235 kg',
            },
            {
                title: 'Acceleration',
                value: 'From 0 to 100 km/h in 3.6 sec',
            },
            {
                title: 'Special features',
                value: 'V10 engine',
            }
        ]
    }
]

export default function CarsSection() {
    const [current, setCurrent] = useState(0);
    const onPrevClick = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    }

    const onNextClick = () => {
        if (current < cars.length - 1) {
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
            newPage = wrap(0, cars.length, newPage);
            // @ts-ignore
            setCurrent(newPage, offset.x < 0 ? 1 : -1);
        }
    }
    return (
        <MotionConfig transition={{
            duration: 0.5, ease: [0.32, 0.72, 0, 1]
        }}>
            <div id="our-cars-section" className="overflow-x-hidden">
                <div className="container mx-auto py-16 mt-16 md:mt-16 lg:mt-32 relative ">
                    <CarsCaption/>
                    <div className="flex flex-col relative "                     >
                        <motion.div onDrag={detectPaginationGesture}
                                    onDragStart={() => (hasPaginated.current = false)}
                                    onDragEnd={() => (hasPaginated.current = true)}
                                    drag={"x"} dragConstraints={{left:0, right: 0}} className="flex flex-nowrap container relative">
                            <div className="absolute h-full left-0 right-0 flex items-center justify-between z-10">
                                {
                                    current > 0 ? <button className="w-4 md:w-8 hover:-translate-y-1 transition"
                                                          onClick={onPrevClick}>
                                        <svg viewBox="0 0 35 75" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M31.5 72.3428L4.5 36.3428L31.5 2.34277" stroke="currentColor"
                                                  strokeWidth="7"/>
                                        </svg>
                                    </button> : <div></div>
                                }
                                {
                                    current < cars.length - 1 ?
                                        <button className="w-4 md:w-8 hover:-translate-y-1 transition"
                                                onClick={onNextClick}>
                                            <svg viewBox="0 0 35 75" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.5 72.3428L30.5 36.3428L3.5 2.34277" stroke="currentColor"
                                                      strokeWidth="7"/>
                                            </svg>
                                        </button> : <div></div>
                                }

                            </div>
                            {
                                [...cars].map((car, idx) => (

                                    <motion.div
                                        key={idx}
                                        animate={{x: `calc(-${current * 100}%)`}}
                                        className="flex shrink-0 justify-center w-full relative ">
                                        <motion.img src={car.imgSrc} className="w-2/3 lg:max-w-3xl object-contain" alt="car" animate={{
                                            // scale: current === idx ? 1 : 0.9,
                                            scale: current === idx ? 1 : 0.90,
                                            opacity: current === idx ? 1 : 0.4,
                                        }}/>
                                    </motion.div>
                                ))
                            }
                        </motion.div>
                        <div className="flex flex-col md:flex-row items-start gap-6 lg:gap-60">
                            <div
                                className="w-full">
                                <div className="flex items-center justify-center gap-2">
                                    <h3 className="h4 border-b-[5px] border-accent">{cars[current].name}</h3>
                                </div>
                                <div className="py-6 body grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-2 max-w-4xl mx-auto">
                                    {
                                        [...cars[current].settings].map((setting, idx) => (
                                            <div
                                                className="flex flex-1 flex-col gap-1"
                                                key={idx}>
                                                <span className="body md:caption font-bold">{setting.title}</span>
                                                <span className="body md:caption ">{setting.value}</span>
                                            </div>
                                        ))
                                    }

                                    {
                                        cars[current].trophies.length ?
                                            <div className="flex flex-1 flex-col gap-1 md:col-span-2">
                                                <span className="body md:caption font-bold">Trophies</span>
                                                <div className="flex flex-col gap-0.5">
                                                    {
                                                        [...cars[current].trophies].map((trophy, idx) => (
                                                            <div key={idx} className="flex items-start gap-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                     className="size-8 text-accent shrink-0" viewBox="0 0 512 512">
                                                                    <path fill="currentColor"
                                                                          d="M392 105c.9-27 .2-56 .1-57H119.3c0 1-.8 30 .1 57H48c0 68 9.9 102.3 21 126.7S95.4 277 127.7 302c30.1 23.3 95.5 53.6 104.3 57.6v28.3c-4.6 10-23.5 28.2-83.3 28.2H128v48h256v-48h-25.7c-60.7 0-75-19.1-78.3-28.2v-28.3c9.3-4.6 80.9-40.3 104.4-57.5 25.2-18.4 50.9-51.5 58.7-70.3S464 167 464 105h-72zM109.6 211.9c-8.8-18.2-14-37.9-15.7-61.9h28.7c.7 6 1.4 11.3 2.3 16.3 6.6 39.2 14.8 70.2 25.7 96.5-17.3-13.5-31.3-30.8-41-50.9zm292.8 0c-9.9 20.3-24 37.7-41.6 51.3 11-26.2 19-56.8 25.8-96.9.8-5 1.6-10.3 2.3-16.3h29.3c-1.8 24-6.9 43.7-15.8 61.9z"/>
                                                                </svg>
                                                                <span className="body md:caption">{
                                                                    trophy
                                                                }</span>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div> : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MotionConfig>
    )
}

const CarsCaption = () => {
    const element = useRef(null);
    const {scrollYProgress} = useScroll({
        target: element,
        offset: ['start end', 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["0", "10%"])

    return (
        <motion.svg ref={element} className="absolute left-0 right-0 w-full" viewBox="0 0 1396 200" fill="none"
                    style={{top: y}}
                    xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M1233.15 155.459C1232.49 155.423 1231.82 155.387 1231.15 155.35V191.8C1250.77 193.42 1269.76 194.68 1288.12 195.58L1312.96 196.66C1323.22 197.02 1332.94 197.2 1342.12 197.2C1359.76 197.2 1372.72 193.06 1381 184.78C1389.28 176.5 1393.42 163.54 1393.42 145.9V132.4C1393.42 114.76 1389.28 101.8 1381 93.52C1372.72 85.24 1359.76 81.1 1342.12 81.1H1293.52C1282.72 81.1 1277.32 75.7 1277.32 64.9V59.5C1277.32 48.7 1282.72 43.3 1293.52 43.3H1377.49V5.5H1282.72C1263.82 5.5 1250.05 9.82 1241.41 18.46C1232.95 26.92 1228.72 40.6 1228.72 59.5V67.6C1228.72 86.5 1232.95 100.27 1241.41 108.91C1250.05 117.37 1263.82 121.6 1282.72 121.6H1344.82V145.9C1344.82 150.04 1343.56 153.37 1341.04 155.89C1338.7 158.23 1335.46 159.4 1331.32 159.4C1314.1 159.4 1281.38 158.086 1233.15 155.459ZM1342.82 123.6V145.9C1342.82 149.602 1341.71 152.392 1339.63 154.476C1337.75 156.352 1335.07 157.4 1331.32 157.4C1313.93 157.4 1280.59 156.053 1231.26 153.353L1229.15 153.238V193.642L1230.99 193.793C1250.63 195.415 1269.64 196.676 1288.02 197.578L1312.88 198.658L1312.89 198.659C1323.17 199.02 1332.92 199.2 1342.12 199.2C1360.03 199.2 1373.61 195.002 1382.42 186.194C1391.22 177.386 1395.42 163.805 1395.42 145.9V132.4C1395.42 114.495 1391.22 100.914 1382.42 92.1058C1373.61 83.2977 1360.03 79.1 1342.12 79.1H1293.52C1288.43 79.1 1284.98 77.8284 1282.79 75.6358C1280.59 73.4432 1279.32 69.9917 1279.32 64.9V59.5C1279.32 54.4083 1280.59 50.9569 1282.79 48.7642C1284.98 46.5716 1288.43 45.3 1293.52 45.3H1379.49V3.5H1282.72C1263.58 3.5 1249.17 7.86929 1240 17.0458C1231 26.0488 1226.72 40.3671 1226.72 59.5V67.6C1226.72 86.7378 1231 101.132 1239.98 110.309L1240 110.324L1240.01 110.339C1249.19 119.325 1263.58 123.6 1282.72 123.6H1342.82Z"
                  fill="#DA0A0A"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M1155.9 5.5H1042.5V194.5H1091.1V137.8H1128.9L1159.95 194.5H1212.6L1178.85 135.1C1179.52 134.931 1180.19 134.751 1180.84 134.56C1190.61 131.702 1197.78 126.392 1202.34 118.63C1207.38 110.35 1209.9 98.74 1209.9 83.8V59.5C1209.9 40.6 1205.58 26.92 1196.94 18.46C1188.48 9.82 1174.8 5.5 1155.9 5.5ZM1204.05 119.654C1199.27 127.792 1191.81 133.334 1181.85 136.345L1216.03 196.5H1158.76L1127.71 139.8H1093.1V196.5H1040.5V3.5H1155.9C1175.03 3.5 1189.34 7.8617 1198.35 17.043C1207.53 26.0457 1211.9 40.3659 1211.9 59.5V83.8C1211.9 98.915 1209.35 110.936 1204.05 119.654ZM1145.1 43.3C1155.9 43.3 1161.3 48.7 1161.3 59.5V83.8C1161.3 94.6 1155.9 100 1145.1 100H1091.1V43.3H1145.1ZM1093.1 45.3H1145.1C1150.19 45.3 1153.64 46.5716 1155.83 48.7642C1158.02 50.9569 1159.3 54.4083 1159.3 59.5V83.8C1159.3 88.8917 1158.02 92.3432 1155.83 94.5358C1153.64 96.7284 1150.19 98 1145.1 98H1093.1V45.3Z"
                  fill="#DA0A0A"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M884.557 194.5L896.707 160.75H964.207L976.357 194.5H1029.01L957.457 5.5H903.457L831.907 194.5H884.557ZM962.802 162.75L974.952 196.5H1031.9L958.839 3.5H902.076L829.012 196.5H885.963L898.113 162.75H962.802ZM908.857 125.65L930.457 62.2L952.057 125.65H908.857ZM911.651 123.65H949.264L930.457 68.4061L911.651 123.65Z"
                  fill="#DA0A0A"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M729.277 197.2C755.737 197.2 789.037 195.4 829.177 191.8V155.35C828.504 155.391 827.837 155.433 827.177 155.473C816.354 156.142 807.211 156.731 799.747 157.24C792.007 157.78 785.617 158.14 780.577 158.32L765.997 158.86C761.137 159.04 756.457 159.22 751.957 159.4H739.537C735.757 159.4 732.607 158.23 730.087 155.89C727.747 153.37 726.577 150.04 726.577 145.9V59.5C726.577 48.7 731.977 43.3 742.777 43.3H829.177V5.5H731.977C713.077 5.5 699.307 9.82 690.667 18.46C682.207 26.92 677.977 40.6 677.977 59.5V145.9C677.977 163.54 682.117 176.5 690.397 184.78C698.677 193.06 711.637 197.2 729.277 197.2ZM731.502 154.475C729.605 152.403 728.577 149.611 728.577 145.9V59.5C728.577 54.4083 729.848 50.9569 732.041 48.7642C734.233 46.5716 737.685 45.3 742.777 45.3H831.177V3.5H731.977C712.829 3.5 698.429 7.86929 689.252 17.0458C680.249 26.0488 675.977 40.3671 675.977 59.5V145.9C675.977 163.805 680.174 177.386 688.982 186.194C697.79 195.002 711.371 199.2 729.277 199.2C755.818 199.2 789.183 197.395 829.355 193.792L831.177 193.629V153.223L829.054 153.354C817.351 154.074 807.536 154.704 799.611 155.245L799.607 155.245C791.879 155.784 785.514 156.142 780.505 156.321L780.503 156.321L765.923 156.861C761.075 157.041 756.407 157.22 751.917 157.4H739.537C736.236 157.4 733.605 156.403 731.502 154.475Z"
                  fill="#DA0A0A"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M521.502 5.5H408.102V194.5H456.702V137.8H494.502L525.552 194.5H578.202L544.452 135.1C545.128 134.931 545.792 134.751 546.445 134.56C556.22 131.702 563.386 126.392 567.942 118.63C572.982 110.35 575.502 98.74 575.502 83.8V59.5C575.502 40.6 571.182 26.92 562.542 18.46C554.082 9.82 540.402 5.5 521.502 5.5ZM563.956 17.0461C554.953 7.86268 540.634 3.5 521.502 3.5H406.102V196.5H458.702V139.8H493.317L524.367 196.5H581.638L547.459 136.345C557.415 133.335 564.877 127.793 569.658 119.657C574.96 110.939 577.502 98.9167 577.502 83.8V59.5C577.502 40.3681 573.139 26.049 563.956 17.0461ZM510.702 43.3C521.502 43.3 526.902 48.7 526.902 59.5V83.8C526.902 94.6 521.502 100 510.702 100H456.702V43.3H510.702ZM458.702 45.3V98H510.702C515.793 98 519.245 96.7284 521.437 94.5358C523.63 92.3432 524.902 88.8917 524.902 83.8V59.5C524.902 54.4083 523.63 50.9569 521.437 48.7642C519.245 46.5716 515.793 45.3 510.702 45.3H458.702Z"
                  fill="#DA0A0A"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M327.102 5.5V143.2C327.102 154 321.702 159.4 310.902 159.4H270.402C259.602 159.4 254.202 154 254.202 143.2V5.5H205.602V143.2C205.602 162.1 209.832 175.87 218.292 184.51C226.932 192.97 240.702 197.2 259.602 197.2H321.702C340.602 197.2 354.282 192.97 362.742 184.51C371.382 175.87 375.702 162.1 375.702 143.2V5.5H327.102ZM325.102 3.5H377.702V143.2C377.702 162.347 373.332 176.748 364.156 185.924C355.153 194.927 340.834 199.2 321.702 199.2H259.602C240.464 199.2 226.07 194.925 216.892 185.939L216.877 185.924L216.863 185.909C207.876 176.732 203.602 162.338 203.602 143.2V3.5H256.202V143.2C256.202 148.292 257.473 151.743 259.666 153.936C261.858 156.128 265.31 157.4 270.402 157.4H310.902C315.993 157.4 319.445 156.128 321.637 153.936C323.83 151.743 325.102 148.292 325.102 143.2V3.5Z"
                  fill="#DA0A0A"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M14.2523 185.924L14.2375 185.909C5.25136 176.732 0.976562 162.338 0.976562 143.2V56.7998C0.976562 37.6669 5.24932 23.3486 14.2523 14.3456C23.4288 5.16909 37.8292 0.799805 56.9766 0.799805H124.477C143.609 0.799805 157.928 5.16236 166.931 14.3455C176.114 23.3484 180.477 37.6677 180.477 56.7998V143.2C180.477 162.347 176.107 176.748 166.931 185.924C157.928 194.927 143.609 199.2 124.477 199.2H56.9766C37.8387 199.2 23.4447 194.925 14.2673 185.939L14.2523 185.924ZM165.517 15.7598C157.057 7.1198 143.377 2.7998 124.477 2.7998H56.9766C38.0766 2.7998 24.3066 7.1198 15.6666 15.7598C7.20656 24.2198 2.97656 37.8998 2.97656 56.7998V143.2C2.97656 162.1 7.20656 175.87 15.6666 184.51C24.3066 192.97 38.0766 197.2 56.9766 197.2H124.477C143.377 197.2 157.057 192.97 165.517 184.51C174.157 175.87 178.477 162.1 178.477 143.2V56.7998C178.477 37.8998 174.157 24.2198 165.517 15.7598ZM124.412 46.064C122.22 43.8714 118.768 42.5998 113.677 42.5998H67.7766C62.6849 42.5998 59.2334 43.8714 57.0408 46.064C54.8481 48.2567 53.5766 51.7081 53.5766 56.7998V143.2C53.5766 148.292 54.8481 151.743 57.0408 153.936C59.2334 156.128 62.6849 157.4 67.7766 157.4H113.677C118.768 157.4 122.22 156.128 124.412 153.936C126.605 151.743 127.877 148.292 127.877 143.2V56.7998C127.877 51.7081 126.605 48.2567 124.412 46.064ZM113.677 40.5998C124.477 40.5998 129.877 45.9998 129.877 56.7998V143.2C129.877 154 124.477 159.4 113.677 159.4H67.7766C56.9766 159.4 51.5766 154 51.5766 143.2V56.7998C51.5766 45.9998 56.9766 40.5998 67.7766 40.5998H113.677Z"
                  fill="#DA0A0A"/>
        </motion.svg>
    )
}
