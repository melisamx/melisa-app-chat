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
                [
                    'id'=>'realtime',
                    'url'=>env('APP_URL_REALTIME') . 'socket.io/socket.io.js',
                    'idAssetType'=>1
                ],
                $this->asset('asset.chat.phone.chat.view'),
                $this->asset('momentjs'),
                $this->asset('momentjs.locales'),
                $this->asset('momentjs.precise.range'),
            ],
            'data'=>[
                'urls'=>[
                    'realtime'=>config('realtime.url') . 'chat'
                ],
                'modules'=>[
                    'contacts'=>$this->module('task.people.contacts.paging')
                ],
                'wrapper'=>[
                    'title'=>'Chat'
                ],
            ]
        ];
        
    }
    
}
