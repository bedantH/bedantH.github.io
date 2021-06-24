import { useEffect } from 'react';
import landing from "../styles/Landing.module.css";
import Image from "next/image"
import Typed from 'typed.js';

export default function Landing() {

    useEffect(() => {
        var typed = new Typed('.dynamic-type', {
            strings: ["developer", "designer", "entrepreneur"],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
        });
    }, [])

    return (
        <div className={landing.container}>
            <section className={landing.leftWrapper}>
                <svg width="416" height="487" viewBox="0 0 416 487" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-45.4835 30.5161C-306.166 99.1419 -226.608 300.701 -154.243 392.902C-134.112 451.374 83.8911 479.997 190.376 487C287.194 467.743 416 429.666 416 362.703C416 287.439 342.631 150.874 322.168 99.2294C290.606 19.5745 215.199 -38.1096 -45.4835 30.5161Z" fill="#EFEFEF" fillOpacity="0.62" />
                    <path d="M-118.491 86.7564C-328.338 146.927 -264.294 323.654 -206.042 404.495C-189.836 455.763 -14.345 480.86 71.3747 487C149.312 470.115 253 436.73 253 378.017C253 312.025 193.938 192.286 177.466 147.004C152.059 77.1628 91.357 26.5856 -118.491 86.7564Z" fill="#EFEFEF" />
                </svg>
                <div className={landing.contentWrapper}>
                    <h1 className={landing.heading}>
                        Hola !, <br /> I'm Bedant Hota
                    </h1>
                    <h3 className={landing.subHeading}>
                        I’m a <span className="dynamic-type"></span>.
                    </h3>
                </div>
            </section>
            <section className={landing.rightWrapper}>
                <center>
                    <Image
                        className={landing.rightImage}
                        src="/hero.png"
                        width="754px"
                        alt="Subordinate Image"
                        height="630px" />
                </center>
            </section>
        </div>
    )
}
