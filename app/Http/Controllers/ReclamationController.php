<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reclamation;
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

public function attestationreuissitePDF(){
    $mpdf = new Mpdf();
        

    // Render the HTML content from the view
    $html = view('demande.attestation_reuissite')->render();

    // Write the HTML to the PDF
    $mpdf->WriteHTML($html);

    // Output the PDF (D = download)
    $mpdf->Output('report.pdf', 'D');

}
    
}
