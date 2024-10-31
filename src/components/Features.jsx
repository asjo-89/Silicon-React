import React from 'react'

const Features = () => {
  return (
    <div className="container">
        <div className="images">
            <img loading="lazy" id="iphone-features" src="/images/iphone-features.svg" alt="Iphone app features" />
            <img loading="lazy" id="card-features" src="/images/card.svg" alt="Visa creadit card" />
        </div>
        <div className="content">
            <div className="header">
                <h2>App features</h2>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
            </div>
            <div className="features" id="f1">
                <span className="icon">
                    <img loading="lazy" src="/images/payments.svg" alt="Easy payments icon" />
                </span>
                <span>
                    <h3>Easy Payments</h3>
                    <p loading="lazy" className="info">Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                </span>
            </div>
            <div className="features" id="f2">
                <span className="icon">
                    <img loading="lazy" src="/images/security.svg" alt="Data security icon" />
                </span>
                <span>
                    <h3>Data Security</h3>
                    <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                </span>
            </div>
            <div className="features" id="f3">
                <span className="icon">
                    <img loading="lazy" src="/images/statistics.svg" alt="Data statistics icon" />
                </span>
                <span>
                    <h3>Data statistics</h3>
                    <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                </span>
            </div>
            <div className="features" id="f4">
                <span className="icon">
                    <img loading="lazy" src="/images/support.svg" alt="Support 24/7 icon" />
                </span>
                <span>
                    <h3>Support 24/7</h3>
                    <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                </span>
            </div>
            <div className="features" id="f5">
                <span className="icon">
                    <img loading="lazy" src="/images/cashback.svg" alt="Regular cashback icon" />
                </span>
                <span>
                    <h3>Regular Cashback</h3>
                    <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                </span>
            </div>
            <div className="features" id="f6">
                <span className="icon">
                    <img loading="lazy" src="/images/standards.svg" alt="Top standards icon" />
                </span>
                <span>
                    <h3>Top Standards</h3>
                    <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Features
