import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import WomenCollection from '../components/WomenCollection'
import { Gents,Ladies } from '../data'

const MainPage = () => {
    const [gents, setGents] = useState(Gents)
    const [ladies, setLadies] = useState(Ladies)
    console.log(Gents)
    console.log(Ladies)
  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion={gents} />
      <WomenCollection ladiesFashion={ladies}/>
      <Footer />
    </div>
  )
}

export default MainPage
