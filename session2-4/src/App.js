import { useState } from 'react';
import './App.css';
import PhoneBookItem from './component/PhoneBookItem';

function App() {
  const storagePhoneBook = JSON.parse(localStorage.getItem('phoneBook'))
  
  const [phoneBook, setPhoneBook] = useState(storagePhoneBook ?? [])
    

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const [search, setSearch] = useState('')

  const addItem = () => {
    setPhoneBook(prev => {
      const newphoneBook = [...prev, {name:name, phoneNumber:phone}]
      const jsonPhoneBook = JSON.stringify(newphoneBook)
      //save to local storage
      localStorage.setItem('phoneBook',jsonPhoneBook)
      return newphoneBook
    })
    
    setName('')
    setPhone('')
  }

  
  const searchText = () => {
    let resultSearch = phoneBook.filter( (user) => {
      return user.name.toLowerCase().includes(search.toLocaleLowerCase()) || user.phoneNumber.includes(search)
      } );
      setPhoneBook(resultSearch)
      setSearch('')
  }

  const deleteDulicate = () => {
    if (storagePhoneBook === phoneBook) {
        const result = phoneBook.reduce((rs, user) => {
        for (let i = 0; i<rs.length; i++) {
          if (rs[i].phoneNumber === user.phoneNumber || rs[i].name === user.name) {
            
            return rs;
          }
        }
        rs.push(user);    
      
        return rs;      
        },[])
      
      localStorage.setItem('phoneBook',JSON.stringify(result))
      setPhoneBook(result)        
    } else alert('vui long reload lai trang sau do hay xoa')
  }

  return (
    <div style={{
      margin:'10px auto',
      width: 600,
      border:'1px solid gray',                     
      }}>
      <div className='container mt-4' >
                                      
          <div className='row mt-4'>
              <div className="col-4">         
                <input
                  type="text"
                  value={name}
                  className="form-control"               
                  placeholder="Ten"
                  onChange={(e) => {setName(e.target.value)}}
                />
              </div>
              <div className="col-4">         
                <input
                  type="text"
                  value={phone}
                  className="form-control"               
                  placeholder="Dien thoai"
                  onChange={(e) => {setPhone(e.target.value)}}
                />
              </div>
              <div className="col-4">    
              <button className='btn btn-primary' onClick={addItem}>Them</button>               
              </div>            
          </div>

          <div  
            style={{            
            margin:'20px 2px',
            borderTop:'1.5px solid #e3e3e3'
            }}
          >            
          </div>

          <div className='row'>
              <div className="col-6">         
                <input
                  value={search}
                  type="text"
                  className="form-control"               
                  placeholder="Tim kiem"
                  onChange={(e) => {setSearch(e.target.value)}}
                />
              </div>
              <div className="col-2">    
                <button className='btn btn-primary' onClick={searchText}>Tim</button>                           
              </div>
              <div className="col-3">                              
                <button className='btn btn-primary' onClick={deleteDulicate}>Xoa trung</button>               
              </div>
              
          </div>      
        
          <div className='row mt-4'>                    
                  
            {phoneBook
            // .filter((item) => {
            //   return item.name.includes(search) || item.phoneNumber.includes(search);
            // })         
            .map((item,index) => {
              return <PhoneBookItem key={index} item={item} />            
                
            })}

          </div>
      </div>      
    </div>
  );
}

export default App;
