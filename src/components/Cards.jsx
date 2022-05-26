
import Card from './Card'
import Formimg from './Formimg';
import Loading from './Loading';
import { useFetchimages } from '../hooks/useFetchimages';

const Cards = () => {
    const [ images, loading, handleSumit] = useFetchimages ();
    return (
    <div className=' text-center'>
        <Formimg handleSumit= {handleSumit} />
    <hr/>

      {loading &&  <Loading/>}

    <div className='row'>

    {
        images.map((img) =>{
            return <div key={img.id} className='col'>
                <Card  img = {img.urls.regular} />
                </div>
        })
    }
    </div>
    </div>
)
}

export default Cards
