import '../styles/PagePopping.css'

const PagePopping = ({ course, index }) => {
    return (
        <div className='page-container'>
            <div className='page-pop'> 
            <img src={course.image} alt={`img ${index}`} className='image-page'></img>
            <button className='close'>✖</button>
            </div>
        </div>
    );
}


export default PagePopping;
