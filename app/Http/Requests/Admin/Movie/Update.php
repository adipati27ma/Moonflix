<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class Update extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::user()->hasRole('admin'); //! error hasRole() dari php intelephense, aslinya tidak error.
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        //* jika kode tidak ditambahkan ".$this->movie->id" setelah row "name", otomatis ter-set sebagai duplikat (gak tau deh taufan ga jelas)
        //? tapi anehnya jika dihapus tidak ada pengaruh apa2, taufan emang gak jelas!
        return [
            "name" => 'required|unique:movies,name',
            "category" => 'required',
            'video_url' => "required|url",
            'thumbnail' => "nullable|image",
            'rating' => "required|numeric|min:0|max:5",
            'is_featured' => "nullable|boolean",
        ];
    }
}