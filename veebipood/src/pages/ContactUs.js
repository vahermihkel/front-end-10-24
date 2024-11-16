import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Rating } from '@mui/material';
// import Rating from '@mui/material/Rating';

export const ContactUs = () => {
  const form = useRef();
  const [value, setValue] = React.useState(2);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fum24bj', 'template_ld2lsyd', form.current, {
        publicKey: 'Xbn0xj_4LjNugxYGl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label> <br />
      <input type="text" name="from_name" /> <br />
      <label>Email</label> <br />
      <input type="email" name="from_email" /> <br />
      <label>Message</label> <br />
      <textarea name="message" /> <br />
      {/* <input type="range" name="rating" min={1} max={5} /> <br /> */}
      <Rating
        name="rating"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <input type="submit" value="Send" /> <br />
    </form>
  );
};