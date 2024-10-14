import { useState , useContext} from 'react';


const Login = () => {
  // const islog = useContext(userContext);
  const [uname, setname] = useState("");
  const [password, setpassword] = useState("");
  const [message , setMessage] = useState("");
  
  const url = "http://localhost:5000/api/users/login";
  const fetchInfo = async (userData) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (data.login) {
        // navigate('/dashboard');
      } else {
        setMessage("Invalid Username or Password..")
      }

    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Replace 'uname' and 'password' with correct keys expected by your API
    const userData = { name: uname, password }; 
    fetchInfo(userData);
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      {/* <h1>{islog}</h1> */}
      <h2>Login</h2>
      <div className="form-group">
        <label>Username</label>
        <input
          name="username"
          className="form-control"
          placeholder="Enter username"
          value={uname} // Always bind input values
          onChange={(e) => setname(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          name="password"
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password} // Always bind input values
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
      <p style={{color:'red'}}>{message}</p>
    </form>
  );
};

export default Login;
