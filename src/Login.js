import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from './Firebaseinit';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (loading) {
        return <p>Loading...</p>;
      }
      const from = location.state?.from?.pathname || "/";
      if(user ){
        console.log(user);
       
        return navigate("/");
      }
    return (
        <div>
            <form className='w-50 m-auto'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  
</form>
<button onClick={() => signInWithGoogle()} className='mt-5'>sign in with google</button>
        </div>
    
    );
};

export default Login;