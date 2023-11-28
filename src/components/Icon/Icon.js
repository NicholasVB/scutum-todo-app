export function Icon({onClick, imgLink, alt}) {
    return (
        <div onClick={onClick}>
            <img src={imgLink} alt={alt}/>
        </div>
    )
}