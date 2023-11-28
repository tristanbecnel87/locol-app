const Card = (props) => {
    return (
        <a href="#" class="block max-w-sm p-6 bg-00416B border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 style={{ color: "#FCF4E2" }}>{props.text}</h2>
            {props.children}
        </a>
    )
}

export default Card