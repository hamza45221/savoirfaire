<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Images extends Model
{
    protected $guarded=[];

    protected $casts = [

    ];


//    protected $appends=['image'];


    /**
     * Get the options for generating the slug.
     */

    public function getMainImage1Attribute()
    {
        if (!$this->image) return null;

        if (Storage::disk('public')->exists($this->image)) {
            return Storage::url($this->image);
        }

        return asset($this->image);
    }

}
