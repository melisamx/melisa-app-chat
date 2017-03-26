<?php namespace App\Chat\Database\Seeds;

use Melisa\Laravel\Database\InstallSeeder;

/**
 * 
 *
 * @author Luis Josafat Heredia Contreras
 */
class ApplicationSeeder extends InstallSeeder
{
    
    public function run()
    {
        
        $this->installApplication('chat', [
            'name'=>'Chat',
            'description'=>'Application Chat',
            'nameSpace'=>'Melisa.chat',
            'typeSecurity'=>'art',
            'version'=>'1.0.0'
        ]);
        
    }
    
}
