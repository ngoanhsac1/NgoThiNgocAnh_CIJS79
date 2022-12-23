//Index.js import component này vào đồng thời đưa component vào Index.js mới chạy dc chương trình

import {useState} from 'react'

const lights = ['red','green', 'yellow']

function LightTraffic() {
  const [light, setLight] = useState('red')
  const handleClick = () => {
    if (light === "red") {
      setLight('green')
    } else if ( light === 'green') {
      setLight('yellow')      
    } else (setLight('red'))
  }
  
  return (
    <div style={{margin: '10px 20px'}}>
           <button onClick={handleClick}> Next</button>
           
            <div style={{display:'flex'}}>
              {lights.map(((color,index) => (
                <div key = {index} 
                  style={{
                    margin:'20px 10px' ,
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    backgroundColor:
                     color === light ? light :'' 
                    ,
                    border: "1px solid black"
                  }}>
                </div> 
              )))}             
               
            </div >
      </div>
  );
}

export default LightTraffic;
