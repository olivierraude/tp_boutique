<?php

	/*
	https://www.php.net/manual/fr/language.oop5.autoload.php
	*/

	define("RACINE", $_SERVER["DOCUMENT_ROOT"] . "/tp2_boutique/");
	define("RACINEWEB", "http://" . $_SERVER["SERVER_NAME"] . ":" . $_SERVER["SERVER_PORT"] . "/tp2_boutique/");


    //définition de la fonction d'autoload
    function mon_autoloader($classe)
    {
        //liste des répertoires à fouiller pour trouver les classes
        $repertoires = array(RACINE . "controleurs/", 
						RACINE . "modeles/", 
						RACINE . "vues/");
        
        foreach($repertoires as $rep)
        {
            if(file_exists($rep . $classe . ".php"))
            {
                require_once($rep . $classe . ".php");
                return;
            }                
        }
    }

    //enregistrer cette fonction comme étant notre autoloader
	spl_autoload_register("mon_autoloader");
	
	Routeur::route();
?>