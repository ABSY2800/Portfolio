
import Link from 'next/link';

const Home = () => { 
 return (
 <div id='Home' className='  flex justify-end bg-black p-4 '>
    <div className='space-x-4'>
    <Link href="/#Accueil " className='text-white hover:text-gray-300'>
      Accueil
    </Link>

    <Link href="/#Projets" className='text-white hover:text-gray-300'>
      Projets
    </Link>

    <Link href="/#Contact" className='text-white hover:text-gray-300'>
        Contact
    </Link>
  </div>
  </div>
);
}



export default Home;