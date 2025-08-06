<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contents', function (Blueprint $table) {
            $table->id();
            $table->string('first_heading1')->nullable();
            $table->string('first_heading2')->nullable();
            $table->string('second_heading1')->nullable();
            $table->string('second_heading2')->nullable();
            $table->string('third_heading1')->nullable();
            $table->string('third_heading2')->nullable();
            $table->string('mobile_popup_title')->nullable();
            $table->text('mobile_popup_desc')->nullable();
            $table->string('main_title')->nullable();
            $table->text('main_desc')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contents');
    }
};
