<?php namespace App\Chat\Database\Seeds;

use Illuminate\Database\Seeder;

/**
 * 
 *
 * @author Luis Josafat Heredia Contreras
 */
class DatabaseSeeder extends Seeder
{
    
    public function run()
    {
                
        $this->call(ApplicationSeeder::class);
        $this->call(OptionsSeeder::class);
        $this->call(ModulesSeeder::class);
        
    }
    
}
