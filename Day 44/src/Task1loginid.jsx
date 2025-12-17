import react, { useState } from 'react';
export default function Task1_loggedin() {
    const [singup, setSingup] = useState(false);
    const [login, setLogin] = useState(false);
    function showloginalert() {
        alert("logged in successfully")
    }
    function showsingupalert() {
        alert("signed up successfully")
    }
    function loginfield() {
        return (
            <>
                <fieldset>
                    <form action="">
                        <legend>
                            Login Form
                        </legend>
                        <input type="text" placeholder='Enter your userid/Email id' />
                        <input type="text" placeholder='enter your password' /><br />
                        <button onClick={showloginalert}>submit</button>
                    </form>

                </fieldset>
            </>
        )
    }
    function signupfield() {
        return (
            <>
                <fieldset>
                    <form action="">
                        <legend>
                            Signup Form
                        </legend>
                        <input type="text" placeholder='Enter your userid/Email id' />
                        <input type="text" placeholder='set your password' /><br />
                        <button onClick={showsingupalert}>submit</button>
                    </form>
                </fieldset>
            </>
        )
    }
    return (
        <>
            <div>
                <button onClick={() => setLogin(!login)}>{login ? "login" : "login"}</button>
                <h2>{login ? loginfield() : ""}</h2>

                {/* <h2>create new account</h2> */}
                <button onClick={() => setSingup(!singup)}>{singup ? "signup" : "signup"}</button>
                <h2>{singup ? signupfield() : ""}</h2>
            </div>

        </>
    )
}