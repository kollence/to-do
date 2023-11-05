<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $users = \App\Models\User::factory()->count(5)->create()->each(function ($user) {
            $user->createToken('my-api-token')->plainTextToken;

            \App\Models\Todo::factory()->count(5)->create(['user_id'=>$user->id]);
        });

        \App\Models\User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@mail.com',
        ]);

    }
}
