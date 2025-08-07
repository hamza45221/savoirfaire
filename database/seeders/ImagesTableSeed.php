<?php

namespace Database\Seeders;

use App\Models\Images;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ImagesTableSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $image = new Images();
        $image->image ='savoir-images/6fa60bd0-b6c8-4058-a926-de8bc10c90a9_D-Housebar-0001.webp';
        $image->save();
        $image = new Images();
        $image->image ='savoir-images/5142d8c6-33b7-48de-a3b2-7f93d0dcb716_D-Housebar-0004.webp';
        $image->save();
        $image = new Images();
        $image->image ='savoir-images/aFtpX3fc4bHWism7_D-Inkwell-003.webp';
        $image->save();
        $image = new Images();
        $image->image ='savoir-images/aFtpXHfc4bHWism4_D-Inkwell-001.webp';
        $image->save();
        $image = new Images();
        $image->image ='savoir-images/aFtpY3fc4bHWism__D-Inkwell-007.webp';
        $image->save();
        $image = new Images();
        $image->image ='savoir-images/aFtpYHfc4bHWism8_D-Inkwell-004.webp';
        $image->save();
        $image = new Images();
        $image->image ='savoir-images/ZwMOr7VsGrYSwa4Y_D-SacksCo-0004.png';
        $image->save();
        $image = new Images();
        $image->image ='savoir-images/ZwMOrLVsGrYSwa4V_D-SacksCo-0001.png';
        $image->save();
    }
}
