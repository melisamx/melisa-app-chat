<?php namespace App\Chat\Database\Seeds;

use Melisa\Laravel\Database\InstallSeeder;

class ApplicationSeeder extends InstallSeeder
{
    
    public function run()
    {
        
        $this->installApplication('chat', [
            'name'=>'Chat',
            'description'=>'Application Chat',
            'nameSpace'=>'Melisa.chat',
            'typeSecurity'=>'art'
        ]);
        
    }
    
}
