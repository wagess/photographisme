<?php

header("Access-Control-Allow-Origin: *");

$monMotcle = $_GET['param1'];
$condition = $_GET['param2'];

// $monMotcle = "burning man";
// $condition = "thumbnail";

$conn = new mysqli("mysql.stephanewagner.com", "wagess", "huit7197septGLENSPEY", "photowagess");

$conn->query("SET NAMES 'utf8'"); 
$conn->query("SET CHARACTER SET utf8");  
$conn->query("SET SESSION collation_connection = 'utf8_unicode_ci'"); 

// Get Featured Image via direct sql query
// http://wordpress.stackexchange.com/questions/48878/get-featured-image-via-direct-sql-query

///////////////////
// Recherche SQL //
///////////////////

if($condition == 'search'){
	//Recherche dans une catégorie
	$result = $conn->query("SELECT id, post_title, guid, post_content 
								FROM  wp_posts
								LEFT JOIN wp_term_relationships ON wp_posts.ID = wp_term_relationships.object_id
								LEFT JOIN wp_terms ON wp_term_relationships.term_taxonomy_id = wp_terms.term_id 
								WHERE wp_terms.slug LIKE '%".$monMotcle."%' ");

}else if($condition == 'tag'){
	//Recherche d'un mot clé dans la base générée par le plugin WP/LR
	$result = $conn->query("SELECT id, post_title, guid, post_content
								FROM wp_posts
								WHERE wp_posts.id IN
									(SELECT t2.id
										FROM wp_lrsync_meta t2
										INNER JOIN (
									    SELECT DISTINCT wp_lrsync_meta.id, wp_lrsync_meta.value from wp_lrsync_meta
									) t1 ON t2.value = t1.id AND t1.value LIKE '%".$monMotcle."%') 
							");
}else if($condition == 'home'){
	//Recherche dans une catégorie de type album (page d'accueil uniquement)
	$result = $conn->query("SELECT post_title, guid FROM wp_posts p
								LEFT JOIN wp_lrsync_relations r ON r.wp_id = p.ID
								LEFT JOIN wp_lrsync_collections c ON r.wp_col_id = c.wp_col_id
								WHERE c.name LIKE '".$monMotcle."' ");
}else if($condition == 'thumbnail'){
	$result = $conn->query("SELECT p.guid FROM wp_postmeta AS pm 
								INNER JOIN wp_posts AS p ON pm.meta_value = p.ID 
								LEFT JOIN wp_lrsync_relations r ON r.wp_id = p.ID 
								LEFT JOIN wp_lrsync_collections c ON r.wp_col_id = c.wp_col_id 
								WHERE pm.meta_key = '_thumbnail_id' 
								AND c.name LIKE '%".$monMotcle."%' ");
}

////////////////////////////////////////////////////////////////
// Fonction requête des mots clés associés à la recherche SQL //
////////////////////////////////////////////////////////////////

function maRequeteMotsCles($conn,$imageid) {
	$rskeywords = "";
	// $conn = new mysqli("mysql.stephanewagner.com", "wagess", "huit7197septGLENSPEY", "photowagess");
	$motsClesAssocies = $conn->query("SELECT wp_lrsync_meta.value AS MotsCles
											FROM wp_lrsync_meta
											WHERE wp_lrsync_meta.id  AND wp_lrsync_meta.name = 'tag_name' IN
												(SELECT t2.value
													FROM wp_lrsync_meta t2
													INNER JOIN (
												    SELECT DISTINCT wp_lrsync_meta.id from wp_lrsync_meta
												) t1 ON t2.value = t1.id AND t2.id = '".$imageid."')
	    							");

	while($rsK = $motsClesAssocies->fetch_array(MYSQLI_ASSOC)) {
    	if ($rskeywords != "") {
	    	$rskeywords .= ",";
	    }
    	$rskeywords .= '"'.$rsK['MotsCles']. '"';
	}

	return $rskeywords;
}                                
                              

//////////////////////////////////
// Tableau finale de la requête //
//////////////////////////////////

$resultquery = "";

while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($resultquery != "") {
    	$resultquery .= ",";
    }
    $resultquery .= '{"ID":"'  . $rs["id"] . '",';
    $resultquery .= '"TITRE":"'   . $rs["post_title"]        . '",';
    $resultquery .= '"URL":"'   . $rs["guid"]        . '",';
    $resultquery .= '"CONTENT":"'. $rs["post_content"]     . '",';
    $resultquery .= '"TAGS":[';
 //    if($condition != 'home'){
	// 	$resultquery .= maRequeteMotsCles($conn,$rs["id"]);
	// }
    $resultquery .=  ']}';
}

$resultquery ='{"RESULTATS":['.$resultquery.']}';

$conn->close();


// echo iconv('UTF-8', 'ISO-8859-1//TRANSLIT', '@ € ä ç é è à ç @ % ? $');
echo ($resultquery);

?>