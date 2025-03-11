'use client';

import { useState } from 'react';
import { Textarea, Label } from 'flowbite-react';
import Button from './Button';
import { useToast } from '@/hooks/use-toast';

const Form = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/forms/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Form submission failed');
      }

      toast({
        title: 'Success!',
        description: 'Your message has been sent. We will get back to you soon!',
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast({
        title: 'Error!',
        description: 'Failed to send message. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="name" value="Name" className="text-[1.4rem] text-white" />
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="text-[1.4rem] px-3 py-[1.5rem] rounded-[1rem] w-full text-sageLightGray bg-sageLightBlue"
          required
        />
      </div>

      <div>
        <Label htmlFor="email" value="Email Address" className="text-[1.4rem] text-white" />
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="text-[1.4rem] text-sageLightGray px-3 rounded-[1rem] w-full py-[1.5rem] bg-sageLightBlue"
          required
        />
      </div>

      <div>
        <Label htmlFor="phone" value="Phone Number" className="text-[1.4rem] text-white" />
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="text-[1.4rem] px-3 py-[1.5rem] rounded-[1rem] w-full text-sageLightGray bg-sageLightBlue"
          required
        />
      </div>

      <div>
        <Label htmlFor="message" value="Message" className="text-[1.4rem] text-white" />
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="text-[1.4rem] p-[1rem] rounded-[1rem] bg-sageLightBlue"
          required
          rows={6}
        />
      </div>

      <div className="flex justify-center mt-4">
        <Button
          text={loading ? 'Sending...' : 'Submit'}
          className="w-[10rem] h-[5rem] transform"
          disabled={loading}
        />
      </div>
    </form>
  );
};

export default Form;
