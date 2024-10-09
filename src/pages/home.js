import React from "react";
import Header from "../components/header"
import Projects from "../components/projects";
import AboutMe from "../components/aboutme";
import ContactForm from "../components/ContactForm";
import Layout from "../components/layout";

function Home() {
    return (
        <>
            <Header />
            <main>
                <AboutMe />
                <ContactForm />
            </main>
        </>
    )
}

export default Home;