@extends('layouts.mainadmin')


@section('content')
    <style>
        .logos {
            width: 90px;
            background-color: #ff4949;
            border-radius: 5px;
            padding: 10px;
        }

        .ck-rounded-corners {
            /*display: none;*/
        }
    </style>
    <div id="kt_app_header_page_title_wrapper -4">
        <!--begin::Page title-->
        <div data-kt-swapper="true" class="ms-5 mb-5" data-kt-swapper-mode="{default: 'prepend', lg: 'prepend'}" data-kt-swapper-parent="{default: '#kt_app_content_container', lg: '#kt_app_header_page_title_wrapper'}" class="page-title d-flex flex-column justify-content-center me-3 mb-6 mb-lg-0">
            <!--begin::Title-->
            <h1 class="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center me-3 my-0">Content</h1>
            <!--end::Title-->
            <!--begin::Breadcrumb-->
            <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                <!--begin::Item-->
                <li class="breadcrumb-item text-muted">
                    <a href="{{route('admin.dashboard')}}" class="text-muted text-hover-primary">Admin</a>
                </li>
                <!--end::Item-->
                <!--begin::Item-->
                <li class="breadcrumb-item">
                    <span class="bullet bg-gray-500 w-5px h-2px"></span>
                </li>
                <!--end::Item-->
                <!--begin::Item-->
                <li class="breadcrumb-item text-muted">Content</li>
                <!--end::Item-->
                <!--begin::Item-->

                <!--end::Item-->
                <!--begin::Item-->
                <!--end::Item-->
            </ul>
            <!--end::Breadcrumb-->
        </div>
        <!--end::Page title-->
    </div>


    <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
        <!--begin::Content wrapper-->
        <div class="d-flex flex-column flex-column-fluid">
            <!--begin::Content-->
            <div id="kt_app_content" class="app-content flex-column-fluid">
                <!--begin::Content container-->
                <div id="kt_app_content_container" class="app-container container-fluid">
                    <!--begin::Card-->
                    <form action="{{ route('admin.content.store') }}" method="POST" enctype="multipart/form-data">
                        @csrf

                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="first_heading1" class="form-label">First Heading 1</label>
                                <input type="text" name="first_heading1" id="first_heading1" class="form-control" value="{{ old('first_heading1', $content->first_heading1 ?? '') }}">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="first_heading2" class="form-label">First Heading 2</label>
                                <input type="text" name="first_heading2" id="first_heading2" class="form-control" value="{{ old('first_heading2', $content->first_heading2 ?? '') }}">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="second_heading1" class="form-label">Second Heading 1</label>
                                <input type="text" name="second_heading1" id="second_heading1" class="form-control" value="{{ old('second_heading1', $content->second_heading1 ?? '') }}">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="second_heading2" class="form-label">Second Heading 2</label>
                                <input type="text" name="second_heading2" id="second_heading2" class="form-control" value="{{ old('second_heading2', $content->second_heading2 ?? '') }}">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="third_heading1" class="form-label">Third Heading 1</label>
                                <input type="text" name="third_heading1" id="third_heading1" class="form-control" value="{{ old('third_heading1', $content->third_heading1 ?? '') }}">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="third_heading2" class="form-label">Third Heading 2</label>
                                <input type="text" name="third_heading2" id="third_heading2" class="form-control" value="{{ old('third_heading2', $content->third_heading2 ?? '') }}">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="mobile_popup_title" class="form-label">Mobile Popup Title</label>
                                <input type="text" name="mobile_popup_title" id="mobile_popup_title" class="form-control" value="{{ old('mobile_popup_title', $content->mobile_popup_title ?? '') }}">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="mobile_popup_desc" class="form-label">Mobile Popup Description</label>
                                <input type="text" name="mobile_popup_desc" id="mobile_popup_desc" class="form-control" value="{{ old('mobile_popup_desc', $content->mobile_popup_desc ?? '') }}">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="main_title" class="form-label">Main Title</label>
                                <input type="text" name="main_title" id="main_title" class="form-control" value="{{ old('main_title', $content->main_title ?? '') }}">
                            </div>
                            <div class="col-md-12 mb-3">
                                <label for="main_desc" class="form-label">Main Description</label>
                                <textarea name="main_desc" id="main_desc" rows="8" class="form-control" >{!! old('main_desc', $content->main_desc ?? '') !!}</textarea>
                            </div>
                        </div>

                        <!-- Submit -->
                        <div class="text-end mt-4">
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                    <!--end::Modal - Customers - Add-->
                    <!--begin::Modal - Adjust Balance-->

                    <!--end::Modal - New Card-->
                    <!--end::Modals-->
                </div>
                <!--end::Content container-->
            </div>
            <!--end::Content-->
        </div>
        <!--end::Content wrapper-->
        <!--begin::Footer-->
        <!--begin::Footer-->
        <div id="kt_app_footer" class="app-footer">
            <!--begin::Footer container-->
            <div class="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
                <!--begin::Copyright-->
                <div class="text-gray-900 order-2 order-md-1">
                    <span class="text-muted fw-semibold me-1">2024&copy;</span>
                    <a href="https://keenthemes.com" target="_blank" class="text-gray-800 text-hover-primary">Keenthemes</a>
                </div>
                <!--end::Copyright-->
                <!--begin::Menu-->
                <ul class="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                    <li class="menu-item">
                        <a href="https://keenthemes.com" target="_blank" class="menu-link px-2">About</a>
                    </li>
                    <li class="menu-item">
                        <a href="https://devs.keenthemes.com" target="_blank" class="menu-link px-2">Support</a>
                    </li>
                    <li class="menu-item">
                        <a href="https://1.envato.market/Vm7VRE" target="_blank" class="menu-link px-2">Purchase</a>
                    </li>
                </ul>
                <!--end::Menu-->
            </div>
            <!--end::Footer container-->
        </div>
        <!--end::Footer-->
    </div>

@endsection

@section('scripts')
    <script src="{{ asset('admin_assets/plugins/custom/ckeditor/ckeditor-classic.bundle.js') }}"></script>
    <script src="{{ asset('admin_assets/plugins/global/plugins.bundle.js') }}"></script>
    <script src="{{ asset('admin_assets/plugins/custom/formrepeater/formrepeater.bundle.js') }}"></script>


    <script>
        CKEDITOR.replace(document.querySelector('#main_desc'));
    </script>

@endsection
