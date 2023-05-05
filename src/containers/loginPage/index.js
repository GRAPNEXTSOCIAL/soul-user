import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import logo from "../../images/logo/logo.png";
import Login from '../../components/Login';
import { MaterialButton, MaterialInput } from '../../components/MaterialUi';
import { login } from '../../actions';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const userLogin = () => {
          dispatch(login({ email, password }));
      };
      useEffect(() => {
        if (auth.authenticate) {
          history.push('/');
        }
      }, [auth.authenticate]);
  return (
    <div>
      <div className="authContainer">
          <div className="row" style={{"backgroundColor":"#cb8364"}}>
            <div className="leftspace">
              <h2>Login</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>

            <div className="rightspace">
              <span className="loginProfileDesign">
                <img src={logo} alt={``} />
              </span>

              <h1>Welcome to Soulbyindian</h1>
              <div className="loginInputContainer">
                {auth.error && (
                  <div style={{ color: "red", fontSize: 18 }}>{auth.error}</div>
                )}
                

                <MaterialInput
                  type="text"
                  label="Email/Mobile Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MaterialInput
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  style={{
                    display: "flex",
                    margin: "3rem 0 0 0",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <MaterialButton
                    title="Login"
                    textColor="#ffffff"
                    style={{
                      width: "180px",
                    }}
                    onClick={userLogin}
                  />
                  <p style={{ textAlign: "center", margin: "0" }}>OR</p>
                  <Login
                    style={{
                      width: "180px",
                    }}
                    buttonText="Goodle Login"
                    
                  />
                </div>
                
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "1rem 0 0 0",
                    }}>
                    <a
                      style={{
                        fontSize: ".8rem",
                        fontWeight: "700",
                        letterSpacing: "1px",
                        color: "#cb8364",
                      }}
                      href="/forgot-password">
                      Forgot password?
                    </a>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LoginPage
