<?php
namespace App\Http\Controllers;
use App\Models\Demande;
use App\Models\Student;
use Illuminate\Support\Facades\DB;



use Inertia\Inertia;

class CustomAdminController extends Controller
{
    public function show()
    {
    $demande = Demande::join('students', 'demandes.student_id', '=', 'students.id') 
        ->select('demandes.*', DB::raw('DATE(demandes.created_at) as date'), 'students.name as name', 'students.cne as cne') 
        ->get();
        return Inertia::render('Admin/reclamation',[
    'demandes'=>$demande ]);
    }
}
?>
