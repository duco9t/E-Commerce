<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\FieldResource ;
use App\Models\Field;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class FieldController extends Controller 
{
   
    public function index()
    {
       
        $f = Field::all();

        $arr = [
            'status' => true,
            'message' => 'Danh sách',
            'data' => FieldResource::collection($f)
        ];

        return response()->json($arr, 200);
    }
    public function store(Request $request)
    {
        
        $input = $request->all();

        $validator = Validator::make($input, [
            'name' => 'required',
        ]);
        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $f = Field::create($input);
        $arr = [
            'status' => true,
            'message' => "đã lưu thành công",
            'data' => new FieldResource($f)
        ];
        return response()->json($arr, 201);
    }
    public function update(Request $request, string $id)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'name' => 'required',
            
            
        ]);
    
        if ($validator->fails()) {
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
    
        $f = Field::find($id);
    
        if (!$f) {
            $arr = [
                'status' => false,
                'message' => 'không tồn tại',
                'data' => null
            ];
            return response()->json($arr, 404);
        }
    
        $f->update($input);
    
        $arr = [
            'status' => true,
            'message' => 'cập nhật thành công',
            'data' => new FieldResource($f)
        ];
    
        return response()->json($arr, 200);
    }
    public function destroy(string $id)
    {
        try {
            $f = Field::findOrFail($id);
            $f->delete();

            $arr = [
                'status' => true,
                'message' => 'đã được xóa thành công',
                'data' => null
            ];

            return response()->json($arr, 200);
        } catch (ModelNotFoundException $e) {
            $arr = [
                'success' => false,
                'message' => ' không tồn tại',
                'data' => null
            ];

            return response()->json($arr, 404);
        }
    }
}
