import "../FireBaseTodo/todo.css"
import Todos from "./Todos";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../fire';
import fire from '../fire'

const sighInWithGoogle = () =>
  auth.signInWithPopup(new fire.auth.GoogleAuthProvider());

const SignIn = () => (
  <main id='main'>
    <button className='button-2' onClick={sighInWithGoogle}>Sign In With Google</button>
  </main>
);

const App = () => {
  const [user] = useAuthState(auth);

  return user ? <Todos /> : <SignIn />;
};

export default App;