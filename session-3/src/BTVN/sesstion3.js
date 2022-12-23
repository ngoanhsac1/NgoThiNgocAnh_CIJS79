
const tasks = [
    {
        id:1,
        name: 'Clean up bedroom'
    },
    {
        id: 2,
        name: 'Buy some milk'
    },
    {
        id: 3,
        name: 'Jogging' 
    },
    {
        id: 4,
        name: 'Learn React'
    },
    {
        id: 5,
        name: 'Doing Excercise'
    }
  ]
  
  function TaskAssign ({name}) {
    return (
      <div>
        <input type="radio"/>
        <label style={{marginLeft:10, color:'#555', fontSize:14, position:'relative', top:'-2px'}}>{name}</label>
      </div>
    )
  }
  
  function Session3() {
     
    return (
      <div style={{margin: '30px 50px', width:300}}>
          <div 
              style={{
                  borderBottom:'1px solid rgb(226, 226, 226)',
                  width:300,
                  marginBottom: 20,
              }}
              >
              <input 
                style={{border:'none'}} 
                type="text" 
                placeholder="Enter your task here" />
          </div>           
             {tasks.map ((task) => {
              
              return (
                <TaskAssign 
                key={task.id}
                name={task.name}
                />
                    )
                  })
                }
          
          <div 
          style={{
            display:'flex',
            justifyContent:'space-between',
            marginTop:60,
            fontSize:14,
            color:'grey'
          }}
          >         
            <div>{tasks.length} tasks left!</div>     
            <div>MindX todolist</div>
          </div>
      </div>
    );
  }
  
  export default Session3;
