import './index.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function SignUp() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('Неверно введены данные')
  const navigate = useNavigate();

  //  const onSubmit = () => {
  //     var axios = require('axios');

  //     var config = {
  //       method: 'post',
  //       url: 'https://63b250a70d51f5b297272159.mockapi.io/api/v1/users',
  //       headers: { }
  //     };
      
  //     axios(config)
  //     .then(function (response) {
  //       // get access to the return data from the POST API endpoint
  //       const data = response.data
  //       navigate("/landing")
  //     })
  //     .catch(function (error) {
  //       setError(error.message)
  //     });
  //   }
  const handleSubmit = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    var raw = JSON.stringify({
      email, password, name
    })

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://63b250a70d51f5b297272159.mockapi.io/api/v1/users", requestOptions)
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

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  return (
    <div className='signupContainer'>
      <form onSubmit={handleSubmit}>
        <h2 className="form-signup-heading"> Регистрация пользователя </h2> 
        <div className="formItem">
        <label htmlFor="inputEmail" className="sr-only"> Ваше имя</label> 
        <input type="text" id="inputName" value={name} onChange={handleNameChange} className="form-control" placeholder="ФИО" required autoFocus />
        </div>
        <div className="formItem">
        <label htmlFor="inputEmail" className="sr-only"> Ваш Email</label> 
        <input type="email" id="inputEmail" value={email} onChange={handleEmailChange} className="form-control" placeholder="Email" required autoFocus />
        </div>
        <div className="formItem">
        <label htmlFor="inputPassword" className="sr-only"> Пароль</label> 
       <input type="password" minlength="8" id="inputPassword" value={password} onChange={handlePasswordChange} className="form-control" placeholder="Пароль" required />
        </div>
        
        <Link to={`/`}><button className="btn btn-lg btn-primary btn-block" type="button"> Назад </button></Link>
        <button className="btn btn-lg btn-primary btn-block" type="submit"> Зарегистрироваться </button>
        {<div className='error'>{error}</div>}
      </form>
    </div>
  );
}

export default SignUp;