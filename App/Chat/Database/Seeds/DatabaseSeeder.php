<?php namespace App\Chat\Database\Seeds;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    
    public function run()
    {
                
        $this->call(ApplicationSeeder::class);
        $this->call(OptionsSeeder::class);
        $this->call(ModulesSeeder::class);
        
    }
    
}
