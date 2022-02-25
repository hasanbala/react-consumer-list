export const Forms = (props) => {
  const {
    title,
    user,
    changeName,
    changeDepartment,
    changeSalary,
    name,
    department,
    salary,
    button,
  } = props;

  return (
    <div className="adder">
      <div className="adder-head">
        <b>
          <h2>{title}</h2>
        </b>
      </div>
      <div className="adder-body">
        <form onSubmit={user}>
          <div className="adder-body-div">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter a name"
              value={name}
              onChange={changeName}
            />
          </div>
          <div className="adder-body-div">
            <label htmlFor="department">Department</label>
            <input
              type="text"
              placeholder="Enter a department"
              value={department}
              onChange={changeDepartment}
            />
          </div>
          <div className="adder-body-div">
            <label htmlFor="salary">Salary</label>
            <input
              type="text"
              placeholder="Enter a salary"
              value={salary}
              onChange={changeSalary}
            />
          </div>
          <button className="btn-hover color-3" type="submit">
            {button}
          </button>
        </form>
      </div>
    </div>
  );
};
