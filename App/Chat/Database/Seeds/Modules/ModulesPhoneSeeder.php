<?php namespace App\Chat\Database\Seeds\Modules;

use Illuminate\Database\Seeder;

/**
 * 
 *
 * @author Luis Josafat Heredia Contreras
 */
class ModulesPhoneSeeder extends Seeder
{
    
    public function run()
    {
        
        $this->call(Phone\ViewSeeder::class);
        
    }
    
}
