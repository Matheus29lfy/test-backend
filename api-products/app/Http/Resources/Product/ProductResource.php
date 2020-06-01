<?php

namespace App\Http\Resources\Product;

use Illuminate\Http\Resources\Json\Resource;
use Laravel\Passport\Http\Controllers\RetrievesAuthRequestFromSession;

class ProductResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */

  public function PercDiscount($discount){
        if ($discount == 3){
            
            $discount = 3;
        }

        elseif ($discount == 5){
            $discount = 5;
        }
        else{

            $discount = 10;
        }

    }

    public function toArray($request)
    {
       
        
        return [
            'name' => $this->name,
            'description' => $this->detail,
            'price' => $this->price,
            'stock' => $this->stock == 0 ? 'Out of Stock' : $this->stock,
            'discount' => $this->discount == 0 ? $this->discount : $this->PercDiscount($this->discount),                
            'totalPrice' =>  round(( 1 - ($this->discount/100)) * $this->price,2),
        ];
    }
}
