<?php namespace App\Chat\Database\Seeds\Modules\Phone;

use Melisa\Laravel\Database\InstallSeeder;

/**
 * 
 *
 * @author Luis Josafat Heredia Contreras
 */
class ViewSeeder extends InstallSeeder
{
    
    public function run()
    {
        
        $this->installModule([
            [
                'name'=>'Ver Chat',
                'url'=>'/chat.php/modules/chat/viewPhone',
                'description'=>'Módulo interfaz de usuario para ver chat versión phone',
                'nameSpace'=>'Melisa.chat.view.phone.chat.view.Wrapper',
                'task'=>[
                    'key'=>'task.chat.chat.view.access',
                    'name'=>'Acceso a ver chat versión phone',
                    'description'=>'Permitir acceso a ver chat en versión phone',
                    'pattern'=>'access'
                ],
                'option'=>[
                    'key'=>'option.chat.phone.chat.view.access',
                    'name'=>'Opción para ver chat en la versión phone',
                    'text'=>'Chat'
                ],
                'event'=>[
                    'key'=>'event.chat.chat.view.access',
                    'description'=>'Acceso al módulo para ver chat versión phone'
                ],
            ],
        ]);
        
        $this->installAssetCss('asset.chat.phone.chat.view', [
            'name'=>'CSS view chat version phone',
            'path'=>'/chat/css/chat-phone.css',
            'version'=>'1.0.1',
        ]);
        
    }
    
}
