<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class TaskController extends Controller
{

    public function index ()
    {
        $data = Task::all();
        return response()->json($data);
    }

    public function store(Request $request){

        $rules = [
            'name' => ['required', 'unique:tasks,name']
            ];

        $request->validate($rules);

        $task = new Task();
        $task->fill($request->all());
        $task->save();

        return response()->json('successfully added');
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit($id)
    {
        $data = Task::find($id);

        return response()->json($data);
    }

    public function update(Request $request, $id)
    {
        $task = Task::find($id);
        $rules = [
            'name' => ['required',   Rule::unique('tasks')->ignore($task)]
        ];
        $request->validate($rules);

        $task->name = $request->name;
        $task->save();
        return response()->json('successfully updated');
    }

    public function destroy($id){
        $task = Task::find($id);
        $task->delete();
        return response()->json('successfully delete');
    }
}
