export const CreateUser = (props) => {
  const { displayCheck = false } = props;

  const display = "block";
  const displayNone = "none";
  return (
    <div className={{ display }}>
      <h2>Create User</h2>
      <div>
        <label>Username</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" id="confirmPassword" />
      </div>
      <div>
        <button>Create User</button>
      </div>
    </div>
  );
};
