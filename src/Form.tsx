/**
 * This is a form component that renders a form based on the config object.
 */
export function Form({ config }) {
  const handleSubmit = (e) => {
    // you can use the following code snippet to get all form elements:
    console.log(e.target.elements);
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type='submit'>Save</button>
    </form>
  );
}