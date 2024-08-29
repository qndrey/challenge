import './App.css'
import { FormCard } from './components';
import { personFormConfig, carFormConfig } from './config';

/**
 * --- Reminder ---
 * - Please mind the file and folder structure. You can create new files or folders.
* - You can use official React documentation.
 * 
 * --- Instructions ---
 * Create a form component that renders a form based on the config object.
*  - Render the form elements based on the config object.
 *  - You don't need to have a default value for the fields. The ones in the screenshots are just examples.
 *  - You can use either controlled or uncontrolled inputs.
 * 
 * When the form is submitted:
 * - Check if all fields are valid. You'll need to validate the fields based on the configuration you will create.
 * - If all fields are valid, log all form elements to the console.
 * - If any field is invalid, display an error message.
 * 
 * --- Additional Info ---
 * You need to support the following data types:
 * - string
 * - number
 * - boolean
 * - enum
* 
 */

function App() {
  return (
    <div className="container">
      <FormCard title={'New Person'} config={personFormConfig} />
      <FormCard title={'New Car'} config={carFormConfig} />
    </div>
  );
}

export default App
