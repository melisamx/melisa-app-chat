<?php namespace App\Chat\Database\Seeds;

use Illuminate\Database\Seeder;
use Melisa\Laravel\Database\InstallApplication;

class ApplicationSeeder extends Seeder
{    
    use InstallApplication;
    
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
