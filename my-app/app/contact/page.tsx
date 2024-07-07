"use client"
import React from 'react';
import ContactForm from '../components/organisms/ContactForm';

const Contact: React.FC = () => {
  const handleSubmit = (data: { name: string; email: string; message: string }) => {
    // フォームのデータを送信する処理を書く（例えば、APIリクエストなど）
    console.log('Form submitted with data:', data);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h1>Contact Us</h1>
      <ContactForm onSubmit={() => handleSubmit} />
    </div>
  );
};

export default Contact;