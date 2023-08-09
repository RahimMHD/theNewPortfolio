
import { useState, useEffect, useRef } from "react";

export default function Project() {

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
        <div className="project-section">
            <div className="circle-of-project"></div>
            <div className="allProject">
                <div className="project show" ref={refElement}>
                    <div className="project-info one">
                        <a href="https://musical-griffin-83244e.netlify.app" target="_blanc"><input type="button" value="Demo" /></a>
                        <a href="https://github.com/RahimMHD/Dashbord-Cars" target="_blanc"><input type="button" value="Code" /></a>
                    </div>
                </div>
                <div className="project show" ref={refElement}>
                    <div className="project-info two">
                        <a href="https://effortless-semolina-4f122c.netlify.app" target="_blanc"><input type="button" value="Demo" /></a>
                        <a href="https://github.com/RahimMHD/project-portfolio-template" target="_blanc"><input type="button" value="Code" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}