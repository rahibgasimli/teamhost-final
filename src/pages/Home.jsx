import React from 'react'

import Events from '../components/home/Events'
import Communities from '../components/home/Communities'
import PopularGroups from '../components/home/PopularGroups'
import OurStore from '../components/home/OurStore'

const Home = () => {
  return (
    <div>
        <Events/>
        <Communities/>
        <PopularGroups/>
        <OurStore/>
    </div>
  )
}

export default Home