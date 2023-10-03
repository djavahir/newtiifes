import Head from "./Components/Head"
import Navbar from "./Components/Navbar"
import TfInfo from "./Components/TfInfo"
import { Wrap } from "./style"

const index = () => {
  return (
    <Wrap>
      <Navbar/>
      <Head/>
      <TfInfo/>
    </Wrap>
  )
}

export default index