<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::orderBy('name')->get();

        return response()->json([
            'status' => 200,
            'data'   => $projects,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        $project = Project::create($request->all());

        return response()->json([
            'status'    => 200,
            'message'   => 'Projeto registrado com sucesso',
            'data'      => $project,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        return response()->json([
            'status'    => 200,
            'data'      => $project,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $project->update($request->all());

        return response()->json([
            'status'    => 200,
            'message'   => 'Projeto atualizado com sucesso',
            'data'      => $project,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->delete();

        return response()->json([
            'status'    => 200,
            'message'   => 'Projeto removido com sucesso'
        ]);
    }
}
