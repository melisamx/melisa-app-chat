<?php namespace App\Chat\Database\Seeds;

use Illuminate\Database\Seeder;
use Melisa\Laravel\Database\InstallOption;

class OptionsSeeder extends Seeder
{
    use InstallOption;
    
    public function run()
    {
        
        $this->installOption('option.chat.access', [
            'name'=>'Option main de aplicación chat',
            'text'=>'Chat',
            'isSubMenu'=>true
        ]);
        
    }
    
}
