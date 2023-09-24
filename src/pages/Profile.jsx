import React from 'react'
import Profilebanner from '../components/profile/Profilebanner'
import Overview from '../components/profile/Overview'
import Profileinfo from '../components/profile/Profileinfo'
import Comment from '../components/profile/Comment'
import Myfriends from '../components/profile/Myfriends'
import Mygroups from '../components/profile/Mygroups'
import Commentarea from '../components/profile/Commentarea'

const Profile = () => {
  return (
    <div className='profile-page'>

      <div className="profile-left">
        <Profilebanner/>
        <Overview/>
        <Comment/>
        <Commentarea/>
      </div>


      <div className="profile-right">
        <Profileinfo/>
        <Myfriends/>
        <Mygroups/>
      </div>
      
      
    </div>
  )
}

export default Profile