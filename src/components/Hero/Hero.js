import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { hero, heroImg } from '../../styles/hero.module.css'
import titleImg from './Christ-Fellowship-Church-Conference-2020.png'
import yearImg from './Christ-Fellowship-Conference-February-2020.png'


const Hero = ({ hide = false }) => hide
    ? null
    : (
        <div className={hero}>
            <img className={heroImg} src={titleImg} alt="Christ Fellowship Church Conference" />
            <img className={heroImg} src={yearImg} alt="Christ Fellowship Church Conference" />
        </div>
    )

export default Hero