export const Forms = (props) => {
  const { title, user, form, button, changeForm } = props;
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
              name="name"
              placeholder="Enter a name"
              value={form.name}
              onChange={changeForm}
            />
          </div>
          <div className="adder-body-div">
            <label htmlFor="department">Department</label>
            <input
              type="text"
              name="department"
              placeholder="Enter a department"
              value={form.department}
              onChange={changeForm}
            />
          </div>
          <div className="adder-body-div">
            <label htmlFor="salary">Salary</label>
            <input
              type="text"
              name="salary"
              placeholder="Enter a salary"
              value={form.salary}
              onChange={changeForm}
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
