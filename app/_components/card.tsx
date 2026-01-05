'use client'

import { useState } from 'react';
import styles from "../page.module.css";

export default function Card () {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <div className={styles.topics}>

            <div className={styles.tabs}>
                <button className={styles.tab} onClick={() => setActiveTab('about')}
                        >
                    About Me
                </button>
                <button className={styles.tab} onClick={() => setActiveTab('projects')}
                        >
                    My Projects
                </button>
            </div>

            <hr />

            <div className={styles.contentArea}>
                {activeTab === 'about' && (
                    <div className="fadeIn" style={{backgroundColor: activeTab === 'about' ? '#white' : '#888'}}>
                        <h2>Hi, I’m Sein.</h2>

                        I’m a developer, artist, and narrative-obsessed game enthusiast currently based in Canada. I primarily work with C++ and Java, and build websites using React, Next.js, HTML, and CSS. My relationship with C++ is… complicated — but at this point, separation is no longer an option.
                        <br/>
                        <br/>
                        I fell in love with Unreal Engine after playing Star Wars Jedi: Fallen Order and now focus on creating story-driven interactive experiences, inspired by games from studios like BioWare and Telltale.
                        <br/>
                        <br/>
                        I also use Blender for 3D work and have a background in illustration, with an ongoing webtoon project on a self-publishing platform.
                        <br/>
                        <br/>
                        Currently, I’m developing a pre-transfer simulation project informed by clinical training, exploring modular and customizable learning aids.
                        <br/>
                        <br/>
                        I live with two cats who supervise all creative work.
                    </div>
                )}
                {activeTab === 'projects' && (
                    <div className="fadeIn">
                        Pretransfer Simulation Project: Github Link
                    </div>
                )}
            </div>

        </div>
    );
}