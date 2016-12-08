<?php namespace App\Chat\Http\Controllers\Modules;

use Melisa\Laravel\Http\Controllers\Controller;
use App\Chat\Modules\ViewModule;

class ChatController extends Controller
{
    
    public function viewPhone(ViewModule $module)
    {
        
        return $module->render();
        
    }
    
}
