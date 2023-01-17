import { useEffect, useState } from 'react'

// components
import ImageCard from '../components/imageCard';
import ImageSearch from '../components/imageSearch';

export default function Home() {

  // states
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');


  // fetch images
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">

      <h1 className='text-5xl my-6 text-center'>Image Gallery</h1>
      <ImageSearch setSearchTerm={(text: string) => setTerm(text)} />

      {isLoading ? 
      <h1 className='text-3xl text-center'>Loading Images...</h1> : 
      
      images.length == 0 ?
      <h1 className='text-3xl text-center'>No images found.</h1> : 
      <div className="grid grid-cols-3 gap-4">
        {images.map((image: {[key: string]: any}, index: any) => (
          <ImageCard key={index} image={image} />
        ))}
      </div>}
    </div>
  );
}
