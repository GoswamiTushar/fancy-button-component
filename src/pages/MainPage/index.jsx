import { useState } from 'react'
import { getMeaningData } from '../../API'
import Button from '../../components/Button'
import './style.css'

const Heading = () => {
    return (
        <section className='heading-section'>
            <div className="heading">
                Dictionary App
                <div className="subheading">
                    Powered by
                    <span className='link'>
                        <a style={{ textDecoration: 'none', color: 'inherit' }} href="dictionaryapi.dev">
                            dictionaryapi.dev
                        </a>
                    </span>
                </div>
            </div>
        </section>
    )
}

const InputArea = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState()
    const [word, setWord] = useState("");
    const [submitted, setSubmitted] = useState(false)

    const onSubmit = () => {
        setIsLoading(true)
        setSubmitted(true)

        getMeaningData(word)
            .then(response => {
                setData(response[0]?.meanings)
            })
            .finally(() => {
                setSubmitted(false)
                setIsLoading(false)
                setWord("")
            })
    }
    return (
        <>
            <section className="input-area">
                <div className="wrapper">
                    <label className='label' htmlFor="word">Enter Word</label>
                    <input name="word" onChange={(e) => { setWord(e.target.value) }} placeholder="Type word here" type="text" className="input" />
                    <Button
                        label="Get Meaning"
                        variant="contained"
                        size="small"
                        isLoading={isLoading}
                        disabled={word.length < 1 || isLoading || submitted}
                        onClick={onSubmit}
                    />
                </div>
            </section>
            <section className="output-area">
                <div className="meanings">Meanings: </div>
                <ul>
                    {
                        data?.map((meaning, index) => {
                            return (
                                <li key={index}>{meaning?.definitions[0]?.definition}</li>
                            )
                        })
                    }
                </ul>
            </section>
        </>
    )
}

const MainPage = () => {

    return (
        <div className='mainpage'>
            <Heading />
            <InputArea />
        </div>
    )
}
export default MainPage