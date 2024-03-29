<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@moonflix.test',
            'password' => 'password'
        ]);
        $admin->assignRole('admin');

        $user = User::create([
            'name' => 'User 1',
            'email' => 'user1@moonflix.test',
            'password' => 'password'
        ]);
        $user->assignRole('user');
    }
}
