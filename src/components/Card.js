export const Card = (props) => {
    return (
        <div className="card w-full">
            <figure><img src={props.image} alt="" />></figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.content}</p>
                <div className="card-actions justify-end">
                    <button className="btn">43 charity</button>
                </div>
            </div>
        </div>
    )
}

