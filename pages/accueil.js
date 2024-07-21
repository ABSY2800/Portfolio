import Link from 'next/link';
import React from 'react';



const Accueil = () => {
    return (
        <div className='bg-black'>
            <div className='bg-black '>
                <div id='Accueil' className="bg-cover bg-center  bg-slate-950">
                </div>
                <h1 className="text-4xl font-bold text-center bg-black  text-white pt-4 hover:file: ">Bienvenue dans mon Portofolio</h1>
            </div>

            <div className=' text-center text-white bg-black'>
                <img src="/IMG-16.jpg" alt="Description de l'image" width={800} height={800} className=" md:w-48 md:h-48 rounded-full mx-auto  transition-transform duration-500 ease-in-out transform hover:scale-110 hover:animate-wiggle  flex items-center justify-center h-screen m-10 " />
                <h1>Salut, je m’appelle Nkdeye Absa Fall</h1>
            </div>
            <div>
                <p className="text-lg  text-white px-4 pt-16 pb-5  text-center ml-40 mr-40"> Je suis un développeur de logiciels basé à Dakar, au Sénégal. Je me spécialise dans la création (et parfois la conception) de sites Web, d’applications et de tout ce qui se trouve entre les deux.</p>
            </div>
            <div className='space-x-4  flex items-center justify-center  bg-black pb-32 '>
                <Link href='https://www.instagram.com/absa2521/'><i className="fa-brands fa-instagram text-white" aria-hidden='true'></i></Link>
                <Link href='https://www.linkedin.com/in/Ndeye Absa Fall/'><i className="fa-brands fa-linkedin text-white" aria-hidden='true'></i></Link>
                <Link href='https://github.com/Absy2800/'> <i className="fa-brands fa-github text-white" aria-hidden='true'></i></Link>
            </div> 


            <div>

            </div>

        </div>


    );
};

export default Accueil;