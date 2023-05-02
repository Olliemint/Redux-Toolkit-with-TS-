import { useState } from 'react'

import { login } from './features/Auth-slice'
import { useAppDispatch } from './app/hook'

import './App.css'

function App() {
  const dispatch = useAppDispatch() 

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault()
   console.log("data", email, password)
   
    dispatch(login({ email, password }));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
          <label className="form-label" htmlFor="m2Example1">
            Email address
          </label>
        </div>

        <div className="m-outline mb-4">
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label">Password</label>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
              <label className="form-check-label"> Remember me </label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>
    </>
  );
}

export default App
