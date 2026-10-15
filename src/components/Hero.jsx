

function Hero() {
    return (

        <section className="hero">
            <div>
                <span className="eyebrow">Gift wish lists, made simple</span>
                <h1>Wish for it. <br/>Let your people <em>tick it off.</em></h1>
                <p className="lead">Make a list of the gifts you'd love for your wedding, baby shower or birthday. Guests claim what they'll bring, so nothing gets bought twice — or they chip in to a cash fund.</p>
                <div className="ctas">
                    <a href="#start" className="btn btn-primary">Start your wish list</a>
                    <a href="#demo" className="btn btn-ghost">See an example</a>

                </div>
                <p className="note">Free to create · Share with one link · No account needed for guests</p>

            </div>

                <div className="stack">
                    <div className="mini a">
                        <span className="ribbon"></span>
                        <span className="eyebrow">Ana {"&"} Luka · 12 June</span>
                        <h3>Our wedding wish list</h3>

                        <div className="row">
                            <span>Stand mixer</span>
                            <span className="pill done">Claimed</span>
                        </div>

                        <div className="row">
                            <span>Linen bedding set</span>
                            <span className="pill">Available</span>
                        </div>

                        <div className="row">
                            <span>Cast-iron pot</span>
                            <span className="pill done">Claimed</span>
                        </div>

                        <div className="row">
                            <span>Espresso machine</span>
                            <span className="pill">Available</span>
                        </div>

                    </div>
                    <div className="mini b">
                        <span className="eyebrow">Cash fund</span>
                        <h3>Honeymoon in Lisbon</h3>
                        <div className="row">
                            <span>€1,240 of €2,000</span>
                            <span>18 guests</span>
                        </div>
                        <div className="bar">
                            <span></span>
                        </div>

                    </div>


                </div>




        </section>

    )
}

export default Hero;