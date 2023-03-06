<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'unitary_value', 'project_id'
    ];

    protected function unitaryValue(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => number_format($value, 2, ',', '.'),
            set: function (string $value) {
                $value = preg_replace("/[.\s]+/", "", $value); // remove pontos e espaços
                $value = preg_replace("/,/", ".", $value); // converte vírgula em ponto
                return $value;
            }
        );
    }
}
