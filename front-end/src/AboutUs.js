import './AboutUs.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
    const [info, setInfo] = useState('')


    // Fetches 'about us' content and image url
    const fetchInfo = () => {
        // setMessages([])
        // setLoaded(false)
        axios
            .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/info`)
            .then(response => {
            // axios bundles up all response data in response.data property
            setInfo(response.data)
            })
            .catch(err => {
            const errMsg = JSON.stringify(err, null, 2) // convert error object to a string so we can simply dump it to the screen
            })
    }

    useEffect(() => {
        // fetch messages this once
        fetchInfo()
        console.log(info)
    }, [])

    return (
        <>
            <h1>About Us:</h1>
            {info.aboutus}
            <img id="self-pic" src={info.imgurl}/>
        </>
    )
}

// make this component available to be imported into any other file
export default AboutUs
