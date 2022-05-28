import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const AdminDashboard = () => {
    const [Data, setData] = useState([])


    const getData = () =>{
        axios.get("http://localhost:4000/users").then((res) => {
            console.table(res.data.data)
            setData(res.data.data)
    })
    }
    useEffect(() => {
    getData();
    }, [])
    
  return (
    <div>
        <label>Status</label><br/>
        {Data.map((user) =>{
              return(
                  <><Link to={`updateuser/${user._id}`} className='btn-warnning'>{user.Status}</Link></>
              )}
        )}
    </div>
  )
}
