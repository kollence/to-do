<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Todo extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected static function booted()
    {   
        static::created(function ($todo) {
            $todo->update(['slug' => Str::slug($todo->title)]);
        });
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
