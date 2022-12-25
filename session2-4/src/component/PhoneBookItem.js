const PhoneBookItem = ({item}) => {
    return (
    <div className=""
        style={{
            boxSizing:"border-box",
            width:'96%',
            margin:'20px 10px 5px 10px',           
            display:'flex',
            justifyContent:"space-between",
            padding: '10px 10px',
            backgroundColor: 'rgb(243 243 243)',
            borderRadius: '10px',  
        }}
    >
        <div className="" style={{textAlign:"center"}}>{item.name}</div>
        <div className="" style={{textAlign:"center"}}>{item.phoneNumber}</div>
    </div>
    )
}

export default PhoneBookItem;