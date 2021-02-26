import './LogIn.scss'

function LogIn() {
  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)
    console.log(Object.fromEntries(formData.entries()))
  }

  return (
    <div className="LogInPage">
      <div className="LogInPage__wrapper">
        <div className="LogInPage__title">Login Form</div>
        <form className="LogInPage__form" onSubmit={handleSubmit}>
          <input placeholder="Enter Email" type="email" name="emal" id="email" required />
          <input placeholder="Enter Password" type="password" name="password" id="password" required />
          <div className="LogInPage__submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogIn
