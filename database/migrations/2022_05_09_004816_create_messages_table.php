<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('mail_box_id')->constrained()->onDelete('cascade');
            $table->string('header')->nullable(false);
            $table->string('subject')->nullable(false);
            $table->string('slug')->nullable(false);
            $table->text('body')->nullable(false);
            $table->decimal('value', 5, 0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('messages');
    }
};
