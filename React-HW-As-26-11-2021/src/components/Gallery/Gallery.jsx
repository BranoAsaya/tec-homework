import React, { Component } from 'react'
import * as styles from './Gallery.module.css'

export default class Gallery extends Component {
   state={temp:0}
   changePic=(e)=>{
       console.log(e.target.name);
       this.setState({temp:e.target.name})
   }
    render() {
        const [img1,img2,img3]=this.props.pics
        return (

            <> 
              <div className={styles.top_img_div}>
             <img src={this.props.pics[this.state.temp]} alt="" /> 
            </div>
            <div className={styles.bottom_img}>
            <div className={styles.one_div} > 
            <img src={img1} alt="" onClick={this.changePic} name={0}/>    
            </div >
            <div className={styles.one_div} > 
            <img src={img2} alt="" onClick={this.changePic} name={1}/>    
            </div>    
            <div className={styles.one_div} >
            <img src={img3} alt="" onClick={this.changePic} name={2}/>         
            </div>    
            </div>    
             </>
        )
    }
}
 
                
           
              
                
            
             
                
            