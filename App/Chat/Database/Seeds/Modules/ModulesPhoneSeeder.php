<?php namespace App\Chat\Database\Seeds\Modules;

use Illuminate\Database\Seeder;

class ModulesPhoneSeeder extends Seeder
{
    
    public function run()
    {
        
        $this->call(Phone\ViewSeeder::class);
        
    }
    
}
