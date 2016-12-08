<?php namespace App\Chat\Database\Seeds;

use Illuminate\Database\Seeder;

class ModulesSeeder extends Seeder
{
    
    public function run()
    {
        
        $this->call(Modules\ModulesDesktopSeeder::class);
        $this->call(Modules\ModulesPhoneSeeder::class);
        
    }
    
}
