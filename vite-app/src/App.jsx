import React, { useRef } from 'react';

const App = () => {
  // Create refs for input fields
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value.trim();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    // Validate name input
    if (!nameValue) {
      alert('Please enter your name.');
      return;
    }

    if (nameValue.length < 3) {
      alert('Name must be at least 3 characters.');
      return;
    }

    // Validate email input
    if (!emailValue) {
      alert('Please enter your email.');
      return;
    }

    if (emailValue.length < 5) {
      alert('Email must be at least 5 characters.');
      return;
    }

    // Validate password input
    if (!passwordValue) {
      alert('Please enter your password.');
      return;
    }

    if (passwordValue.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }

    // Custom submission handling logic here (e.g., API calls, state updates)
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
