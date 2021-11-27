import React, { Component } from 'react'
import Gallery from '../Gallery/Gallery.jsx'

export default class GalleryShow extends Component {
    state= {pics:["https://i.ibb.co/bvg0wmQ/view1.jpg","https://i.ibb.co/Pg8J5GC/view2.jpg","https://i.ibb.co/4NKyf1j/view3.jpg"]}

    render() {
        return (
            <>
            <Gallery pics={this.state.pics}/>  
                
            </>
        )
    }
}
