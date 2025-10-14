import React from 'react';
//import Button from './Button';
import Button from 'components/Buttons/Button';


const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="app-container">
      <h1>Reusable Button Component Examples</h1>

      <section>
        <h2>Primary Buttons</h2>
        <Button variant="primary" size="small" onClick={handleClick}>Small Primary</Button>
        <Button variant="primary" size="medium" onClick={handleClick}>Medium Primary</Button>
        <Button variant="primary" size="medium">text</Button>
        <Button variant="primary" size="large" onClick={handleClick}>Large Primary</Button>
        <Button variant="primary" disabled>Disabled Primary</Button>
      </section>

      <section>
        <h2>Secondary Buttons</h2>
        <Button variant="secondary" size="medium">Secondary Button</Button>
      </section>

      <section>
        <h2>Tertiary Buttons</h2>
        <Button variant="tertiary" size="medium" type="submit">Tertiary Submit</Button>
      </section>
    </div>
  );
};

export default App;
