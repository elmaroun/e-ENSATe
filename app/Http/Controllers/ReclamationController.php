<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reclamation;
use App\Models\Demande;
use App\Models\NOTE;

use Inertia\Inertia;
use App\Models\Student;
use Illuminate\Support\Facades\DB;
use Mpdf\Mpdf;


class ReclamationController extends Controller
{
    public function showReclamations(Request $request)
{
    $query = Reclamation::join('students', 'reclamations.student_id', '=', 'students.id')
        ->select(
            'reclamations.*',
            'students.N_Apogee',
            'students.name',
        );

        if ($request->has('type_reclamation') && $request->type_reclamation != "Tous les réclamation") {
            $query->where('type', $request->type_reclamation);
            $type_reclamation=$request->type_reclamation;
        }else{
    
            $type_reclamation='Tous les réclamation';
        }
        if ($request->has('trier_par') && $request->trier_par =="Status de demande"){
            $query->orderBy('status', 'desc');
            $trier_par=$request->trier_par;
        }elseif($request->has('trier_par') && $request->trier_par =="Etudiant"){
            $query->orderBy('name', 'asc');
            $trier_par=$request->trier_par;
        }   
        else{
            $query->orderBy('date_reclamation', 'desc');
            $trier_par="Les plus récentes";
        }
        $reclamation = $query->get();

   
    return Inertia::render('Admin/reclamation', ['reclamations' => $reclamation , 
    'type'=> $type_reclamation,
    'trier_par'=>$trier_par]);
}

public function showProblemeTechnique($id){
    $query = Reclamation::join('students', 'reclamations.student_id', '=', 'students.id')
    ->where('reclamations.id', $id)
    ->select('reclamations.*', DB::raw('DATE(reclamations.created_at) as date'), 'students.*');
    $reclamation = $query->get();

    return Inertia::render('Admin/probleme_technique',
     ['reclamations'=>$reclamation,
    'id'=>$id,]);

}  

public function attestationreuissitePDF($id){

    $query = Demande::join('students', 'demandes.student_id', '=', 'students.id')
        ->Join('attestation_reussites', 'demandes.id', '=', 'attestation_reussites.demande_id')
        ->where('demandes.id', $id)
        ->select(
            'demandes.*',
            'students.*',
            'attestation_reussites.*',
            'demandes.student_id as id_student',
            DB::raw('DATE(attestation_reussites.created_at) as date')
        );
    $result = $query->first();

    $query = Note::where('student_id', $result->name)
        ->where('annee', $result->annee1);
    $average = $query->avg('note');


    $mpdf = new Mpdf(); 
    $html = view('demande.attestation_reuissite',[
        'average'=>$average ,
        'result' =>$result
    ])->render();
    $mpdf->WriteHTML($html);
    $mpdf->Output('report.pdf', 'D');

}
    
}
