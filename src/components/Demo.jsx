function Demo () {

    const gifts = [
        { id: 1, name: "Stand mixer", sub: "KitchenPro 5L, cream", price: "€329", claimed: false },
        { id: 2, name: "Linen bedding set", sub: "King size, sage green", price: "€140", claimed: false },
        { id: 3, name: "Cast-iron casserole pot", sub: "26 cm, any colour", price: "€210", claimed: false },
        { id: 4, name: "Espresso machine", sub: "Manual, with grinder", price: "€450", claimed: false },
        { id: 5, name: "Set of 6 wine glasses", sub: "Crystal, stemmed", price: "€85", claimed: false },
        { id: 6, name: "Cooking class for two", sub: "Experience gift", price: "€120", claimed: false },
    ];

    return (

        <section id="demo">
            <div className="wrap">
                <div className="demo">
                    <div className="head">
                        <span className="eyebrow">Try it</span>
                        <h2>This is what your guests see.</h2>
                        <p>Tick a gift to claim it, or pick an amount to chip in. Go on — it's a demo.</p>
                    </div>

                    <div className="list">
                        <div className="listhead">
                            <h3>Ana & Luka's wedding</h3>
                            <span id="count">0 of 6 claimed</span>
                        </div>

                        {gifts.map(gift => (
                            <div className="gift" key={gift.id}>
                                <button className="tick" type="button"></button>
                                <div>
                                    <h4>{gift.name}</h4>
                                    <small>{gift.sub}</small>
                                </div>
                                <span className="price">{gift.price}</span>
                            </div>
                        ))}
                    </div>

                    <div className="col">
                        <div className="fund">
                            <span className="eyebrow">Cash fund</span>
                            <h3>Honeymoon in Lisbon</h3>
                            <p>Rather give money? It goes straight toward a week by the sea.</p>
                            <div className="nums">
                                <span><b>€1,240</b> raised</span>
                                <span>goal €2,000</span>
                            </div>
                            <div className="bar"><span style={{width: "62%"}}></span></div>
                            <div className="amts">
                                <button type="button">€25</button>
                                <button type="button">€50</button>
                                <button type="button">€100</button>
                                <button type="button">€250</button>
                            </div>
                            <button className="btn">Chip in €50</button>
                        </div>
                        <p className="demo-note">In the real thing, guests pay securely and the host gets a note with every gift.</p>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Demo;