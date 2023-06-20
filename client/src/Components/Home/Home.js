import React from 'react'
import Banner from '../Banner/Banner'
import Feat from '../Features/Feat'
import Footer from '../Footer/Footer'
import Faq from '../Faq/Faq'
import Privacy from '../Privacy/Privacy'

export default function Home() {
  return (
    <div>
      <Banner />
      <Feat />
      <Faq />
      <Privacy />
      <Footer />
    </div>
  )
}
