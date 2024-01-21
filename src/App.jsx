import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState("lightBlue")
    function Color(props){
        return (

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:cursor-pointer}"
                    style={{backgroundColor: props.colour}}
            onClick={()=>{
                setColor(props.colour)
            }}>{props.colour}
            </button>
        )
    }
  return (
    <div className="w-full h-screen duration-200"
         style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                <Color colour="Red"/>
                <Color colour="Blue"/>
                <Color colour="Green"/>
                <Color colour="Yellow"/>
                <Color colour="Purple"/>
                <Color colour="Orange"/>
                <Color colour="Pink"/>
                <Color colour="Brown"/>
                <Color colour="Gray"/>
                <Color colour="Black"/>
                <Color colour="Turquoise"/>
                <Color colour="Lavender"/>
                <Color colour="Cyan"/>
                <Color colour="Maroon"/>
                <Color colour="Gold"/>
            </div>
        </div>
    </div>

  )
}

export default App
