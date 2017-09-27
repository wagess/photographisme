<?php

header("Access-Control-Allow-Origin: *");

// $monMotcle = $_GET['param1'];
$monMotcle = "burning man";

$conn = new mysqli("mysql.stephanewagner.com", "wagess", "huit7197septGLENSPEY", "photowagess");

$conn->query("SET NAMES 'utf8'"); 
$conn->query("SET CHARACTER SET utf8");  
$conn->query("SET SESSION collation_connection = 'utf8_unicode_ci'"); 

// Get Featured Image via direct sql query
// http://wordpress.stackexchange.com/questions/48878/get-featured-image-via-direct-sql-query

///////////////////
// Recherche SQL //
///////////////////

//Recherche dans une catégorie
$result = $conn->query("SELECT p.guid FROM wp_postmeta AS pm 
	INNER JOIN wp_posts AS p ON pm.meta_value = p.ID 
	LEFT JOIN wp_lrsync_relations r ON r.wp_id = p.ID 
	LEFT JOIN wp_lrsync_collections c ON r.wp_col_id = c.wp_col_id 
	WHERE pm.meta_key = '_thumbnail_id' 
	AND c.name LIKE '%".$monMotcle."%' ");                              

//////////////////////////////////
// Tableau finale de la requête //
//////////////////////////////////

$resultquery = "";

while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($resultquery != "") {
    	$resultquery .= ",";
    }
    $resultquery .= '"URL":"'   . $rs["guid"]        . '",';
}

$resultquery ='{"RESULTATS":['.$resultquery.']}';

$conn->close();


// echo iconv('UTF-8', 'ISO-8859-1//TRANSLIT', '@ € ä ç é è à ç @ % ? $');
echo ("recherche > "+$resultquery);

?>