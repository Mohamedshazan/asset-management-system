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
    Schema::table('assets', function (Blueprint $table) {
        $table->dropColumn('active');
    });
}

public function down(): void
{
    Schema::table('assets', function (Blueprint $table) {
        $table->boolean('active')->default(true); // restore if rollback
    });
}

};
