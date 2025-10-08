import { useState, useEffect } from 'react';
import './auth.css';

const Auth = ({ onAuthSuccess }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSignIn(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (username && password) {
      onAuthSuccess();
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (username && password && email && confirmPassword) {
      onAuthSuccess();
    }
  };

  return (
    <div className={`container ${isSignIn ? 'sign-in' : 'sign-up'}`} id="container">
      <div className="row">
        <div className="col align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
            <div className="form sign-up">
              <form onSubmit={handleSignUp}>
                <div className="input-group">
                  <i className='bx bxs-user'></i>
                  <input 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <i className='bx bx-mail-send'></i>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input 
                    type="password" 
                    placeholder="Confirm password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button type="submit">
                  Sign up
                </button>
              </form>
              <p>
                <span>
                  Already have an account?
                </span>
                <b onClick={toggleAuthMode} className="pointer">
                  Sign in here
                </b>
              </p>
            </div>
          </div>
        </div>
        
        <div className="col align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
            <div className="form sign-in">
              <form onSubmit={handleSignIn}>
                <div className="input-group">
                  <i className='bx bxs-user'></i>
                  <input 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit">
                  Sign in
                </button>
              </form>
              <p>
                <b>
                  Forgot password?
                </b>
              </p>
              <p>
                <span>
                  Don't have an account?
                </span>
                <b onClick={toggleAuthMode} className="pointer">
                  Sign up here
                </b>
              </p>
            </div>
          </div>
          <div className="form-wrapper"></div>
        </div>
      </div>
      
      <div className="row content-row">
        <div className="col align-items-center flex-col">
          <div className="text sign-in">
            <h2>
              Welcome onboard.<br /> NBA Sports News
            </h2>
          </div>
          <div className="img sign-in"></div>
        </div>
        
        <div className="col align-items-center flex-col">
          <div className="img sign-up"></div>
          <div className="text sign-up">
            <h2>
              Join with us
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
