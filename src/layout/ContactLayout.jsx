import { NavLink, Outlet } from "react-router-dom"

function ContactLayout() {
  return (
    <div>
      <h1>Contact</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, tempore, natus odit labore iure laudantium nisi tenetur animi debitis modi consequatur reprehenderit aliquid saepe? Ipsum eius corrupti minima placeat. Ab non eligendi doloremque commodi delectus facilis cum repellat! Consequatur eaque quam ea eius quaerat reprehenderit nisi! Aperiam fugiat sapiente accusantium.</p>

        <nav>
            <NavLink to='faq' >FAQ</NavLink>
            <NavLink to='form'>Form</NavLink>
        </nav>

        <Outlet />

    </div>
  )
}

export default ContactLayout
