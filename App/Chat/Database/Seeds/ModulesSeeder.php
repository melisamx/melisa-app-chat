<?php namespace App\Chat\Database\Seeds;

use Illuminate\Database\Seeder;

/**
 * 
 *
 * @author Luis Josafat Heredia Contreras
 */
class ModulesSeeder extends Seeder
{
    
    public function run()
    {
        
        $this->call(Modules\ModulesDesktopSeeder::class);
        $this->call(Modules\ModulesPhoneSeeder::class);
        
    }
    
}
