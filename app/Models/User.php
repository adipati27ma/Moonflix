<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    //* memanggil fungsi berikut tidak semudah di blade, atau di Controller seperti biasa,
    //* tapi tetap bisa dipanggil di Controller (gak tau kenapa deh), maka dari itu dibuat menjadi Global Variable
    //* di file "HandleInertiaRequests.php"
    //! docs: berfungsi utk memeriksa apakah User sudah subscribe atau belum, jika belum maka tidak bisa akses dashboard.
    function getIsActiveAttribute()
    {
        if (!$this->LastActiveUserSubscription) {
            return false;
        }

        $dateNow = Carbon::now();
        $dateExpired = Carbon::create($this->LastActiveUserSubscription->expired_date);

        return $dateNow->lessThanOrEqualTo($dateExpired); // jika dateNow <= date expired : not active (false)
    }

    /**
     * Get the LastActiveUserSubscription associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function LastActiveUserSubscription(): HasOne
    {
        //* User mencari relasi dari tabel UserSubscription, jika ada cari yang payment_status == 'paid'
        //* lalu ambil rekaman data terbaru (jika manual, dilihat dari created_at)
        return $this->hasOne(UserSubscription::class)->wherePaymentStatus('paid')->latest();
    }
}
