import '../styles/PagePopping.css'

const PagePopping = ({courses}) => {

    return (
        
        <div className='page-container'>
            {courses.map((course, index) => (
                <div className='page'> 
                <img src={course.image} alt={`Image ${index}`} className='image-page'></img>
                <button className='close'>✖</button>
            </div>
            ))}
        </div>
    )
}


export default PagePopping;