
import { useEffect, useState } from "react";

export default function DateWeather({ Weather, icon, location, handelChangeOption }) {

    const [time, setTime] = useState(new Date());

    const second = time.getSeconds();
    const minutes = time.getMinutes();
    const hour = time.getHours();
    const hourDay =
        time.getHours() > 4 & time.getHours() <= 12
            ? 'Good Morning'
            : time.getHours() > 12 & time.getHours() < 18
                ? "Gppd Afternoon"
                : "Good Evening";

    const Weekday = time.toLocaleString("default", { weekday: 'short' });
    const day = time.toLocaleString("default", { day: '2-digit' });
    const month = time.toLocaleString("default", { month: "short" })


    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(timer);

    },)

    return (
        <>
            <ul>
                <li>{hourDay}</li>
                <li>{Weekday} {day} {month}</li>
            </ul>
            <ul>
                <li id='icon'>{Weather && <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />}</li>
                <li>
                    {hour < 10 ? `0${hour}` : hour}:
                    {minutes < 10 ? `0${minutes}` : minutes}:
                    {second < 10 ? `0${second}` : second}
                </li>
                <select id="select" defaultValue={"Algeria"} onChange={() => handelChangeOption()}>
                    <option disabled></option>
                    <option>Algeria</option>
                    <option>London</option>
                    <option>Paris</option>
                    <option>Montreal</option>
                    <option>California</option>
                    <option>Tokyo</option>
                    <option>Johannesburg</option>
                    <option>Dubai</option>
                </select>
            </ul>
        </>
    )
}