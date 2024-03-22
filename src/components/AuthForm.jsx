import classes from './AuthForm.module.css';

function AuthForm() {

  return (
    <div className={classes.loginform}>
      <form method="post" >
        <h1>login</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div >
          <button>Save</button>
        </div>
      </form>
      <a href="#">policy</a>
    </div>
  );
}

export default AuthForm;
