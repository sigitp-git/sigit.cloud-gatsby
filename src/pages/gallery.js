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
                'https://google-photos-album-demo.glitch.me/8d4dwVxsNDPbEjtc8'
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
    <Layout><p>Gallery of my Mobile Photography hobby, mostly shot on iPhone or Lumix DMC-LX10</p>
    <ImageGallery items={images} /></Layout>
    : null
}
export default Gallery
