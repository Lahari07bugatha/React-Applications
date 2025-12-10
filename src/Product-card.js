

function ProductCard({title,price,image,rating}){

    // console.log(props)
    return(
        <>
        <div className="card">
            <img src={image}/>
            <p> {title}</p>
            <p> ${price}</p>
            <p>{rating.rate}</p>
        </div>
        
        
        </>
    )
}
export default ProductCard