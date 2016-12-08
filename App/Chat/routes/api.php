<?php 

Route::group([
    'prefix'=>'v1',
    'middleware'=>'auth.basic',
    'namespace' =>'v1'
], function() {
    
    Route::post('send/simple', 'SendController@simple');
    
});
