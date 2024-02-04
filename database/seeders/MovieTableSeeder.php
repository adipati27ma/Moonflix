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
                'thumbnail' => 'https://imgv3.fotor.com/images/blog-richtext-image/Blue-Yellow-Puppy-Training.png',
                'rating' => 9.3,
                'is_featured' => true,
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-god-father',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=zUt9SGcEMVg',
                'thumbnail' => 'https://imgv3.fotor.com/images/blog-richtext-image/Blue-Yellow-Puppy-Training.png',
                'rating' => 9.2,
                'is_featured' => false,
            ],
            [
                'name' => 'The Godfather: Part II',
                'slug' => 'the-god-father-part-ii',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=zUt9SGcEMVg',
                'thumbnail' => 'https://imgv3.fotor.com/images/blog-richtext-image/Blue-Yellow-Puppy-Training.png',
                'rating' => 9.0,
                'is_featured' => false,
            ]
        ];
        Movie::insert($movies);
    }
}
