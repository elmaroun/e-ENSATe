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
use App\Mail\EmailEnvoyer;
use App\Mail\EmailEnvoyerRec;

use Illuminate\Support\Facades\Mail;


class ReclamationController extends Controller
{
    public function showReclamations(Request $request)
{
    $query = Reclamation::join('students', 'reclamations.student_id', '=', 'students.id')
        ->select(
            'reclamations.*',
            'students.N_Apogee',
            'students.name',
            DB::raw("DATE(reclamations.created_at) as date"),
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
            $query->orderBy('created_at', 'desc');
            $trier_par="Les plus récentes";
        }
        $reclamation = $query->paginate(10)->withQueryString();

   
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
        ->where('annee', $result->annee);
    $average = $query->avg('note');


    $mpdf = new Mpdf(); 
    $html = view('demande.attestation_reuissite',[
        'average'=>$average ,
        'result' =>$result
    ])->render();
    $mpdf->WriteHTML($html);
     $path = storage_path('app/public/ATTESTATION_REUISSITE.pdf'); // Par exemple dans /storage/app/public
     $data = [
            'subject' => ' Votre attestation de réussite ',
            'body' => "Cher(e) {{$result->name}},
            Nous vous adressons toutes nos félicitations pour votre réussite. Votre attestation de réussite est jointe à cet email.
                        Si vous avez des questions ou besoin d'autres documents, n'hésitez pas à nous contacter.
                        Cordialement,  
                        École nationale des sciences appliquées de Tétouan - service de scolarité  
                        ensate@uae.ac.ma
                        Avenue de la Palestine Mhanech I, TÉTOUAN ",
            'path'=> '\app\public\ATTESTATION_REUISSITE.pdf',
        ];
        Demande::where('id', $id)->update([
            'status' => 'Traitée',
        ]); 
        $mpdf->Output($path, 'F');
        Mail::to('maroun.ilias@etu.uae.ac.ma')->send(new EmailEnvoyer($data));
        return 'Email sent successfully';
}



public function resoudrereclamation ( Request $request ){
    $data = $request->validate([
        'sujet' => 'required|string',
        'reponse' => 'required|string|max:1000',
    ]);
    $data = [
        'subject' => "sujet: {$request->sujet}",
        'body' => "réponse: {$request->reponse}\n\n" .
                  "Cordialement,\n" .
                  "École nationale des sciences appliquées de Tétouan - service de scolarité\n" .
                  "ensate@uae.ac.ma\n" .
                  "Avenue de la Palestine Mhanech I, TÉTOUAN"
    ];

    Mail::to('elhauari.imohamed@etu.uae.ac.ma')->send(new EmailEnvoyerRec($data));
    return 'Email sent successfully';

    return redirect('/reclamations');

}
    
}
