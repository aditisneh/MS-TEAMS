import '../FireBaseTodo/todo.css'
import { useState } from "react";
import fire, { auth, firestore, functions } from '../fire';
import { useCollectionData } from "react-firebase-hooks/firestore";

const addTodo = functions.httpsCallable("addTodo");

const Todos = () => {
  const [todo, setTodo] = useState("");
  const todosRef = firestore.collection(`users/${auth.currentUser.uid}/todos`);
  const [todos] = useCollectionData(todosRef, { idField: "id" });

  const onSubmitTodo = (event) => {
    event.preventDefault();

    setTodo("");
    addTodo({
      text: todo,
      complete: false,
      createdAt: fire.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <>
      <main>
        <form className='form-fill' onSubmit={onSubmitTodo}>
          <input className='ip'
            required
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="What's Next?"
          />
          <button type="submit">Add</button>
        </form>
        {todos && todos.map((todo) => <Todo key={todo.id} {...todo} />)}
      </main>
    </>
  );
};

const Todo = ({ id, complete, text }) => {
  const todosRef = firestore.collection(`users/${auth.currentUser.uid}/todos`);
  const onCompleteTodo = (id, complete) =>
    todosRef.doc(id).set({ complete: !complete }, { merge: true });

  const onDeleteTodo = (id) => todosRef.doc(id).delete();

  return (
    <div key={id} className="todo">
      <button
        className={`todo-item ${complete ? "complete" : ""}`}
        tabIndex="0"
        onClick={() => onCompleteTodo(id, complete)}
      >
        {text}
      </button>
      <button onClick={() => onDeleteTodo(id)}>x</button>
    </div>
  );
};

export default Todos;