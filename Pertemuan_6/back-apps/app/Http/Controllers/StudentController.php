<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    //
    public function index(){
        // Melihat data
        // query builder student = DB::table('student')->get();
        $student = Student::all(); // menggunakan eloquent
        if ($student->isEmpty()) {
            $data = [
                'message' => 'Data student tidak ditemukan',
                'data' => []
            ];
            return response()->json($data, 404);
        }
        $data = [
            'message' => 'Get all students',
            'data' => $student
        ];

        return response()->json($data, 200);
    }

    public function store(Request $request){
        // $request->validate([
        //     'nama' => 'required|string|max:255',
        //     'nim' => 'required|string|max:20',
        //     'jurusan' => 'required|string|max:100',
        //     'email' => 'required|email|max:255'
        // ]);

        // $input = [
        //     'nama' => $request->nama,
        //     'nim' => $request->nim,
        //     'jurusan' => $request->jurusan,
        //     'email' => $request->email
        // ];

        $validator = Validator::make($request->all(),[
            'nama' => 'required',
            'nim' => 'numeric|required',
            'jurusan' => 'required',
            'email' => 'email|required'
        ]);

        

        if ($validator->fails()){
            return response()->json([
                'message' => 'Validation errors',
                'errors' =>$validator->errors()
            ], 422);
        }

        $student = Student::create($request->all());

        $data = [
            'message' => 'Data Student berhasil ditambah',
            'data' => $student,
        ];
        return response()->json($data, 201);
    }

    public function update(Request $request, $id){
        $student = Student::find($id);

        if($student){
            $input = [
                'nama' => $request->nama ?? $student->nama,
                'nim' => $request->nim ?? $student->nim,
                'jurusan' => $request->jurusan ?? $student->jurusan,
                'email' => $request->email ?? $student->email 
            ];
            // melakukan update data 
            $student->update($input);
            $data = [
                'message' => 'Data student berhasil diubah',
                'data' => $student
            ];

            return response()->json($data, 200);
        } else{
            $data = [
                'message' => 'Data student gagal diubah'
            ];
            return response()->json($data, 404);
        }
    }

    public function destroy($id){
        $student = Student::find($id); 
        if ($student){
            $student->delete();
            $data = [
                'message' => 'Data Berhasil dihapus'
            ];
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Data tidak berhasil dihapus'
            ];
            return response()->json($data, 404);
        }  

        // $data = [
        //     'message' => 'Data berhasil dihapus',
        //     'data' => $student
        // ];

        // return response()->json($data, 200);
    }

    public function show($id){
        $student = Student::find($id);
        if($student){
            $data = [
                'message' => 'Get detail data',
                'data' => $student
            ];
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Data student tidak ditemukan'
            ];
            return response()->json($data, 404);  
        }
    }
    
}
