<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use App\Models\Project;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Project $project)
    {
        $products = Product::orderBy('name')->get();

        return response()->json([
            'status'    => 200,
            'data'      => $products
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request, Project $project)
    {
        $data = array_merge($request->all(), ['project_id' => $project->id]);

        $product = Product::create($data);

        return response()->json([
            'status'    => 200,
            'message'   => 'Produto registrado com sucesso.',
            'data'      => $product
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project, Product $product)
    {
        return response()->json([
            'status'    => 200,
            'data'      => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Project $project, Product $product)
    {
        $product->update($request->all());

        return response()->json([
            'status'    => 200,
            'message'   => 'Produto atualizado com sucesso.',
            'data'      => $product
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project, Product $product)
    {
        $product->delete();

        return response()->json([
            'status'    => 200,
            'message'   => 'Produto removido com sucesso.',
            'id'        => $product->id
        ]);
    }
}
