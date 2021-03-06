<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    protected $hidden = ['id', 'created_at', 'updated_at'];


    protected $fillable = [
        'name', 'temp', 'prediction', 'description',
    ];
}
