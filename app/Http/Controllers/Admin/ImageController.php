<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Images;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function index()
    {
        $case = Images::all();
        return view('admin.heromain',compact('case'));
    }

    public function fetch()
    {
        $campaigns = Images::select('*')->get();

        return datatables()->of($campaigns)
            ->editColumn('id', function ($pg) {
                return '
                <div class="form-check form-check-sm form-check-custom form-check-solid">
                    <input class="form-check-input" type="checkbox" value="' . e($pg->id) . '" />
                </div>';
            })
            ->editColumn('image', function ($row) {
                $imageUrl = e($row->main_image1); // accessor should return a valid URL
                return '
                <div class="d-flex flex-wrap align-items-center">
                    <a href="' . $imageUrl . '" class="symbol symbol-50px p-1" target="_blank">
                        <span class="symbol-label" style="background-image:url(' . $imageUrl . ');"></span>
                    </a>
                </div>';
            })
            ->addColumn('actions', function ($program) {
                $data = e(json_encode($program));

                return '
                <a href="#" class="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                    Actions <i class="ki-outline ki-down fs-5 ms-1"></i>
                </a>
                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                    <div class="menu-item px-3">
                        <a data-bs-toggle="modal" data-bs-target="#kt_modal_add_customer"
                           data-dt=\'' . $data . '\'
                           data-id="' . e($program->id) . '"
                           class="menu-link btn-edit px-3">Edit</a>
                    </div>
                    <div class="menu-item px-3">
                        <a href="' . route('admin.image.delete', $program->id) . '"
                           data-kt-customer-table-filter="delete_row"
                           class="menu-link px-3">Delete</a>
                    </div>
                </div>';
            })
            ->rawColumns(['id', 'actions', 'image'])
            ->make(true);
    }

    public function store(Request $request)
    {

        $case=Images::firstOrNew(['id'=>$request->id]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('uploads','public');
            $case->image = 'storage/' . $path;
        }

        $case->save();
        return response(['success'=>true,'message'=>'Image updated successfully...']);
    }
    public function delete($id)
    {
        $program=Images::find($id);
        if ($program){
            $program->delete();
            return redirect()->back()->with('success','Case deleted successfully...');
        }
        return redirect()->back()->with('error','Error While deleting Program...');
    }
    public function deleteMultiple(Request $request){
        $departments = Images::whereIn('id',$request->id)->delete();
        return response(['success'=>true,'message'=>'Selected row deleted successfully...']);
    }
}
