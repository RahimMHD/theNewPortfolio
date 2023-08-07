import { useEffect, useRef, useState } from "react"
import html from "../../public/pngwing.com (10).png"
import Css from "../../public/pngwing.com (9).png"
import Javascript from "../../public/pngwing.com (11).png"
import Sass from "../../public/pngwing.com (12).png"
import Bootstrap from "../../public/pngwing.com (14).png"
import jQuery from "../../public/pngwing.com (25).png"
import react from "../../public/pngwing.com (16).png"
import Redux from "../../public/pngwing.com (17).png"


export default function Skills() {

    const [isIntersecting, setIsIntersecting] = useState(false)
    const refElement = useRef(null);


    useEffect(() => {
        const interObserve = new IntersectionObserver(([entries]) => {
            setIsIntersecting(entries.isIntersecting);
        })
        interObserve.observe(refElement.current);
        return () => interObserve.disconnect();
    }, [])

    useEffect(() => {
        if (isIntersecting) {
            document.querySelectorAll(".show").forEach(el => {
                el.classList.add("slide-in");
            })
        } else {
            document.querySelectorAll(".show").forEach(el => {
                el.classList.remove("slide-in");
            })
        }
    }, [isIntersecting]);

    return (
        <div className="skills-section">
            <div className="circle-of-skills show" ref={refElement}></div>
            <div className="mySkills">
                <div className="image-of-skills show" ref={refElement}>
                    <img src={Css} alt="" />
                    <p>CSS</p>
                </div>
                <div className="image-of-skills show" ref={refElement}>
                    <img src={html} alt="" />
                    <p>HTML</p>
                </div>
                <div className="image-of-skills show" ref={refElement}>
                    <img src={Javascript} alt="" />
                    <p>JS</p>
                </div>
                <div className="image-of-skills show" ref={refElement}>
                    <img src={Sass} alt="" />
                    <p>SASS</p>
                </div>
                <div className="image-of-skills show" ref={refElement}>
                    <img src={Bootstrap} alt="" />
                    <p>Bootstrap</p>
                </div>
                <div className="image-of-skills show" ref={refElement}>
                    <img src={jQuery} alt="" />
                    <p>jQuery</p>
                </div>
                <div className="image-of-skills show" ref={refElement}>
                    <img src={react} alt="" />
                    <p>React</p>
                </div>
                <div className="image-of-skills show" ref={refElement}>
                    <img src={Redux} alt="" />
                    <p>Redux</p>
                </div>

            </div>
            <div className="match-of-day">

            </div>
            <div className="weather-citys">

            </div>
        </div>
    )
}