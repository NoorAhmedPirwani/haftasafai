import { useState } from 'react';
import './SignUp.css';
export function SignUp({setView}) {

    const [firstname, setFirstname] =  useState("");
    const [lastname, setLastname] =  useState("");
    const [email, setEmail] =  useState("");
    const [password, setPassword] =  useState("");
    const [age, setAge] =  useState(0);
    const [gender, setGender] =  useState("");
    const isRegistered = false;

    const register = async (data) => {
        console.log(data) 
        fetch('http://192.168.0.129:8080/haftasafai/api/register', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
            // body data type must match "Content-Type" header
          })
          .then(resp => console.log(resp.json()))

          console.log(JSON.stringify(data)) 
    }

    return (
        <div className='main-container'>
            <div className="form">
                <div className="form-body">

                    <table class="table">

                        <tbody>
                            <tr>
                                <td><label className="form__label inputFeild-Name " for="firstName">First Name </label></td>
                                <td><input className="form__input" type="text" placeholder="First Name" value={firstname} onChange={e => setFirstname(e.target.value)}/></td>
                            </tr>
                            <tr>
                                <td> <label className="form__label inputFeild-Name " for="lastName">Last Name </label></td>
                                <td> <input type="text" name="" className="form__input" placeholder="LastName" value={lastname} onChange={e => setLastname(e.target.value)}/></td>
                            </tr>
                            <tr>
                                <td> <label className="form__label inputFeild-Name " for="email">Email </label></td>
                                <td> <input type="email" className="form__input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/></td>
                            </tr>
                            <tr>
                                <td> <label className="form__label inputFeild-Name " for="password">Password </label></td>
                                <td><input className="form__input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/></td>
                            </tr>
                            <tr>
                                <td> <label className="form__label" for="Age">Age</label></td>
                                <td><input className="form__input" type="number" min={15} placeholder="Age" value={age} onChange={e => setAge(e.target.value)}/></td>
                            </tr>
                            <tr>
                                <td>     <label className="form__label" for="gender">Gender </label></td>
                                {/* <td><input type="radio" id="male" name="gender" value="male" />
                                    <label for="male">Male</label><br />
                                    <input type="radio" id="female" name="gender" value="female" />
                                    <label for="female">Female</label><br />
                                    <input type="radio" id="other" name="gender" value="other" />
                                    <label for="other">Other</label></td> */}
                                <td><input className="form__input" type="text" placeholder="Gender" value={gender} onChange={e => setGender(e.target.value)}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="footer">
                    <button type="submit" class="btn btn-success" onClick={() => register({firstname, lastname, email, password, age, gender, isRegistered})} >Register</button>
                    <button className="btn btn-secondary" onClick={() => setView("home")}>Cancel</button>
                </div>
            </div>
        </div>
    )
}