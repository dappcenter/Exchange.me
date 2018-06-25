<?php

// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

// Start the outputbuffer
ob_start();

// Require database connection

require_once('../../mysql.php');

// Hoisted Variables

$ITERATOR_NEWS_CONTENT = 0;

// Query
$QUERY_NEWS = mysqli_query($conn, "

SELECT
exchangeme.news.author,
exchangeme.news.date,
exchangeme.news.content
FROM 
exchangeme.news
ORDER BY exchangeme.news.id DESC;

");

// Fetch Results
$RESULT_NEWS = mysqli_fetch_array($QUERY_NEWS);

if(
    !empty($RESULT_NEWS)
    && isset($RESULT_NEWS)
    ) {

    // Loop through the results
    do {

        echo '
        
            <!-- News Content Container -->
            <div id="news-post-' . $ITERATOR_NEWS_CONTENT . '" class="news news-content-container">

                <!-- Profile Picture -->
                <div class="news news-profile-picture">

                </div>

                <!-- Author Name -->
                <p class="news news-author">' . $RESULT_NEWS[0] . '</p>

                <!-- Post Date -->
                <p class="news news-post-date">' . $RESULT_NEWS[1][8] . '' . $RESULT_NEWS[1][9] . '/' . $RESULT_NEWS[1][5] . '' . $RESULT_NEWS[1][6] . '/' . $RESULT_NEWS[1][2] . '' . $RESULT_NEWS[1][3] . '</p>

                <!-- Content -->
                <p class="news news-post-content">' . $RESULT_NEWS[2] . '</p>
            
            </div>
        
        ';

        // Increment the iterator
        $ITERATOR_NEWS_CONTENT++;

    } while($RESULT_NEWS = mysqli_fetch_array($QUERY_NEWS));

    // TODO: Create links to profile pages and posts for the date of another post

}

?>