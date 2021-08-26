import emailjs from 'emailjs-com'
import logo from './logo.svg';
import './App.css';

export default function App() {

  function sendEmail(e) {
    // form value name attribute should match template parameter
    e.preventDefault();
    emailjs.init('YOUR_USER_ID');
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    // or through node
    // table params should exactly match params defined in template 
    // const templateParams = {
    //   name: 'Test',
    //   email: 'test@gmail.com',
    //   subject: 'Enquiry about Product',
    //   message: 'Hi, Im looking for this product. can you provide me more details on how to place order?'
    // }
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Contact Email</label>
      <input type="email" name="email" />
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
