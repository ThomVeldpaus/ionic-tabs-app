import "./LoginForm.scss";

const LoginForm = () => {
  <div>
    <div className="back"></div>
    <div className="registration-form">
      <header>
        <h1>Sign Up</h1>
        <p>Fill in all informations</p>
      </header>
      <form>
        <div className="input-section email-section">
          <input
            className="email"
            type="email"
            placeholder="ENTER YOUR E-MAIL HERE"
          />
          <div className="animated-button">
            <span className="icon-paper-plane">
              <i className="fa fa-envelope-o"></i>
            </span>
            <span className="next-button email">
              <i className="fa fa-arrow-up"></i>
            </span>
          </div>
        </div>
        <div className="input-section password-section folded">
          <input
            className="password"
            type="password"
            placeholder="ENTER YOUR PASSWORD HERE"
          />
          <div className="animated-button">
            <span className="icon-lock">
              <i className="fa fa-lock"></i>
            </span>
            <span className="next-button password">
              <i className="fa fa-arrow-up"></i>
            </span>
          </div>
        </div>
        <div className="input-section repeat-password-section folded">
          <input
            className="repeat-password"
            type="password"
            placeholder="REPEAT YOUR PASSWORD HERE"
          />
          <div className="animated-button">
            <span className="icon-repeat-lock">
              <i className="fa fa-lock"></i>
            </span>
            <span className="next-button repeat-password">
              <i className="fa fa-paper-plane"></i>
            </span>
          </div>
        </div>
        <div className="success">
          <p>ACCOUNT CREATED</p>
        </div>
      </form>
    </div>
  </div>;
};

export default LoginForm;
