import React from 'react'
import Friendsreq from '../components/friends/Friendsreq'
import Friendslist from '../components/friends/Friendslist'
import Friendsadd from '../components/friends/Friendsadd'

const Friends = () => {
  return (
    <div>
        <Friendsreq/>
        <Friendslist/>
        <Friendsadd/>
    </div>
  )
}

export default Friends