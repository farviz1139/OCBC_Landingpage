import React, { useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Email from './email';
import Properties from './components/Properties';
import Property_2 from './components/Property_2';
import People from './people';
import Signup from './signup';
import Footer from './components/Footer';
import EnquiryForm from './components/EnquiryForm';
import Calculator from './calculator';
import Todo from './todo';

function App() {
  const signupRef = useRef(null);
  const [open, setOpen] = useState(false);

  const scrollToSignup = () => {
    if (signupRef.current) {
      signupRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <NavBar scrollToSignup={scrollToSignup} setOpen={setOpen} />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Email />
              <Properties />
              <Property_2 />
              <People />
              <div ref={signupRef}>
                <Signup />
              </div>
              <Footer />
              <EnquiryForm isOpen={open} onClose={() => setOpen(false)} />
            </>
          }
        />
        {/* Calculator Page */}
        <Route path="/calculator" element={<Calculator />} />

        {/* TodoList Page */}
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
