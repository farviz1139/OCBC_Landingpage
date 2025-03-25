import React, { useRef } from 'react';
import NavBar from './components/NavBar'
import Email from './email'
import Properties from './components/Properties'
import Property_2 from './components/Property_2'
import People from './people'
import Signup from './signup'

function App() {
  const signupRef = useRef(null);

  const scrollToSignup = () => {
    if (signupRef.current) {
      signupRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return <>
    <NavBar scrollToSignup={scrollToSignup} />
    <Email/>
    <Properties/>
    <Property_2/>
    <People />
    <div ref={signupRef}>
        <Signup />
    </div>
  </>;
}

export default App;