<?php namespace App\Chat\Modules;

use App\Core\Logics\Modules\Outbuildings;

/**
 * 
 *
 * @author Luis Josafat Heredia Contreras
 */
class ViewModule extends Outbuildings
{
    
    public $event = 'event.chat.chat.view.access';

    public function dataDictionary() {
        
        return [
            'success'=>true,
            'assets'=>[
                $this->asset('app.lamina.phone.programaciones.view')
            ],
            'data'=>[
                'wrapper'=>[
                    'title'=>'Programaciones'
                ],
                'i18n'=>[],
                'faker'=>[]
            ]
        ];
        
    }
    
}
