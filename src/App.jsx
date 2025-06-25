import React from 'react';
import Navbar from './components/Navbar';

export default function App() {
    return (
    <>
        <Navbar />

        <section id="home" className="section">
            <h1>James Fleming</h1>
            <p>Software Engineer</p>
        </section>

        <section id="about" className="section">
            <h2>About Me</h2>
            <p>I'm a software engineer who blends creativity with problem-solving...</p>
        </section>

        <section id="projects" className="section">
            <h2>Projects</h2>
            <p>Here are a few apps and tools I've built...</p>
        </section>

        <section id="contact" className="section">
            <h2>Contact</h2>
            <p>Email: james.fleming394@gmail.com</p>
        </section>
    </>
    );
}
