import React from 'react'
import moment from 'moment'

function TitleDate() {
    setInterval(()=>{
        let date = moment().format("MM DD HH mm SSS")
        document.title=date
    },1000)
    return (
        <div>
            
        </div>
    )
}

export default TitleDate
