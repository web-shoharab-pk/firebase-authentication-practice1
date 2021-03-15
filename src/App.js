
import './App.css';
import logo from './images/logo2.png'

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-3">
          <div className="input-form">
            <div>
              <img src={logo} alt="" /> 
            <input type="text" className="form-control my-3" placeholder="name" />
            <input type="email" className="form-control my-3" placeholder="name@example.com" />
            <input type="password" className="form-control my-3" placeholder="new password" />
            <input type="password" className="form-control my-3" placeholder="confirm new password" />
            <button type="button" className="btn btn-danger"><span style={{ margin: '0 115px 0 115px'}}>Sign in</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
