import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

 const Projets =()=> {
  return (
    <div className='bg-black text-white'>
      <div className="text-center py-8">
        <h1>Bienvenue sur mon portfolio</h1>
        <p>Découvrez mes projets et compétences.</p>
      </div>

      <div id='Projets' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mx-40">
        <Card className="bg-dark text-white rounded-lg shadow-lg">
          <Card.Body>
            <Card.Title>Réseau Sociale d'information</Card.Title>
            <Card.Img variant="top" src="https://www.docstring.fr/media/contentblocks/socialnetwork-1920x816-1920x816.webp" alt="Description de l'image" className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto transition-transform duration-500 ease-in-out transform hover:scale-110 hover:animate-wiggle" />
            <Card.Text>
              Un réseau social qui permet aux utilisateurs de poster des nouveautés. Chaque utilisateur peut poster un produit ou un article qu'il a découvert et qu'il pense pourrait intéresser la communauté. Chaque utilisateur peut voter pour une publication et la page d'accueil affiche les publications les plus populaires en premier.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="bg-dark text-white rounded-lg shadow-lg">
          <Card.Body>
            <Card.Title>Site e-commerce</Card.Title>
            <Card.Img variant="top" src="https://www.docstring.fr/media/contentblocks/ecommerce-1920x816-1920x816.webp" alt="Description de l'image" className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto transition-transform duration-500 ease-in-out transform hover:scale-110 hover:animate-wiggle" />
            <Card.Text>
              Une application d’e-commerce, qui permet aux utilisateurs d'acheter des produits en ligne, de suivre leur commande et de gérer leur compte. La création d'un site e-commerce est un classique du développement web. Il est donc intéressant de s'y frotter car vous serez très probablement amené à travailler sur ce genre de site dans votre carrière.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="bg-dark text-white rounded-lg shadow-lg">
          <Card.Body>
            <Card.Title>Site Agence de Voyage</Card.Title>
            <Card.Img variant="top" src="https://www.docstring.fr/media/contentblocks/booking-1920x816-1920x816.webp" alt="Description de l'image" className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto transition-transform duration-500 ease-in-out transform hover:scale-110 hover:animate-wiggle" />
            <Card.Text>
              Un site web de réservation de voyages qui permet aux utilisateurs de rechercher et de réserver des vols, des hôtels et des activités en ligne. La création d'un site de réservation de voyages offre plusieurs défis intéressants pour un développeur web.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="bg-dark text-white rounded-lg shadow-lg">
          <Card.Body>
            <Card.Title>Application de listes des tâches</Card.Title>
            <Card.Img variant="top" src="https://www.docstring.fr/media/contentblocks/todoapp-1920x816-1920x816.webp" alt="Description de l'image" className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto transition-transform duration-500 ease-in-out transform hover:scale-110 hover:animate-wiggle" />
            <Card.Text>
              Une application qui permet de créer des listes de tâches associées à différentes catégories. Les tâches peuvent avoir une date spécifique ou non et peuvent être marquées comme complétées ou non.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="bg-black text-white px-4 py-16 text-center mx-40">
        <h1>A Propos de moi</h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <img src="/absy.jpeg" alt="Photo de profil" width={200} height={200} className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto md:mx-0 transition-transform duration-500 ease-in-out transform hover:scale-110 hover:animate-wiggle mb-4 md:mb-0 md:mr-8" />
          <div>
            <p>
              En tant que développeur, j’ai toujours été passionné par la création de solutions élégantes et efficaces à des problèmes complexes. J’ai une base solide en développement de logiciels, avec un accent sur les technologies Web telles que HTML, CSS et JavaScript. J’aime travailler à la fois sur le front-end et le back-end des applications, et je suis toujours à la recherche de moyens d’optimiser les performances, d’améliorer l’expérience utilisateur et d’assurer le plus haut niveau de qualité du code.
            </p>
            <p>
              Tout au long de ma carrière, j’ai travaillé sur un large éventail de projets, allant de simples sites Web statiques à des applications complexes au niveau de l’entreprise. J’ai l’expérience de travailler avec une variété d’outils et de frameworks de développement, notamment React, Angular, Vue.js, Node.js et Laravel. Je suis toujours désireux d’apprendre et d’explorer de nouvelles technologies, et je suis constamment à la recherche d’opportunités pour améliorer mes compétences et mes connaissances.
            </p>
          </div>
        </div>
      </div>

      <div id='Contact' className="bg-black text-white px-4 py-16 text-center mx-40">
        <h1>Contactez Nous</h1>
        <p>
          Si vous souhaitez que nous travaillions ensemble, si vous avez des questions ou si vous souhaitez que je prenne la parole lors de votre événement, ma boîte de réception est toujours ouverte. Que ce soit juste pour dire bonjour, je ferai de mon mieux pour vous répondre ! À votre santé!
        </p>
        <p>&copy; 2024 NDEYE ABSA FALL. Tous droits réservés.</p>
      </div>
    </div>
  );
}

export default Projets;
