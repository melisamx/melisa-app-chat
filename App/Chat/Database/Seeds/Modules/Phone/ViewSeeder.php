<?php namespace App\Chat\Database\Seeds\Modules\Phone;

use Illuminate\Database\Seeder;
use Melisa\Laravel\Database\InstallModule;

class ViewSeeder extends Seeder
{
    use InstallModule;
    
    public function run()
    {
        
        $this->installModule([
            [
                'name'=>'Ver Chat',
                'url'=>'/chat.php/modules/chat/viewPhone',
                'description'=>'Módulo interfaz de usuario para ver chat versión phone',
                'nameSpace'=>'Melisa.chat.view.phone.chat.ViewWrapper',
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
        
    }
    
}
