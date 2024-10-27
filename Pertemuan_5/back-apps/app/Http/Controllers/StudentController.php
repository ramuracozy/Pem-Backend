<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    //
    public function index(){
        // Melihat data
        // query builder student = DB::table('student')->get();
        $student = Student::all(); // menggunakan eloquent
        $data = [
            'message' => 'Get all students',
            'data' => $student
        ];

        return response()->json($data, 200);
    }

    public function store(Request $request){
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'jurusan' => $request->jurusan,
            'email' => $request->email
        ];
        $student = Student::create($input);
        $data = [
            'message' => 'Data berhasil ditambah',
            'data' => $student
        ];
        return response()->json($data, 201);
    }

    public function update(Request $request, $id){
        $student = Student::find($id);

        $student->update([
            'nama' => $request->nama,
            'nim' => $request->nim,
            'jurusan' => $request->jurusan,
            'email' => $request->email
        ]);

        $data = [
            'message' => 'Data berhasil dirubah',
            'data' => $student
        ];

        return response()->json($data, 200);
    }

    public function destroy($id){
        $student = Student::find($id); 

        $student->delete();

        $data = [
            'message' => 'Data berhasil dihapus',
            'data' => $student
        ];

        return response()->json($data, 200);
    }
    
}
