import React from "react";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Layout from "../components/layout"

const Gallery = () => {
    const [images, setImages] = React.useState(null)
    React.useEffect(() => {
        let shouldCancel = false
        const call = async () => {
            const response = await axios.get(
                'https://google-photos-album-demo2.glitch.me/XFEL9D8P5ZkBQMQJ6'
            );
            if (!shouldCancel && response.data && response.data.length > 0) {
                setImages(response.data.map(url => ({
                    original: `${url}=w1024`,
                    thumbnail: `${url}=w100`
                })))
            }
        }
        call()
        return () => shouldCancel = true
    }, [])
    return images ? 
    <Layout><p>Old Gallery using Google Photos</p>
    <ImageGallery items={images} /></Layout>
    : null
}
export default Gallery