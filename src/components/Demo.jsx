
import {useState} from "react";


function Demo () {

    const [gifts, setGifts] = useState([
        { id: 1, name: "Stand mixer", sub: "KitchenPro 5L, cream", price: "€329", claimed: false },
        { id: 2, name: "Linen bedding set", sub: "King size, sage green", price: "€140", claimed: false },
        { id: 3, name: "Cast-iron casserole pot", sub: "26 cm, any colour", price: "€210", claimed: false },
        { id: 4, name: "Espresso machine", sub: "Manual, with grinder", price: "€450", claimed: false },
        { id: 5, name: "Set of 6 wine glasses", sub: "Crystal, stemmed", price: "€85", claimed: false },
        { id: 6, name: "Cooking class for two", sub: "Experience gift", price: "€120", claimed: false },
    ]);

    const [selected, setSelected] = useState(50);
    const [raised, setRaised] = useState(1240);

    function toggleClaim (id) {
        setGifts(gifts.map(gift =>
            gift.id === id ? {...gift, claimed: !gift.claimed}
            :gift
        ));
    }

    function chipIn() {
        setRaised(prev => prev + selected);
    }

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
                            <span id="count">{gifts.filter(gift => gift.claimed).length} of {gifts.length} claimed</span>
                        </div>

                        {gifts.map(gift => (
                            <div className={gift.claimed ? "gift claimed" : "gift" } key={gift.id}>
                                <button className="tick" type="button" onClick={() => toggleClaim(gift.id)}>
                                    <svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                                </button>
                                <div>
                                    <h4>{gift.name}</h4>
                                    <small>{gift.sub}</small>
                                </div>
                                <span className={gift.claimed ? "who" : "price"}>{gift.claimed ? " Claimed by you" : gift.price }</span>
                            </div>
                        ))}
                    </div>

                    <div className="col">
                        <div className="fund">
                            <span className="eyebrow">Cash fund</span>
                            <h3>Honeymoon in Lisbon</h3>
                            <p>Rather give money? It goes straight toward a week by the sea.</p>
                            <div className="nums">
                                <span><b>€{raised}</b> raised</span>
                                <span>goal €2,000</span>
                            </div>
                            <div className="bar"><span style={{width: (raised / 2000) * 100 + "%"}}></span></div>
                            <div className="amts">
                                <button type="button" aria-pressed={selected === 25} onClick={() => setSelected(25)}>€25</button>
                                <button type="button" aria-pressed={selected === 50} onClick={() => setSelected(50)}>€50</button>
                                <button type="button" aria-pressed={selected === 100} onClick={() => setSelected(100)}>€100</button>
                                <button type="button" aria-pressed={selected=== 250} onClick={() => setSelected(250)}>€250</button>
                            </div>
                            <button className="btn" onClick={chipIn}>Chip in €{selected}</button>
                        </div>
                        <p className="demo-note">In the real thing, guests pay securely and the host gets a note with every gift.</p>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Demo;