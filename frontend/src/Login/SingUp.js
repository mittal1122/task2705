import axios from "axios";
import React, { useState } from "react";

export const SingUp =  () => {
    const [FirstName, setFirstName] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [LastName, setLastName] = useState('');
    const [City, setCity] = useState('');
    const [Gender, setGender] = useState('');
    const [Hobbies, setHobbies] = useState('');
    const submit = async (e) =>  {
        e.preventDefault()

        var Data = {
            FirstName: FirstName,
            LastName: LastName,
            City: City,
            Gender: Gender,
            Hobbies: Hobbies,
            Email: email,
            password: password,
            role: "6290aa9194fb640cce64dca1",
            Status: "Pending",
        };

      await axios.post("http://localhost:4000/users", Data).then((res) => {
        // alert("Users Registered");
        console.log(res.data.data.FirstName)
        // console.log(res.data.data.LastName)
        // console.log(res.data.data.Email)
        // console.log(res.data.data.password)
        // console.log(res.data.data.Gender)
        

        

        });


    };



    return (
        <>
            <div style={{ "marginTop": "15%" }}>
                <form onSubmit={submit} style={{ "text-align": "center" }}>

                    {/* Name input */}
                    <div className="form-outline mb-4">
                        <label >
                            First Name
                            <span className="required_star">*</span>
                        </label>
                        <input type="text" id="registerName" className="form-control" placeholder="Enter Firstname"
                            onChange={(e) => setFirstName(e.target.value)} />
                    </div>

                    {/* Name input */}
                    <div className="form-outline mb-4">
                        <label >
                            Last Name
                            <span className="required_star">*</span>
                        </label>
                        <input type="text" id="registerName" className="form-control" placeholder="Enter Lastname"
                            onChange={(e) => setLastName(e.target.value)} />
                    </div>

                    {/* Email input */}
                    <div className="form-outline mb-4">
                        <label >
                            Email
                            <span className="required_star">*</span>
                        </label>
                        <input type="email" id="registerEmail" className="form-control" placeholder="Enter Email"
                            onChange={(e) => setemail(e.target.value)} />
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                        <label >
                            Password
                            <span className="required_star">*</span>
                        </label>
                        <input type="password" id="registerPassword" className="form-control" placeholder="Enter Password"
                            onChange={(e) => setpassword(e.target.value)} />
                    </div>

                    {/* City */}
                    <div>
                        <div className="form-group" data-select2-id="55"></div>
                        <label >
                            City
                            <span className="required_star">*</span>
                        </label>
                        <select
                            className="form-control form-control-lg  select2 select2-hidden-accessible "
                            data-select2-id="9"
                            aria-hidden="true"
                            tabindex="-1"
                            onChange={(e) => setCity(e.target.value)}
                        >
                            <option selected>Ahmedabad</option>
                            <option selected>Surat</option>
                            <option selected>Baroda</option>
                            <option selected>Anand</option>

                        </select>
                    </div>


                    {/* Hobbies */}
                    <div>
                        <label >
                            Hobbies
                            <span className="required_star">*</span>
                        </label>
                        <br />
                        <input type="checkbox" name="cricket" value="Cricket" onChange={(e) => setHobbies(e.target.value)} />
                        <label for="vehicle1"> Cricket</label>
                        <input type="checkbox" name="football" value="Football" onChange={(e) => setHobbies(e.target.value)} />
                        <label for="vehicle2"> Football</label><br />
                        <input type="checkbox" name="chess" value="Chess" onChange={(e) => setHobbies(e.target.value)} />
                        <label for="vehicle3"> Chess</label>
                        <input type="checkbox" name="volleyball" value="Volleyball" onChange={(e) => setHobbies(e.target.value)} />
                        <label for="vehicle3"> Volleyball</label><br /><br />
                    </div>
                    

                    {/* Gender */}
                    <div>
                    <label >
                            Gender
                            <span className="required_star">*</span>
                        </label>
                        <input type="radio"  name="gender" value="Male" onChange={(e) => setGender(e.target.value)} />                        <label >Male</label><br />
                        <input type="radio" name="gender" value="Female"onChange={(e) => setGender(e.target.value)} />
                        <label >Female</label><br />
                    </div>
                    {/* Submit button */}
                    <div>
                        <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
                    </div>
                </form>
            </div>
        </>
    )
}