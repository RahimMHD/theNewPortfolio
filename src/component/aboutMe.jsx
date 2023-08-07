
import { TbTemperatureCelsius } from "react-icons/tb"
import { BiWind } from "react-icons/bi"
import { GrLocation } from "react-icons/gr"
import { WiHumidity } from "react-icons/wi"
import { useEffect, useState, useRef } from "react";
import Typed from "typed.js"
import image from "../../public/20230417_162301.png"

export default function About({ location, humidity, wind, temperatur, news, reloud }) {
    const element = useRef(null);
    const [lastNews, setLastNews] = useState(null);

    useEffect(() => {
        const type = new Typed(element.current, {
            strings: ["I'm Mehdi AbdArahim", "I'm Front-End Developer"],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
        })
        return () => type.destroy();
    }, [])

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
        }
    }, [isIntersecting]);

    console.log(reloud)

    useEffect(() => {
        setLastNews(news &&
            news.articles.map((item, index) =>
                <div key={index} className="newItem">
                    <div className="imageNews">
                        <img src="/20230417_162301.png" alt="" />
                    </div>
                    <div className="textNews">
                        <p>{item.title} </p>
                    </div>
                </div>
            )
        )
    }, [reloud, wind])


    return (
        <div className="about-section">
            <div className="background-animat">
                <div className="myInformation">
                    <h1 className="welcom show" ref={refElement}>Hello</h1>
                    <h1 className="animate-text show" ref={element}></h1>
                    <p ref={refElement} className="show">mmm mmmmmmm mmmmmmm mmmmmm mmmmmmm mmmmmmm mmmmmm mmmmmmm mmmmm mmm mmm mmmmm mmmm mmmmm mmmmm</p>
                </div>
                <div className="circle show" ref={refElement}></div>

                <div className="weatherDay">
                    <div className="weath tempe show" ref={refElement}>
                        <i><TbTemperatureCelsius /></i>
                        <h3>{(temperatur - 273.15).toFixed(0)}°</h3>
                    </div>
                    <div className="weath wind show" ref={refElement}>
                        <i><BiWind /></i>
                        <h3>{(wind * 3.6).toFixed(0)}Km/h</h3>
                    </div>
                    <div className="weath humidity show" ref={refElement}>
                        <i><WiHumidity /></i>
                        <h3>{humidity}%</h3>
                    </div>
                    <div className="weath local show" ref={refElement}>
                        <i><GrLocation /></i>
                        <h3>{location}</h3>
                    </div>
                </div>

                <div className="News show" ref={refElement}>
                    {
                        news ? lastNews
                            : <div className="newItem">
                                <div className="imageNews">
                                    <img src="..\public\news-g65d700b71_1280.png" alt="" />
                                </div>
                                <div className="textNews">
                                    <p className="Louding">news </p>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}