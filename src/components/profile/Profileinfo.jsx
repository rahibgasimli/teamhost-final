import React from 'react'

const Profileinfo = () => {
  return (
    <div className="profile-info">
        <div className="profile-info-top">
            <img src="https://www.pro-theme.com/html/teamhost/assets/img/user-4.png" alt="" />
            <h1>Lester Barry</h1>
            <span>@username</span>
        </div>

        <div className="profile-info-body">
            <div className="profile-info-follow">
                <h6>24</h6>
                <span>Followers</span>
            </div>

            <div className="profile-info-post">
                <h6>12</h6>
                <span>Posts</span>
            </div>

            
        </div>

        <button className="view-my-profile">VIEW MY PROFILE</button>

    </div>
  )
}

export default Profileinfo