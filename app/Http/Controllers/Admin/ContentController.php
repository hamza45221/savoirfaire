<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Content;
use Illuminate\Http\Request;

class ContentController extends Controller
{
    public function index()
    {
        $content = Content::first();
        return view('admin.content', compact('content'));
    }

    public function Store(Request $request)
    {
        $content = Content::first();

        if (!$content) {
            $content = new Content();
        }

        // Common fields
        $content->first_heading1 = $request->first_heading1;
        $content->first_heading2 = $request->first_heading2;
        $content->second_heading1 = $request->second_heading1;
        $content->second_heading2 = $request->second_heading2;
        $content->third_heading1 = $request->third_heading1;
        $content->third_heading2 = $request->third_heading2;
        $content->mobile_popup_title = $request->mobile_popup_title;
        $content->mobile_popup_desc = $request->mobile_popup_desc;
        $content->main_title = $request->main_title;
        $content->main_desc = $request->main_desc;


        $content->save();

        return back()->with('success', 'Content saved successfully!');
    }

}
