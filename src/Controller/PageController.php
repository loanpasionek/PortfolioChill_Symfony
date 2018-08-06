<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use App\Entity\Projets;

class PageController extends Controller
{
    /**
     * @Route("/page", name="page")
     */
    public function index()
    {

        $repo = $this->getDoctrine()
        ->getRepository(Projets::class);

        $projets = $repo->findAll();

        /* print_r($projets); die(); */

        return $this->render('page/index.html.twig', [
            'controller_name' => 'PageController',
            'projets' => $projets
        ]);
    }


}
