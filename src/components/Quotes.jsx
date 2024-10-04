import { useState, useEffect } from "react"

const Quotes = () => {

    const [quote, setQuote] = useState(null)
    const category = "happiness"
    const apiKey = "H7Dnk2wT8I4B1Z5Rp/NiPg==1uE2cnOdHwEMwF8x"

    const fetchQuote = async() => {
        try{
            const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
                method: 'GET',
                headers: { 'X-Api-Key' : apiKey },
            })
            const data = await response.json()
            setQuote(data[0])
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchQuote()
    }, [])

    return(
        <>
        <div className="quotesSection shadow-md">
            <h1 className="hq">Quote of the day</h1>
            {quote ? (
                <div className="content">
                    <p>{quote.quote}</p>
                    <p className="italic">-{quote.author}</p>
                    <button className="btn3" onClick={fetchQuote}>Next</button>
                </div>
            ) : (
                <p>Loading..</p>
            )}
        </div>
        </>
    )
}

export default Quotes