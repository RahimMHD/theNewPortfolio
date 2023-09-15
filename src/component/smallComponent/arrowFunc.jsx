import { useState, useEffect } from "react"
import { AiOutlineLeft } from "react-icons/ai"
import { AiOutlineRight } from "react-icons/ai"

export default function ArrowFunc({ count, slidePageBack, slidePagefor }) {

    const [click, setClick] = useState(false);

    const keyPressFunc = (e) => {
        if (!click) {
            if (e.key == "ArrowRight") {
                if (count < 3) {
                    slidePagefor()
                }

            } else if (e.key == "ArrowLeft") {
                if (count === 0) {
                    slidePageBack();
                }

            }
            setClick(true)
        }
    }

    useEffect(() => {
        window.addEventListener("keyup", keyPressFunc);
    }, [click])

    return (
        <div className='slid'>
            {count > 0 &&
                <button className='slide-backward' onClick={() => slidePageBack()}>
                    <i>
                        <AiOutlineLeft />
                    </i>
                </button>
            }
            {count < 3 &&
                <button className='slide-forward' onClick={() => slidePagefor()}>
                    <i>
                        <AiOutlineRight />
                    </i>
                </button>
            }
        </div>
    )
}