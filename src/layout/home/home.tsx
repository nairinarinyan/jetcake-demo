import React, { FunctionComponent, useRef } from 'react';
import { Hero } from '../hero/hero';
import { Intro } from './intro/intro';

import './home.styl';

export const Home: FunctionComponent = () => {
    const introRef = useRef<HTMLDivElement>();
    const scrollToIntro = () => {
        introRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main className="home">
            <section>
                <Hero onScrollClick={scrollToIntro} />
            </section>
            <section ref={introRef}>
                <Intro />
            </section>
            <footer className="footer">
            </footer>
        </main>
    );
};