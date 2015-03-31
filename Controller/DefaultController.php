<?php

namespace DCY\JSBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('DCYJSBundle:Default:index.html.twig', array('name' => $name));
    }
}
