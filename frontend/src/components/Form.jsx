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
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    toast({
      title: 'Thank you for your Message!',
      description: 'We would get back to you soon',
    });
  };

  return (
    <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="name"
            value="Name"
            className="text-[1.4rem] text-white"
          />
        </div>
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
        <div className="mb-2 block">
          <Label
            htmlFor="email"
            value="Email Address"
            className="text-[1.4rem] text-white"
          />
        </div>
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
        <div className="mb-2 block">
          <Label
            htmlFor="message"
            value="Message"
            className="text-[1.4rem] text-white"
          />
        </div>
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

      {/* Centered Button */}
      <div className="flex justify-center mt-4">
        <Button text="Submit" className="w-[10rem] h-[5rem] transform" />
      </div>
    </form>
  );
};

export default Form;
