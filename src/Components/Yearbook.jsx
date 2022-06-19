import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import Card from './Card'
import Github from './Github'




function Yearbook() {
    return (
      <ParallaxLayer offset={1.70} speed={1}>
      <div className="object-cover">
          <p className="mb-8 text-4xl leading-relaxed">
          Yearbook :)
          </p>
            <Card />
          <p className="mt-4 leading-relaxed">
          EST GI Promo 2022 student?<br/>
          <Github />
          </p>
      </div>

        </ParallaxLayer>
    )
}

export default Yearbook
