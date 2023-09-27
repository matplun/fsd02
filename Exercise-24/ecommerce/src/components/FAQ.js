let accordianItems = [
    ["01. I don't remember my password?", "Try our password reset page."],
    ["02. How can I create an account at your site?", "Visit our account creation page."],
    ["03. What are your delivery hours?", "Monday to Friday from 9am to 5pm."],
    ["04. How much time it takes to deliver the order?", "Approximately 30 minutes."],
    ["05. How do I know the status of my order?", "Please check our delivery tracking app."]
];

const FAQ_items = (props) => {
    let heading = "heading"+props.index;
    let collapse = "collapse"+props.index;
    let collapse_id = "#collapse"+props.index;
    return (<>
        <div className="accordion-item">
            <h2 className="accordion-header" id={heading}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={collapse_id} aria-expanded="false" aria-controls={collapse}>
                    {accordianItems[props.index][0]}
                </button>
            </h2>
            <div id={collapse} className="accordion-collapse collapse" aria-labelledby={heading} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    {accordianItems[props.index][1]}
                </div>
            </div>
        </div>
    </>);
}

const FAQ = () => {
    return (
        <>
        <h1 className="text-bg-info">FAQ Page</h1>
        <div class="accordion" id="accordionExample">
            {
                accordianItems.map((elm, index) => {
                    return <FAQ_items index={index}/>
                }
            )}
        </div>
        </>
    )
}

export default FAQ;