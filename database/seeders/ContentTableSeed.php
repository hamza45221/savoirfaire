<?php

namespace Database\Seeders;

use App\Models\Content;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContentTableSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $content = new Content();
        $content->first_heading1 = 'Knowing by doing';
        $content->first_heading2 = 'SavoirFaire';
        $content->second_heading1 = 'Digital & Branding Design';
        $content->second_heading2 = 'Photography & Film Production ';
        $content->third_heading1 = 'Founded in 2020';
        $content->third_heading2 = 'Brooklyn, NY';
        $content->mobile_popup_title = 'Oops!';
        $content->mobile_popup_desc = 'We didn’t plan for this... Please rotate your phone back to vertical.';
        $content->main_title= 'SavoirFaire©. Holistic creative studio based in NYC.';
        $content->main_desc= 'SavoirFaire© is a holistic creative studio on a mission to help businesses make their vision a tangible reality: we bring brands to life, crafts best-in-class digital experiences and tell stories in meaningful ways.';
        $content->save();
    }
}
