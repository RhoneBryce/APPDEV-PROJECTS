import PropTypes from 'prop-types'
export default function Body(props) { //props is use to pass info to functional components
    return (
        <div className="person">
            <img src="http://placeholder.pics/svg/150x150" alt="person-logo" 
            className="person-picture"/>
            <p>This is <strong>{props.name}'s</strong> favorite food:</p>
            <p>{(props.food).toUpperCase()}</p>
            <p>Is it healthy? {props.isHealthy? "Yes" : "No" }</p>
            <p><strong>{props.name}</strong> is {props.age} years old!</p>
        </div>

    )
}

Body.defaultProps = {
    name: "Guest",
    food: "Unknown",
    isHealthy: false,
    age: 0
}
Body.propTypes = {
    name: PropTypes.string,
    food: PropTypes.string,
    isHealthy: PropTypes.bool,
    age: PropTypes.number,   
}