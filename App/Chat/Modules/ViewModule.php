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
                $this->asset('asset.chat.phone.chat.view')
            ],
            'data'=>[
                'wrapper'=>[
                    'title'=>'Programaciones'
                ],
                'i18n'=>[],
                'faker'=>[
                    'contacts'=>[
                        'type'=>'array',
                        'minItems'=>30,
                        'items'=>[
                            'type'=>'object',
                            'properties'=>[
                                'name'=>[
                                    'type'=>'string',
                                    'faker'=>'name.firstName',
                                ],
                                'avatar'=>[
                                    'type'=>'string',
                                    'faker'=>[
                                        'random.arrayElement'=>[
                                            [
                                                'red',
                                                'blue',
                                                'gray',
                                                'orange',
                                                'green',
                                            ]
                                        ]
                                    ]
                                ],
                                'actualState'=>[
                                    'type'=>'string',
                                    'faker'=>'lorem.words',
                                ],
                            ],
                            'required'=>[
                                'name',
                                'avatar',
                                'actualState'
                            ]
                        ]
                    ],
                    'chats'=>[
                        'type'=>'array',
                        'minItems'=>30,
                        'items'=>[
                            'type'=>'object',
                            'properties'=>[
                                'name'=>[
                                    'type'=>'string',
                                    'faker'=>'name.firstName',
                                ],
                                'online'=>[
                                    'type'=>'number',
                                    'faker'=>[
                                        'random.arrayElement'=>[
                                            [
                                                1,
                                                0,
                                            ]
                                        ]
                                    ]
                                ],
                                'lastConnection'=>[
                                    'type'=>'string',
                                    'faker'=>'date.recent',
                                ],
                                'avatar'=>[
                                    'type'=>'string',
                                    'faker'=>[
                                        'random.arrayElement'=>[
                                            [
                                                'red',
                                                'blue',
                                                'gray',
                                                'orange',
                                                'green',
                                            ]
                                        ]
                                    ]
                                ],
                            ],
                            'required'=>[
                                'name',
                                'avatar',
                                'lastConnection',
                                'online'
                            ]
                        ]
                    ],
                    'messages'=>[
                        'type'=>'array',
                        'minItems'=>30,
                        'items'=>[
                            'type'=>'object',
                            'properties'=>[
                                'message'=>[
                                    'type'=>'string',
                                    'faker'=>'lorem.words',
                                ],
                                'dateSend'=>[
                                    'type'=>'string',
                                    'faker'=>'date.recent',
                                ],
                                'status'=>[
                                    'type'=>'string',
                                    'faker'=>[
                                        'random.arrayElement'=>[
                                            [
                                                'wait-send',
                                                'server-received',
                                                'contact-received',
                                                'contact-read',
                                            ]
                                        ]
                                    ]
                                ],
                                'isIncoming'=>[
                                    'type'=>'number',
                                    'faker'=>[
                                        'random.arrayElement'=>[
                                            [
                                                1,
                                                0,
                                            ]
                                        ]
                                    ]
                                ],
                            ],
                            'required'=>[
                                'message',
                                'dateSend',
                                'status',
                                'isIncoming'
                            ]
                        ]
                    ]
                ]
            ]
        ];
        
    }
    
}
