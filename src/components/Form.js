import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirm, setConfirm] = useState("");  
    const [firstError, setFirstError] = useState("");
    const [lastError, setLastError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    const [confirmError, setConfirmError] = useState("");
    const [error, setError] = useState("");
    const [hasSubmit, setHasSubmit] = useState(false);

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstname, lastname, email, password };
        console.log("Welcome", newUser);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirm("");
        setError("");
        setHasSubmit(true);
    };
    const handleFirstname = (e) => {
        if (e.target.value.length < 2) {
            setFirstError("First name must be at least 2 characters");
        }
        else {
            setFirstError("");
        }
    }
    const handleLastname = (e) => {
        if (e.target.value.length < 2) {
            setLastError("Last name must be at least 2 characters");
        }
        else {
            setLastError("");
        }
    }
    const handleEmail = (e) => {
        if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters");
        }
        else {
            setEmailError("");
        }
    }
    const handlePass = (e) => {
        if (e.target.value.length < 8) {
            setPassError("Password must be at least 8 characters");
        }
        else {
            setPassError("");
        }
    }
    const handleConfirm = (e) => { 
        if (e.target.value !== password) {
            setConfirmError(" Confirm password does not match  password");
        }
        else {
            setConfirmError("")
        }
    }
    const errorMessage = (e) => 
    {e.preventDefault(); setError("Please make sure you do not have any errors or form is blank");};
    const submitMessage = () => {return hasSubmit ? "Thanks for submitting form" : "Welcome, please submit form"};
    return(
        <div className='container'>
            <form onSubmit={ firstError || lastError || emailError || passError || confirmError || firstname === "" ? errorMessage: createUser }>
                <h1><span>{ submitMessage() }</span></h1>
                <div className="input">
                    <label>First Name: </label> 
                    <input type="text" value={firstname} onChange={ (e) => { setFirstname(e.target.value); handleFirstname(e); } } />
                </div>
                { firstError ? <p> { firstError }</p> : ''}
                <div className="input">
                    <label>Last Name: </label> 
                    <input type="text" value={lastname} onChange={ (e) => {setLastname(e.target.value); handleLastname(e); }} />
                </div>
                { lastError ? <p> { lastError }</p> : ''}
                <div className="input">
                    <label>Email: </label> 
                    <input type="text" value={email} onChange={  (e) => {setEmail(e.target.value); handleEmail(e) }} />
                </div>
                { emailError ? <p> { emailError }</p> : ''}
                <div className="input">
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => {setPassword(e.target.value); handlePass(e) }} />
                </div>
                { passError ? <p> { passError }</p> : ''}

                <div className="input">
                    <label>Confirm Password: </label>
                    <input type="password" value={confirm} onChange={ (e) => {setConfirm(e.target.value); handleConfirm(e)}} />
                </div>
                { confirmError ? <p> { confirmError }</p> : ''}
                { firstError || lastError || emailError || passError || confirmError ? 
                <input type="submit" value="Create User" className="input" id = "button" disabled/>:
                <input type="submit" value="Create User" className="input" id = "button"/> }
                { error }
            </form>
            <h1>Your Form Data</h1>
            <div className = "bottom">
                <p className = "label">First Name </p>
                <p className='word'>{ firstname } </p>
            </div>
            <div className = "bottom">
                <p className = "label">Last Name  </p>
                <p className = "word"> { lastname }</p>
            </div>
            <div className = "bottom">
                <p className = "label">Email </p>
                <p className='word'> { email } </p>
            </div>
            <div className = "bottom">
                <p className = "label"> Password  </p>
                <p className='word'> { password } </p>

            </div>
            <div className = "bottom">
                <p className = "label">Confirm Password  </p>
                <p className='word'>  { confirm }</p>
            </div>
            
        </div>
        
    );
};
    
export default UserForm;
