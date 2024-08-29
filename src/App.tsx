import './App.css'
import { Form } from './Form';

const person = {
  // person form config
  // fields are: name, age, status (active/inactive), registered
}

const car = {
  // car form config
  // fields are: make (mercedes/bmw/toyota), year, color, pre-order
}

/**
 * --- Reminder ---
 * Please mind the file and folder structure.
 * You can create new files or folders.
 * 
 * --- Instructions ---
 * Create a form component that renders a form based on the config object.
 * When the form is submitted:
 * - Check if all fields are valid.
 * - If all fields are valid, log all form elements to the console.
 * - If any field is invalid, display an error message.
 * 
 * --- Additional Info ---
 * You need to support the following data types:
 * - string
 * - number
 * - boolean
 * - enum
 */
function App() {
  return (
    <div className="container">
      <div>
        <h2>New Person</h2>
        <Form config={person} />
      </div>
      <div>
        <h2>New Car</h2>
        <Form config={car} />
      </div>
    </div>
  );
}

export default App
