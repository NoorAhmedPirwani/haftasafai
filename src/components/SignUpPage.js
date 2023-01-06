import './SignUp.css';
export function SignUp() {
    return (
        <div className='main-container'>
            <div className="form">
                <div className="form-body">

                    <table class="table">

                        <tbody>
                            <tr>
                                <td><label className="form__label inputFeild-Name " for="firstName">First Name </label></td>
                                <td><input className="form__input" type="text" id="firstName" placeholder="First Name" /></td>
                            </tr>
                            <tr>
                                <td> <label className="form__label inputFeild-Name " for="lastName">Last Name </label></td>
                                <td> <input type="text" name="" id="lastName" className="form__input" placeholder="LastName" /></td>
                            </tr>
                            <tr>
                                <td> <label className="form__label inputFeild-Name " for="email">Email </label></td>
                                <td> <input type="email" id="email" className="form__input" placeholder="Email" /></td>
                            </tr>
                            <tr>
                                <td> <label className="form__label inputFeild-Name " for="password">Password </label></td>
                                <td><input className="form__input" type="password" id="password" placeholder="Password" /></td>
                            </tr>
                            <tr>
                                <td> <label className="form__label" for="Age">Age</label></td>
                                <td> <select name="age" id="age">
                                    <option value="less then 18">less 18</option>
                                    <option value="18-20">18-20</option>
                                    <option value="21-25">21-25</option>
                                    <option value="26-30">26-30</option>
                                    <option value="31-35">31-35</option>
                                    <option value="36-40">36-40</option>
                                    <option value="above 40">Above 40</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td>     <label className="form__label" for="gender">Gender </label></td>
                                <td><input type="radio" id="male" name="gender" value="male" />
                                    <label for="male">Male</label><br />
                                    <input type="radio" id="female" name="gender" value="female" />
                                    <label for="female">Female</label><br />
                                    <input type="radio" id="other" name="gender" value="other" />
                                    <label for="other">Other</label></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="footer">
                    <button type="submit" class="btn btn-success">Register</button>
                </div>
            </div>
        </div>
    )
}