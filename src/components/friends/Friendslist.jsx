import React,{useState,useEffect} from 'react'
import Friendscard from './Friendscard'

const Friendslist = () => {
  
    
    const [melumatlar,setMelumatlar] = useState([])
    
    
    useEffect(function(){
        fetch('src/friendscard.json')
            .then((melumatlar)=>melumatlar.json())
            .then(frontunAnlayacagiForma=>setMelumatlar(frontunAnlayacagiForma))
    }, [])
  


  
  
    return (

        <div className="friends-list">


        {melumatlar.map(birMelumat=>(
            <Friendscard friendsLogo={birMelumat.friends_logo} friendsName={birMelumat.friends_name} friendsGame={birMelumat.friends_game}/>
        ))}

        </div>

  )
}

export default Friendslist