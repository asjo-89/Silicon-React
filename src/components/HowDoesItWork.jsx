import React from 'react'

const HowDoesItWork = () => {
  return (
    <section id="app-features">
        <section id="work">
            <div className="container">
                <h2>How Does It Work?</h2>
                <div className="images">
                    <img loading="lazy" id="iphone-cards-tab" src="/images/iphone-cards-work-tab.svg" alt="Iphone showing transfer." />
                    <img id="iphone-transfer-mob" src="/images/iphone-transfer-tab-mob.svg" alt="Iphone showing how to transfer." />
                    <img loading="lazy" id="iphone-transfer-tab" src="/images/iphone-transfer-work-tab.svg" alt="Iphone showing cards." />
                    <img loading="lazy" id="iphone-budget-desk" src="/images/iphone-budget-work.svg" alt="Iphone showing cards." />
                    <img loading="lazy" id="iphone-cards-desk" src="/images/iphone-cards-work.svg" alt="Iphone showing cards." />
                    <img loading="lazy" id="iphone-transfer-desk" src="/images/iphone-transfer-work.svg" alt="Iphone showing cards." />
                </div>
                <div className="content-mobile">
                    <h3>Transfers to people from your contact list</h3>
                    <p>Proin volutpat mollis egestas. Nam luctus facilisisultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                </div>
                <div className="content-tablet">
                    <h3>Step 3. Transfers to people from your contact list</h3>
                    <p>Proin volutpat mollis egestas. Nam luctus facilisisultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                </div>
                <div className="content-desktop">
                    <h3>Latest transaction history</h3>
                    <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
                </div>
            </div>
        </section>
    </section>
  )
}

export default HowDoesItWork
