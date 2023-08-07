import { useEffect, useRef, useState } from "react"



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
                    <img src="..\public\pngwing.com (9).png" alt="css" />
                    <p>CSS</p>
                </div>
                <div className="image-of-skills show" ref={refElement}>
                    <img src="..\public\pngwing.com (10).png" alt="html" />
                    <p>HTML</p>
                </div>
                <div className="image-of-skills show" ref={refElement}>
                    <img src="..\public\pngwing.com (11).png" alt="javascript" />
                    <p>JS</p>
                </div>
                <div className="image-of-skills show" ref={refElement}>
                    <img src="..\public\pngwing.com (12).png" alt="sass" />
                    <p>SASS</p>
                </div>
                <div className="image-of-skills show" ref={refElement}>
                    <img src="..\public\pngwing.com (14).png" alt="bootstrap" />
                    <p>Bootstrap</p>
                </div>
                <div className="image-of-skills show" ref={refElement}>
                    <img src="..\public\pngwing.com (15).png" alt="jQuery" />
                    <p>jQuery</p>
                </div>
                <div className="image-of-skills show" ref={refElement}>
                    <img src="..\public\pngwing.com (16).png" alt="react" />
                    <p>React</p>
                </div>
                <div className="image-of-skills show" ref={refElement}>
                    <img src="..\public\pngwing.com (17).png" alt="redux" />
                    <p>Redux</p>
                </div>

            </div>
        </div>
    )
}