import React from 'react'
import { hero, heroImg, heroContainer } from '../../styles/hero.module.css'
import titleImg from './Chirst-Fellowship-Conference-2021-Title.png'
import yearImg from './Christ-Fellowship-Conference-2021-Year.png'


const Hero = ({ hide = false }) => hide
    ? null
    : (
        <div className={hero}>

            <div className={heroContainer}>
                <img className={heroImg} src={titleImg} alt="Christ Fellowship Church Conference 2021" />
                <img className={heroImg} src={yearImg} alt="Christ Fellowship Church Conference 2021" />
            </div>

            <div className={heroContainer}>
                <h1 className="font-weight-bold text-uppercase text-light">
                    Feb 10-11 • West Palm Beach, FL
                </h1>
            </div>
        </div>
    )

export default Hero