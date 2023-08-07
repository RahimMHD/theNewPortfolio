import { useEffect, useState } from 'react'
import './App.scss'
import About from './component/aboutMe';
import Skills from './component/skills';
import Project from './component/project';
import TimeWeather from './component/smallComponent/time&weather'
import ArrowFunc from './component/smallComponent/arrowFunc'

function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState()
  const [countPage, setcountPage] = useState(false);

  const [reloud, setReloud] = useState(false);
  const [news, setNews] = useState(null);

  const [dataWeather, setDataWeather] = useState(undefined)
  const [locationWeather, setLocationWeather] = useState("Algeria");

  const [reloudPage, setRelaudPage] = useState(false)
  const [icon, setIcon] = useState("")

  // useEffect(() => {
  //   fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-07-29&sortBy=publishedAt&apiKey=3aebc336deb54b9f8e7a7a89d071998f')
  //     .then(res => res.json())
  //     .then(res => {
  //       setNews(res);
  //       console.log(res)
  //       setRelaudPage(p => !p)
  //     })
  //     .catch(err => console.log(err));
  //   setReloud(true)
  // }, [])

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationWeather}&limit=5&appid=e3edb0e7fc06ca57f7b03955d0404d15`)
      .then(res => res.json())
      .then(res => {
        setDataWeather(res);
        setIcon(res.weather[0].icon)
      })
      .catch(err => console.log(err));
  }, [count, locationWeather]);


  useEffect(() => {

    if (dataWeather) {
      if (count == 0) {
        setcountPage(true)
        setPage(<About
          location={locationWeather}
          humidity={dataWeather.main.humidity}
          wind={dataWeather.wind.speed}
          temperatur={dataWeather.main.temp}
          news={news}
          reloud={reloudPage}
        />)

      } else if (count == 1) {
        setcountPage(false)
        setPage(<Skills />)

      } else if (count == 2) {
        setcountPage(false)
        setPage(<Project />)

      } else if (count > 2 || count < 0) {
        setcountPage(true)
        setCount(0)
        setPage(<About
          location={locationWeather}
          humidity={dataWeather.main.humidity}
          wind={dataWeather.wind.speed}
          temperatur={dataWeather.main.temp}
          news={news}
          reloud={reloudPage}
        />)
      }
    }

  }, [count, locationWeather, reloudPage])


  const handelChangeOption = () => {
    const local = document.querySelector("#select").value;
    setLocationWeather(local);;
  }


  const slidePageBack = () => {
    document.querySelectorAll(".show")
      .forEach(el => el.classList.remove("slide-in")
      )
    setTimeout(() => {
      setCount(prev => prev <= 0 ? 2 : prev - 1)
    }, 500)
  }

  const slidePagefor = () => {
    document.querySelectorAll(".show")
      .forEach(el => el.classList.remove("slide-in")
      )
    setTimeout(() => {
      setCount(prev => prev < 2 && prev + 1)
    }, 500)
  }


  return (
    <div className='App'>
      <div className="container">
        <div className='navBar'>
          <div className='bar'>
            <TimeWeather
              Weather={dataWeather && dataWeather}
              icon={dataWeather && icon}
              handelChangeOption={handelChangeOption}
            />
          </div>
        </div>
        <div className='header'>
          <div className="myName">
            <p>My Name is:</p>
            <p>Mehdi AbdArahim</p>
          </div>

          {dataWeather && page}
          <img className="myImage" src="/20230417_162301.png" alt="portfolio image" />
        </div>
        <ArrowFunc
          count={count}
          slidePagefor={slidePagefor}
          slidePageBack={slidePageBack}
        />
        <p className='Arrow'>you can click at Arrow key</p>
      </div>
    </div>
  )
}

export default App
