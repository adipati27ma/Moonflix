<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    function show(Movie $movie)
    {
        return inertia('User/Dashboard/Movie/Show', ['movie' => $movie]);
    }
}
