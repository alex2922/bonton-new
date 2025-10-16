'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to send');
      }
      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err: unknown) {
      setStatus('error');
      const message = err instanceof Error ? err.message : 'Something went wrong';
      setError(message);
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-8">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        pattern="[0-9]{10}"
        inputMode="numeric"
        placeholder="Phone Number"
        title="Enter a 10-digit number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <textarea
        rows={4}
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit" className="btn mt-8" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Submit'}
      </button>
      {status === 'success' && (
        <p className="text-green-600">Thanks! Your message has been sent.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600">{error || 'Failed to send message.'}</p>
      )}
    </form>
  );
};

export default ContactForm;


