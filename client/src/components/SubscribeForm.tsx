import React from 'react';
import axois from 'axios';


const SubscribeForm = () => {
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const email = (e.target as HTMLFormElement).email.value;
        try {
            await axois.post('http://localhost:3001/subscribe', { email });
            alert('Subscribed successfully');
        } catch (error) {
            alert('Failed to subscribe');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
        </form>
    );
}

export default SubscribeForm;