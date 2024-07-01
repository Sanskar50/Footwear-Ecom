const TagLine = () => {
    const tag = [{
        tagline: '2M+ Happy Customers',
        img: 'profile.png'
    },
    {
        tagline: 'Proudly Made in India',
        img: 'india.png'
    },
    {
        tagline: '3M+ Plastic bottles recycled',
        img: 'plastic.png'
    },
    {
        tagline: 'Eco friendly fashion',
        img: 'plant.png'
    }
    ]

    return (
        <div className="tagBar">
            {tag.map(tg => (
                <div className="tags">
                    <img className='tagImg' src={tg.img}></img>
                    <p>{tg.tagline}</p>
                </div>
            ))}
        </div>
    );
}

export default TagLine;