import React, { useRef } from 'react';

const App = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value.trim();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (!nameValue) {
      alert('Please enter your name.');
      return;
    }

    if (nameValue.length < 3) {
      alert('Name must be at least 3 characters.');
      return;
    }

    // Custom submission handling logic here
    console.log('Form submitted:', {
      name: nameValue,
      email: emailValue,
      password: passwordValue
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          ref={nameRef}
          onFocus={() => nameRef.current.focus()}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          ref={emailRef}
          onFocus={() => emailRef.current.focus()}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          ref={passwordRef}
          onFocus={() => passwordRef.current.focus()}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
