import React, { FunctionComponent, useRef } from 'react';
import { Hero } from '../hero/hero';
import { Intro } from './intro/intro';

import './home.styl';

interface Props {
}

export const Home: FunctionComponent<Props> = props => {
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