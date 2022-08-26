import React from 'react'
import PropTypes from 'prop-types'
import Questions from './Questions'

const NextPreButton = ({previousBtn, nextBtn}) => {
 


  return (
    <div>
       <div className="button">
                <div className="left-arrow"><i className="fas fa-arrow-alt-circle-left"></i>{previousBtn}</div>
                <div className="right-arrow" >{nextBtn}<i className="fas fa-arrow-alt-circle-right"></i></div>
            </div>
    </div>
  )
}

NextPreButton.defaultProps ={
    previousBtn : "Previous",
    nextBtn : "Next"
  }


export default NextPreButton
