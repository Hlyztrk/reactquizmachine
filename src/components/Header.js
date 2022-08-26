import PropTypes from 'prop-types'
const Header = ({title}) => {
  // const t1 = gsap.timeline({defaults: {ease : Expo.InOut}})
  return (
    <div>
    <header>
      <h3 className='title'>{title}</h3>
      {/* {
          t1.fromTo({title}, 1, {y: "-10rem"}, {y: 0})
      } */}
    </header>
    </div>                  
  )
}

Header.defaultProps ={
  title : "Quiz Machine"
}

//css in js
// const headerStyle ={
//   color : "white"
// }

export default Header
