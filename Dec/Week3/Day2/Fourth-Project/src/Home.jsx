import React from 'react'

function Home(props) {
  return (
    <div>
      HomePAge

      value :{props.value}
      {props.children}
    </div>
  )
}

export default Home
