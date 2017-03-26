<?php namespace App\Chat\Database\Seeds\Modules\Desktop\Chat;

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
                'name'=>'Ver chat',
                'url'=>'/chat.php/modules/chat/view/',
                'description'=>'Módulo interfaz para ver chat',
                'nameSpace'=>'Melisa.chat.view.desktop.chat.view.Wrapper',
                'task'=>[
                    'key'=>'task.chat.chat.view.access',
                    'name'=>'Acceso a ver chat',
                    'description'=>'Permitir acceso a ver chat',
                    'pattern'=>'access'
                ],
                'option'=>[
                    'key'=>'option.chat.chat.view.access',
                    'name'=>'Opción para ver chat',
                    'text'=>'Chat',
                    'iconClassSmall'=>'x-fa fa fa-comments',
                    'iconClassMedium'=>'x-fa fa fa-comments',
                    'iconClassLarge'=>'x-fa fa fa-comments',
                ],
                'event'=>[
                    'key'=>'event.chat.chat.view.access',
                    'description'=>'Acceso al módulo ver chat'
                ]
            ],
        ]);
        
        $this->installAssetCss('asset.chat.chat.view', [
            'name'=>'CSS view chat',
            'path'=>'/chat/css/chat.css',
            'version'=>'1.0.0',
        ]);
        
    }
    
}
