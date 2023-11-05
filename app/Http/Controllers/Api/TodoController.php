<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTodoRequest;
use App\Http\Requests\UpdateTodoRequest;
use App\Http\Resources\TodoResource;
use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();

        if($user->isAdmin()){

            $todos = Todo::all();

            return TodoResource::collection($todos);
        }
        // Get all todos created by the authenticated user
        $todos = $user->todos;

        return TodoResource::collection($todos);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTodoRequest $request)
    {
        return new TodoResource(Todo::create($request->all()));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Todo $todo)
    {
        return new TodoResource($todo);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTodoRequest $request, Todo $todo)
    {
        $this->authorize('update', $todo);
        $todo->update($request->all());
        return new TodoResource($todo);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Todo $todo)
    {
        $this->authorize('delete', $todo);
        return Todo::destroy($todo->id);
    }

    public function updateCompletion(Request $request, $id)
    {
        $todo = Todo::find($id);
        
        if (!$todo) {
            return response()->json(['message' => 'Todo not found'], 404);
        }
        $this->authorize('update', $todo);
        

        $data = $request->validate([
            'completed' => ['required', 'boolean'],
        ]);
        
        $todo->update([
            'completed' => $data['completed'],
        ]);
    
        return response()->json(['message' => $todo->completed]);
    }
}
