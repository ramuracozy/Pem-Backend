<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    //
    protected $table = 'student';
    protected $fillable = ['nama', 'nim', 'jurusan', 'email'];
    public $timestamps = false;
}
