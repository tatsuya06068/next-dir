"use client"
import React, { use, useState } from 'react';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import styles from '@/app/styles/components/organisms/ContactForm.module.css';

interface ContactFormProps {
  onSubmit: (data: { name: string; email: string; message: string }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ name, email, message });
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <FormField label="Name" value={name} onChange={setName} />
      <FormField label="Email" value={email} onChange={setEmail} />
      <FormField label="Message" value={message} onChange={setMessage} />
      <Button label="Submit" onClick={()=>handleSubmit} />
    </form>
  );
};

export default ContactForm;