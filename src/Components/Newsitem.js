import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
      let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className='my-3'>
           <div className="card" style={{width: '18rem'}}>
        <img src={imageUrl?imageUrl:"https://s.yimg.com/ny/api/res/1.2/JvJ_WqsNC8yaGY.hJwh0Kw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-03/688d0690-b40d-11ec-afe7-c65cbb21cf8e"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
      </div>
    )
  }
}

export default Newsitem