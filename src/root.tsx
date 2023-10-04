import Actor from "./Components/Actor"
import Head from "./Components/Head"
import Line from "./Components/Line"
import Navbar from "./Components/Navbar"
import News from "./Components/NewsCarousel"
import Programma from "./Components/Programma"
import TfInfo from "./Components/TfInfo"
import Wait from "./Components/Wait"
import { Wrap } from "./style"

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
    </Wrap>
  )
}

export default index