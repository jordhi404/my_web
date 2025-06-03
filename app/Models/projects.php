<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class projects extends Model
{
    protected $connection = 'pgsql';
    protected $table = 'projects';
    protected $primaryKey = 'id';

    protected $fillable = [
        'title', 'description', 'tech_stack', 'role', 'year', 'project_url', 'img_url'
    ];
}