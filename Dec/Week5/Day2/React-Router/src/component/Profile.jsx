import React from 'react'
import { useSearchParams } from 'react-router'

function Profile() {
    let [searchParam] = useSearchParams()

    let search = searchParam.get("search");
    let cata = searchParam.get("cata");

    console.log(search);
    console.log(cata);
    
    
  return (
    <div>
      Profile

      <br />
      
    </div>
  )
}

export default Profile
