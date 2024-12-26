

export const AlbumCard = ({ title, description, yearReleased, imageUrl, artist }) => {
    return (
        <div className="album-container">
            <img src={imageUrl} alt={title} className="album-card-image" />
            <div class="album-overlay">
                <div class="album-text">
                    <span id="album-title">{title}<br/></span>
                    <span>{artist} | {yearReleased}<br/><br/></span>
                    <span>{description}</span>
                </div>
            </div>
        </div>
    )
}