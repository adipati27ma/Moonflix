<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redeption',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=zUt9SGcEMVg',
                'thumbnail' => '/images/featured-1.png',
                'rating' => 4.3,
                'is_featured' => true,
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-god-father',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=zUt9SGcEMVg',
                'thumbnail' => '/images/featured-1.png',
                'rating' => 4.2,
                'is_featured' => false,
            ],
            [
                'name' => 'The Godfather: Part II',
                'slug' => 'the-god-father-part-ii',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=zUt9SGcEMVg',
                'thumbnail' => '/images/featured-1.png',
                'rating' => 4.0,
                'is_featured' => false,
            ]
        ];
        Movie::insert($movies);
    }
}
