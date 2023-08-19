
import { useEffect, useRef, useState } from "react"
import emailjs from '@emailjs/browser'

export default function Message() {

    const [isIntersecting, setIsIntersecting] = useState(false)
    const refElement = useRef(null);
    const refForm = useRef();

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

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_5orbjkb" ,"template_3akhsna" ,refForm.current, "xbKovPP6fy1UMn-Y0")
            .then(res => console.log(res))
            .catch(err => console.log(err));
        
        e.target.reset();
    }


    return (
        <div className="contact-me-section show">
            <div className="circle-contact"></div>
            <div className='contact-information'>
                <div className="contact-info show">
                    <div className='contact-info-text'>
                        <h3>Contact Information</h3>
                        <p>Fill up the form & i will get back to you within 24 hours</p>
                    </div>

                    <div className='contact-personnel'>
                        <div >
                            <i className="fa-solid fa-phone"></i>
                            <p>+2135 4918 1325</p>
                        </div>
                        <div>
                            <i className="fa-solid fa-envelope"></i>
                            <p>mahdirahim0107@gmail.com</p>
                        </div>
                        <div>
                            <i className="fa-solid fa-location-dot"></i>
                            <p>Algeria, Bordj Bou Ariridj</p>
                        </div>
                    </div>

                    <div className='contact-media'>
                        <a href='https://www.linkedin.com/in/abdarahim-mehdi-338349202/' className='linkedin'><i className="fa-brands fa-linkedin"></i></a>
                        <a href='https://twitter.com/MahdiRahim07' className='twitter'><i className="fa-brands fa-x-twitter"></i></a>
                        <a href='https://github.com/RahimMHD' className='github'><i className="fa-brands fa-github"></i></a>
                    </div>

                </div>
                <form id='myForm' ref={refForm} onSubmit={sendEmail}>
                    <div className="recruter show" ref={refElement}>
                        <h3>Contact Form</h3>
                        <div className="recruter-desc" >
                            <input name='first-name' type="text" placeholder="First Name" required/>
                            <input name='last-name' type="text" placeholder="Last Name" required/>
                        </div>
                        <input name='userEmail' type="email" placeholder="Email" id="email" required/>
                        <textarea name='message' placeholder="text Message" id="message" rows="4" required></textarea>
                        <input type="submit" id="btn-msg" value="Send Message"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

