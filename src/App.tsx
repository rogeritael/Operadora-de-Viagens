import './global.css'

import { useState } from 'react';
import { About } from "./components/large/About"
import { AppLimiter } from "./components/large/AppLimiter"
import { Contact } from "./components/large/Contact"
import { Cover } from "./components/large/Cover"
import { Destinations } from "./components/large/Destinations"
import { Footer } from "./components/large/Footer"
import { ModalMenu } from "./components/large/ModalMenu"
import { WhyUs } from "./components/large/WhyUs"
import { BookingForm } from "./components/medium/BookingForm"
import { Header } from "./components/medium/Header"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <AppLimiter>
      <ModalMenu isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <Header setIsModalOpen={setIsModalOpen} />
      <Cover />
      <BookingForm />
      <About />
      <WhyUs />
      <Destinations />
      <Contact />
      <Footer />
    </AppLimiter>
  )
}

export default App
