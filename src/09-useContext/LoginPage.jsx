import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext);
 // console.log(algo);

  return (
    <>
    <h1>LoginPage <small>{ user?.name }</small></h1>
    <hr />
    <pre aria-label='pre'>
      { JSON.stringify( user, null, 3) }
    </pre>

    <button className="btn btn-primary"
            onClick={ () => setUser({ id: 123, name: 'juan', email: 'juan@google.com'})}
    >
      Set User
    </button>
    
</>
  )
}
