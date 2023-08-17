
import { useEffect, useRef, useState } from "react"

export default function Message() {

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
        <div className="contact-me-section show">
            <div className="circle-contact"></div>
            <form action="https://formsubmit.co/mahdirahim0107@gmail.com" method="POST" className="recruter show" ref={refElement}>
                <div className="recruter-desc" >
                    <input type="text" placeholder="First Name" className="rucruter-message" required/>
                    <input type="text" placeholder="Last Name" className="rucruter-message" required/>
                </div>
                <input type="email" placeholder="Email" id="email" className="rucruter-message" required/>
                <textarea placeholder="text Message" id="message" rows="6" className="rucruter-message" required></textarea>
                <input type="submit" id="btn-msg" value="Send Message"/>
            </form>
        </div>
    )
}

