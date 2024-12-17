<?php
namespace App\Http\Controllers;
use App\Models\Demande;
use App\Models\Student;
use App\Models\Note;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Mpdf\Mpdf;






use Inertia\Inertia;

class CustomAdminController extends Controller
{

    public function show(Request $request)
    {
    $query = Demande::join('students', 'demandes.student_id', '=', 'students.id')
        ->select('demandes.*', DB::raw('DATE(demandes.created_at) as date'), 'students.name as name', 'students.cne as cne');

    if ($request->has('type_demande') && $request->type_demande != "tout demande") {
        $query->where('type_demande', $request->type_demande);
        $type_demande=$request->type_demande;
    }else{

        $type_demande='tout demande';
    }
    if ($request->has('trier_par') && $request->trier_par =="Status de demande"){
        $query->orderBy('status', 'desc');
        $trier_par=$request->trier_par;
    }elseif($request->has('trier_par') && $request->trier_par =="Etudiant"){
        $query->orderBy('name', 'asc');
        $trier_par=$request->trier_par;
    }   
    else{
        $query->orderBy('date', 'desc');
        $trier_par="Les plus récentes";
    }
        
    

    



    $demande = $query->get();

    
        return Inertia::render('Admin/demande',[
    'demandes'=>$demande,
    'type_demande'=> $type_demande,
    'trier_par'=>$trier_par]);
    }
    public function show_convention($id)
    {
        $query1 = Demande::join('students', 'demandes.student_id', '=', 'students.id')
            ->where('demandes.id', $id)
            ->select('demandes.*',  'students.*');
        $demande = $query1->get();
        $query2 = Demande::join('convention_stages', 'demandes.id', '=', 'convention_stages.demande_id')
            ->where('demandes.id', $id)
            ->select('convention_stages.*',DB::raw('DATE(convention_stages.created_at) as date'));
        $convetion = $query2->get();


        return Inertia::render('Admin/details_demande_convention',
    ['demandes'=>$demande,
    'id'=>$id,
    'conventions'=> $convetion]);
    }

    public function show_attestation_reussite($id)
    {

        $query1 = Demande::join('students', 'demandes.student_id', '=', 'students.id')
            ->where('demandes.id', $id)
            ->select('demandes.*',  'students.*');
        $demande = $query1->get();
        $query2 = Demande::join('attestation_reussites', 'demandes.id', '=', 'attestation_reussites.demande_id')
            ->where('demandes.id', $id)
            ->select('attestation_reussites.*',DB::raw('DATE(attestation_reussites.created_at) as date'));
        $attestation_reussittes = $query2->get();



        return Inertia::render('Admin/details_demande_attestation_reussite',
        ['demandes'=>$demande,
        'id'=>$id,
        'attestation_reussittes'=> $attestation_reussittes]);
    }
    public function show_attestation_scolarite($id)
    {
        $query1 = Demande::join('students', 'demandes.student_id', '=', 'students.id')
            ->where('demandes.id', $id)
            ->select('demandes.*',  'students.*');
        $demande = $query1->get();
        $query2 = Demande::join('attestation_scolarites', 'demandes.id', '=', 'attestation_scolarites.demande_id')
            ->where('demandes.id', $id)
            ->select('attestation_scolarites.*',DB::raw('DATE(attestation_scolarites.created_at) as date'));
        $attestation_scolarites = $query2->get();
        return Inertia::render('Admin/details_demande_attestation_scolarite',
        ['demandes'=>$demande,
        'id'=>$id,
        'attestation_scolarites'=> $attestation_scolarites]);
    }
    public function show_releve_notes($id)
    {
        $query1 = Demande::join('students', 'demandes.student_id', '=', 'students.id')
            ->where('demandes.id', $id)
            ->select('demandes.*',  'students.*');
        $demande = $query1->get();
        $query2 = Demande::join('releve_notes', 'demandes.id', '=', 'releve_notes.demande_id')
            ->where('demandes.id', $id)
            ->select('releve_notes.*',DB::raw('DATE(releve_notes.created_at) as date'));
        $releve_notes = $query2->get();
        return Inertia::render('Admin/details_demande_releve_notes',
        ['demandes'=>$demande,
        'id'=>$id,
        'releve_notes'=> $releve_notes]);
    }


    //demande convention image

    public function accepter_demande_convention($id)
    {
        $query = Demande::join('students', 'demandes.student_id', '=', 'students.id')
        ->join('convention_stages', 'demandes.id', '=', 'convention_stages.demande_id')
        ->where('demandes.id', $id)
        ->select(
            'demandes.*',
            'students.*',
            'convention_stages.*',
            DB::raw('DATE(convention_stages.created_at) as date')
        );
    
        $result = $query->get();
        
        // Initialize Mpdf instance
        $mpdf = new Mpdf();
        

        // Render the HTML content from the view
        $html = view('demande.convention_stage',
        [ 'results'=> $result ])->render();

        // Write the HTML to the PDF
        $mpdf->WriteHTML($html);

        // Output the PDF (D = download)
        $mpdf->Output('report.pdf', 'D');
    }




    public function accepter_attestation_scolarite($id)
    {
        $query = Demande::join('students', 'demandes.student_id', '=', 'students.id')
        ->Join('attestation_scolarites', 'demandes.id', '=', 'attestation_scolarites.demande_id')
        ->where('demandes.id', $id)
        ->select(
            'demandes.*',
            'students.*',
            'attestation_scolarites.*',
            DB::raw('DATE(attestation_scolarites.created_at) as date')
        );
    
    $result = $query->get();
    
        $mpdf = new Mpdf();
        


        $html = view('demande.attestation_scolarite',[ 'results'=> $result ])->render();

        // Write the HTML to the PDF
        $mpdf->WriteHTML($html);

        // Output the PDF (D = download)
        $mpdf->Output('scolarite.pdf', 'D');
        return view('demande.attestation_scolarite');
    }
    public function accepter_relevee_notes($id)
    {
        $query = Demande::join('students', 'demandes.student_id', '=', 'students.id')
            ->Join('releve_notes', 'demandes.id', '=', 'releve_notes.demande_id')
            ->where('demandes.id', $id)
            ->select(
                'demandes.*',
                'students.*',
                'releve_notes.*',
                'demandes.student_id as id_student',
                DB::raw('DATE(releve_notes.created_at) as date')
            );
        $result = $query->first();

        $query = Note::where('student_id', $result->name)
            ->where('annee', $result->annee1);
        $notes= $query->get();
        $average = $query->avg('note');
        $mpdf = new Mpdf();
        $html = view('demande.relevee_notes',[
        'average'=> $average ,
        'result' => $result,
        'notes' => $notes,
        ])->render();
        $mpdf->WriteHTML($html);
        $mpdf->Output('releve_notes.pdf', 'D');
    }
}
?>