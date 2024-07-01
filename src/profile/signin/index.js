import './index.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const handleSubmit = () => {
    var formdata = new FormData();

    var requestOptions = {
      method: 'GET',
      body: formdata,
      redirect: 'follow'
    };

    const url = `http://localhost:3000/api/get/userprofilefromdb?email=${email}&pwd=${password}`
    fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => navigate("/landing"))
      .catch(error => setError('Неверно введены данные'));
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="form-signin-heading"> Вход в программу </h2> 
        <div className="formItem">
        <label htmlFor="inputEmail" className="sr-only"> Ваш Email </label> 
        <input type="email" id="inputEmail" value={email} onChange={handleEmailChange} className="form-control" placeholder="Email" required autoFocus />
        </div>
        <div className="formItem">
        <label htmlFor="inputPassword" className="sr-only"> Пароль</label> 
        <input type="password" id="inputPassword" value={password} onChange={handlePasswordChange} className="form-control" placeholder="Пароль" required />
        </div>
        
        <Link to={`signup`}><button className="btn btn-lg btn-primary btn-block" type="button"> Регистрация </button></Link>
        <button className="btn btn-lg btn-primary btn-block" type="submit"> Войти в прорамму </button>
        {error && <div className='error'>{error}</div>}
      </form>
    </div>
  );
}

export default SignIn;