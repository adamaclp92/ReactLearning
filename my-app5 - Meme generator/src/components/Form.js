import React from 'react'
import datas from '../memesData.js'

export default function Form(props){


    /********************* Első megoldás, beágyazott adatok *************/
   /* const [meme, setMeme] = React.useState(
        {
            topText: "Top Text",
            bottomText: "Bottom Text",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )

    const [allMemeImages, setAllMemeImages] = React.useState(datas)


    function getMemeImage() {

        const memesArray = allMemeImages.data.memes;
        const rand = Math.floor(Math.random() * memesArray.length);

        setMeme(prevState => ({
            ...prevState,
            randomImage: memesArray[rand].url
        }))

    }

        setApiMeme(prevState => ({
            ...prevState,
            [name]: value
        }))


    }*/


    /**********************Második megoldás, külső API ********************/
    const [apiMemes, setApiMemes] = React.useState(0)

    const [apiMeme, setApiMeme] = React.useState({
        topText: "Top Text",
        bottomText: "Bottom Text",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })


    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setApiMemes(data.data.memes))
    }, [])

    function getApiMemeImage() {

        const memesArray = apiMemes;
        const rand = Math.floor(Math.random() * memesArray.length);

        setApiMeme(prevState => ({
            ...prevState,
            randomImage: memesArray[rand].url
        }))

    }

    function handleChange(event){
        const {name, value} = event.target
        setApiMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }



    return (/*
        <div>
            <div className='meme-div container'>
            <p>Welcome back, {props.user}!</p>
                <div className='meme-subdiv row'>
                        <input 
                            type="text" 
                            name="topText"
                            value={meme.topText}
                            className="meme-input form-control col-sm" 
                            onChange={handleChange} 
                            placeholder={meme.topText}/>
                        <input 
                            type="text" 
                            name="bottomText"
                            className="meme-input form-control col-sm" 
                            onChange={handleChange}
                            placeholder={meme.bottomText} />
                </div>

            
                <button className="meme-button btn col" onClick={getMemeImage}>Get a new meme image</button>
                <div className='meme-image-wrapper'>
                    <img className="meme-image"src={meme.randomImage}  />
                    <h1 className='meme-image-first'>{meme.topText}</h1>
                    <h1 className='meme-image-second'>{meme.bottomText}</h1>
                </div>
                
            </div>*/

            <div className='meme-div container'>
            <p>Welcome back, {props.user}!</p>
                <div className='meme-subdiv row'>
                        <input 
                            type="text" 
                            name="topText"
                            value={apiMeme.topText}
                            className="meme-input form-control col-sm" 
                            onChange={handleChange} 
                            placeholder={apiMeme.topText}/>
                        <input 
                            type="text" 
                            name="bottomText"
                            className="meme-input form-control col-sm" 
                            onChange={handleChange}
                            placeholder={apiMeme.bottomText} />
                </div>

            <div>
            <button className="meme-button btn col" onClick={getApiMemeImage}>Get a new meme image</button>
                <div className='meme-image-wrapper container'>
                    <img className="meme-image"src={apiMeme.randomImage}  />
                    <h1 className='meme-image-first'>{apiMeme.topText}</h1>
                    <h1 className='meme-image-second'>{apiMeme.bottomText}</h1>
                </div>
                {/*<pre>{JSON.stringify(apiMemes, null, 2)}</pre>*/}  
            </div>
        </div>
       
    )
}
