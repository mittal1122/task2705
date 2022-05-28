import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export const Login1 = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
  
  
    var navigate = useNavigate();
  
   
    
  
  

  
    const submit = async (e) => {
      e.preventDefault();
  
      var loginData = {
        email: email,
        password: password,
      };
  
      await axios.post(`http://localhost:4000/login`, loginData).then((res) => {
          console.log(res.data.data.role._id)
        if (res.data.status == 200) {
        
          if (res.data.data.role._id == "6290aa8394fb640cce64dc9f" ) {
          
            navigate(`/admin-page`);
           
            localStorage.setItem("admin",res.data.data.role._id)
            localStorage.setItem("firstName",res.data.data.firstName)
          }
          else if(res.data.data.role._id == `6290aa9194fb640cce64dca1`){
          
            navigate( `/user-page`);
           
            localStorage.setItem("User Id",res.data.data.role._id)
            localStorage.setItem("firstName",res.data.data.firstName)
          }else{
            alert("Invalid role!!!")
          }
          
  
        }
         
      });
      
      
    };
  


    return (
        <div>
            
            <div className="tab-content">
                <div style={{"margin-top":"15%"}}>
                    <form onSubmit={submit} style={{"text-align": "center"}}>
                        
                        {/* Email input */}
                        <div className="form-outline mb-4">
                            <input type="email" id="loginName" className="form-control" placeholder="Email or username" 
                          onChange={(e) => setemail(e.target.value)}/>
                        
                        </div>
                        {/* Password input */}
                        <div className="form-outline mb-4">
                            <input type="password" id="loginPassword" className="form-control"  placeholder="Password" 
                          onChange={(e) => setpassword(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                        {/* Register buttons */}
                        <div className="text-center">
                            <p>Not a member? <Link to='/singup-page'>Register</Link></p>
                        </div>
                    </form>
                </div>
               
            </div>
        </div>



    );
};