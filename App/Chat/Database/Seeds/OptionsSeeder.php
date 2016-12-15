<?php namespace App\Chat\Database\Seeds;

use Melisa\Laravel\Database\InstallSeeder;

class OptionsSeeder extends InstallSeeder
{
    
    public function run()
    {
        
        $this->installOption('option.chat.access', [
            'name'=>'Option main de aplicación chat',
            'text'=>'Chat',
            'isSubMenu'=>true
        ]);
        
    }
    
}
