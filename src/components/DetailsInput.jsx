import "../css/DetailsInput.css"

function DetailsInput(props) {
    return (
        <main className="details-input-body">
            <header className="details-input-header">{props.header}</header>
            <input 
                className="details-input-input" 
                type="text" 
                placeholder={props.placeholder}
            />
        </main>
    );
}

export default DetailsInput