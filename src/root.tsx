import Actor from "./Components/Actor"
import Brand from "./Components/Brands"
import Delegatsiya from "./Components/Delegatsiya"
import Head from "./Components/Head"
import Istoriya from "./Components/Istoriya"
import Line from "./Components/Line"
import Location from "./Components/Location"
import Master from "./Components/Master"
import Media from "./Components/Media"
import Navbar from "./Components/Navbar"
import News from "./Components/NewsCarousel"
import Premier from "./Components/Premier"
import Programma from "./Components/Programma"
import TfInfo from "./Components/TfInfo"
import Trainers from "./Components/Trainers"
import Wait from "./Components/Wait"
import { Wrap } from "./style"
import Contact from "./Components/Contact"

const index = () => {
  return (
    <Wrap>
      <Navbar/>
      <Head/>
      <Line/>
      <TfInfo/>
      <Line/>
      <News/>
      <Line/>
      <Wait/>
      <Line/>
      <Actor/>
      <Line/>
      <Programma/>
      <Line/>
      <Media/>
      <Line/>
      <Premier/>
      <Line/>
      <Delegatsiya/>
      <Line/>
      <Istoriya/>
      <Line/>
      <Master/>
      <Line/>
      <Trainers/>
      <Line/>
      <Location/>
      <Line/>
      <Brand/>
      <Line/>
      <Contact/>
      <Line/>
    </Wrap>
  )
}

export default index