import React from 'react'

import bcg from '@images/home-company-logo/bcg.webp'
import meta from '@images/home-company-logo/meta.webp'
import insead from '@images/home-company-logo/insead.webp'
import microsoft from '@images/home-company-logo/microsoft.webp'
import deutsche from '@images/home-company-logo/deutsche.webp'
import kearney from '@images/home-company-logo/kearney.webp'
import petronas from '@images/home-company-logo/petronas.webp'
import icf from '@images/home-company-logo/icf.webp'
import paypal from '@images/home-company-logo/paypal.webp'

const WolrdClassCompany = React.memo(() => {
  let companyImages = [
    { img: bcg, name: 'bcg' },
    { img: meta, name: 'meta' },
    { img: insead, name: 'insead' },
    { img: microsoft, name: 'microsoft' },
    { img: deutsche, name: 'deutsche' },
    { img: kearney, name: 'kearney' },
    { img: petronas, name: 'petronas' },
    { img: icf, name: 'icf' },
    { img: paypal, name: 'paypal' },
  ]

  return (
    <section id="section-world-class-company">
      <div className="section-content-container">
        <p>Mentors coming from world class companies</p>
        <div className="company-logos">
          {companyImages.map((image, i) => (
            <div className="company" key={i}>
              <div className="image-container">
                <img src={image.img} alt={`world-company-logo-${image.name}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default WolrdClassCompany
