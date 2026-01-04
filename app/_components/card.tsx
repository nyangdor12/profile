'use client'

import { useState } from 'react';
import styles from "../page.module.css";

export default function Card () {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <div className={styles.topics}>

            <div className={styles.tabs}>
                <button onClick={() => setActiveTab('about')}
                        style={{ color: activeTab === 'about' ? '#white' : '#888' }}>
                    About Me
                </button>
                <button onClick={() => setActiveTab('projects')}
                        style={{ color: activeTab === 'projects' ? '#white' : '#888' }}>
                    My Projects
                </button>
            </div>

            <hr />

            <div className="contentArea">
                {activeTab === 'about' && (
                    <div className="fadeIn">
                        Hi, I’m Sein.

                        I’m a developer, artist, and narrative-obsessed game enthusiast currently based in Canada. I primarily work with C++ and Java, and build websites using React, Next.js, HTML, and CSS. My relationship with C++ is… complicated — but at this point, separation is no longer an option.

                        I fell in love with Unreal Engine after playing Star Wars Jedi: Fallen Order and now focus on creating story-driven interactive experiences, inspired by games from studios like BioWare and Telltale.

                        I also use Blender for 3D work and have a background in illustration, with an ongoing webtoon project on a self-publishing platform.

                        Currently, I’m developing a pre-transfer simulation project informed by clinical training, exploring modular and customizable learning aids.

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