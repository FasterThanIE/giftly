

function AuthPage() {

    return (

        <div className="shell">
            <aside className="brand">

                <a className="logo" href="#"><i></i>Giftly</a>
                <div className="pitch">
                    <h2>The gifts you’d love, <em>none twice.</em></h2>
                    <p>Make a wish list for your wedding, baby or birthday. Guests claim a gift or chip in to a fund.</p>
                </div>

                <div className="peek">

                    <span className="ribbon"></span>
                    <span className="eyebrow">Ana & Luka · 12 June</span>
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
                      <span>Honeymoon fund</span>
                        <span className="pill done">€1,240 of €2,000</span>
                    </div>

                </div>

                <p className="quote"><b>Free for hosts.</b> Guests don't need an account to claim a gift.</p>
                <span className="dots"></span>

            </aside>
        </div>


    )

}


export default AuthPage;