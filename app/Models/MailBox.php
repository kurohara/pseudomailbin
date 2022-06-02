<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MailBox extends Model
{
    use HasFactory;
    protected $fillable = [
        'protocol',
        'address',
        'port',
        'name',
        'username',
        'password',
        'user_id'
    ];

    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    public function message($id)
    {
        return $this->messages->find($id);
    }
}
