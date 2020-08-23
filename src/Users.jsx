import React,{useState,useEffect} from 'react'
import './App.css';
function Users() {
    const [data, setData] = useState([])
    const [mode, setMode] = useState('online')
    useEffect(()=>{
        let url='https://jsonplaceholder.typicode.com/users';
        fetch(url).then((response)=>{
            response.json().then((res)=>{
                console.log('res',res)
                setData(res)
                localStorage.setItem("users",JSON.stringify(res))
            })
        }).catch(err=>{
            let offlineData = localStorage.getItem("users")
            setData(JSON.parse(offlineData))
            setMode('offline')
        })
    },[])
    if(data.length===0){
        return <h1>loading</h1>
    }
    return (
        <div>
            <div>
                {
                    mode==='offline'?
                    <div> you are offline</div>
                    :null
                }
            </div>
            <h1>Users page</h1>
            {data.map((item,ind)=>{
                return(
                    <div key={item.id} className='center'>
                    <h3 >{item.name}</h3>
                 </div>
                )
                
            })}
        </div>
    )
}

export default Users
