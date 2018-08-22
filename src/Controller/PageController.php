<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use App\Entity\Projets;
use App\Entity\Hobbies;
use Symfony\Component\HttpFoundation\Response;

class PageController extends Controller
{
    /**
     * @Route("/page", name="page")
     */
    public function index()
    {

        $projets = $this->getDoctrine()
    ->getRepository(Projets::class)
    ->findAll();

$hobbies = $this->getDoctrine()
    ->getRepository(Hobbies::class)
    ->findAll();
shuffle($hobbies);


return $this->render('page/index.html.twig', [
    'controller_name' => 'PageController',
    'projets' => $projets,
    'hobbies' => $hobbies
]);

    

    }

    /**
     * @Route("/admin")
     */
    public function admin()
    {
        return new Response('<html><body>Admin page!</body></html>');
    }


}
