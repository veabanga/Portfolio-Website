import { Suspense, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';

import Fox from '../models/Fox';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const { alert, showAlert, hideAlert } = useAlert();

  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      showAlert({
        text: 'The contact form is not configured yet. Please try again later or email me directly.',
        type: 'danger',
      });
      return;
    }

    setIsLoading(true);
    setCurrentAnimation('hit');
    hideAlert();

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: 'Vea',
          from_email: form.email,
          reply_to: form.email,
          to_email: 'veabanga.vb@gmail.com',
          message: form.message,
        },
        publicKey
      );

      setIsLoading(false);
      setCurrentAnimation('idle');
      setForm({ name: '', email: '', message: '' });
      showAlert({
        text: 'Message sent successfully!',
        type: 'success',
      });
    } catch (error) {
      console.error('EmailJS failed to send the contact message:', error);
      setIsLoading(false);
      setCurrentAnimation('idle');
      showAlert({
        text: 'Your message could not be sent. Please try again or email me directly.',
        type: 'danger',
      });
    }
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert}/>}
      {/* <Alert text="test"/> */}
      <div className='flex-1 min-w-[50%] flex flex-col'>
         <h1 className='head-text'>Get in Touch</h1>

        <form
         className='w-full flex flex-col gap-7 mt-14'
         onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input 
            type="text"
            name="name"
            className="input"
            placeholder="John"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Email
            <input 
            type="email"
            name="email"
            className="input"
            placeholder="john@email.com"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how i can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
          type="submit"
          className='btn'
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>

        </form>
        <p className="mt-5 text-sm text-slate-600">
          Prefer email?{' '}
          <a className="font-medium text-pink-600 hover:underline" href="mailto:veabanga.vb@gmail.com">
            veabanga.vb@gmail.com
          </a>
        </p>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
      <Canvas
        camera = {{
          position: [0, 0, 5],
          fov: 75, //Field Of View
          near: 0.1,
          far: 1000
        }}
      >
        <directionalLight intensity={2.5} position={[0, 0, 1]} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={<Loader/>}>
          <Fox 
            currentAnimation={currentAnimation}
            position={[0.5, 0.35, 0]}
            rotation={[12.6, -0.6, 0]}
            scale={[0.5, 0.5, 0.5]}
          />
        </Suspense>
      </Canvas>
      </div>
    </section>
  )
}

export default ContactForm
