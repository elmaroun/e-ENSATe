<?php
namespace App\Http\Controllers;
use Mpdf\Mpdf;
use App\Models\Note;
use Inertia\Inertia;
use App\Models\Demande;
use App\Models\Student;
use App\Models\Reclamation;






use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Mail\EmailEnvoyer;
use App\Mail\EmailEnvoyerRec;

use Illuminate\Support\Facades\Mail;







class CustomAdminController extends Controller
{

    public function show(Request $request)
    {
    $query = Demande::join('students', 'demandes.student_id', '=', 'students.id')
        ->select('demandes.*', DB::raw('DATE(demandes.created_at) as date'), 'students.name as name', 'students.N_Apogee as N_Apogee');

    if ($request->has('type_demande') && $request->type_demande != "Tous les demandes") {
        $query->where('type_demande', $request->type_demande);
        $type_demande=$request->type_demande;
    }else{

        $type_demande='Tous les demandes';
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
        
    $demande = $query->paginate(10)->withQueryString();
   
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
        $demande = $query1->first();
        $query2 = Demande::join('convention_stages', 'demandes.id', '=', 'convention_stages.demande_id')
            ->where('demandes.id', $id)
            ->select('convention_stages.*',DB::raw('DATE(convention_stages.created_at) as date'));
        $convetion = $query2->get();

        if ($demande && $demande->status === 'Non traitée') {
            Demande::where('id', $id)->update(['status' => 'En cours']);
            
        }


        return Inertia::render('Admin/details_demande_convention',
    ['demandes'=>[$demande],
    'id'=>$id,
    'conventions'=> $convetion]);
    }

    public function show_attestation_reussite($id)
    {

        $query1 = Demande::join('students', 'demandes.student_id', '=', 'students.id')
            ->where('demandes.id', $id)
            ->select('demandes.*',  'students.*');
        $demande = $query1->first();
        $query2 = Demande::join('attestation_reussites', 'demandes.id', '=', 'attestation_reussites.demande_id')
            ->where('demandes.id', $id)
            ->select('attestation_reussites.*',DB::raw('DATE(attestation_reussites.created_at) as date'));
        $attestation_reussittes = $query2->get();

        foreach ($attestation_reussittes as $attestation) {
            $attestation->annee2 = $attestation->annee + 1;
        }

        if ($demande && $demande->status === 'Non traitée') {
            Demande::where('id', $id)->update(['status' => 'En cours']);
            
        }

        return Inertia::render('Admin/details_demande_attestation_reussite',
        ['demandes'=>[$demande],
        'id'=>$id,
        'attestation_reussittes'=> $attestation_reussittes]);
    }
    public function show_attestation_scolarite($id)
    {
        $query1 = Demande::join('students', 'demandes.student_id', '=', 'students.id')
            ->where('demandes.id', $id)
            ->select('demandes.*',  'students.*');
        $demande = $query1->first();
        $query2 = Demande::join('attestation_scolarites', 'demandes.id', '=', 'attestation_scolarites.demande_id')
            ->where('demandes.id', $id)
            ->select('attestation_scolarites.*',DB::raw('DATE(attestation_scolarites.created_at) as date'));
        $attestation_scolarites = $query2->get();

        foreach ($attestation_scolarites as $attestation) {
            $attestation->annee2 = $attestation->annee + 1;
        }

        if ($demande && $demande->status === 'Non traitée') {
            Demande::where('id', $id)->update(['status' => 'En cours']);
            
        }

        return Inertia::render('Admin/details_demande_attestation_scolarite',
        ['demandes'=>[$demande],
        'id'=>$id,
        'attestation_scolarites'=> $attestation_scolarites]);
    }
    public function show_releve_notes($id)
    {
        $query1 = Demande::join('students', 'demandes.student_id', '=', 'students.id')
            ->where('demandes.id', $id)
            ->select('demandes.*',  'students.*');
        $demande = $query1->first();
        $query2 = Demande::join('releve_notes', 'demandes.id', '=', 'releve_notes.demande_id')
            ->where('demandes.id', $id)
            ->select('releve_notes.*',DB::raw('DATE(releve_notes.created_at) as date'));
        $releve_notes = $query2->get();

        foreach ($releve_notes as $releve) {
            $releve->annee2 = $releve->annee + 1;
        }

        if ($demande && $demande->status === 'Non traitée') {
            Demande::where('id', $id)->update(['status' => 'En cours']);
            
        }

        return Inertia::render('Admin/details_demande_releve_notes',
        ['demandes'=>[$demande],
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
        $result_1 = $query->first();   
        // Initialize Mpdf instance
        $mpdf = new Mpdf();       
        $html = view('demande.convention_stage',
        [ 'results'=> $result ])->render();

        // Write the HTML to the PDF
        $mpdf->WriteHTML($html);

        // Output the PDF (D = download)
        $path = storage_path('app/public/scolarite.pdf'); // Par exemple dans /storage/app/public

        $data = [
            'subject' => 'Votre convention de stage',
            'body' => "Cher(e) {$result_1->name},
                        Nous avons le plaisir de vous transmettre votre convention de stage en pièce jointe. Veuillez la vérifier attentivement et nous faire part de toute correction nécessaire.

                        Ne hésitez pas à revenir vers nous en cas de besoin.
                        Cordialement,  
                        École nationale des sciences appliquées de Tétouan - service de scolarité  <br><br>
                        ensate@uae.ac.ma
                        Avenue de la Palestine Mhanech I, TÉTOUAN ",
            'path'=> '\app\public\scolarite.pdf',
        ];
        Demande::where('id', $id)->update([
            'status' => 'Traitée',
        ]);
        $mpdf->Output($path, 'F');
        Mail::to('maroun.ilias@etu.uae.ac.ma')->send(new EmailEnvoyer($data));
        return redirect('/demandes');
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
        $result_1 = $query->first(); 
        $mpdf = new Mpdf();
        $html = view('demande.attestation_scolarite',[ 'results'=> $result ])->render();
        // Write the HTML to the PDF
        $mpdf->WriteHTML($html);
        $path = storage_path('app/public/ATTESTATION_SCOLARITE.pdf'); // Par exemple dans /storage/app/public
        $data = [
            'subject' => 'Votre attestation de scolarité ',
            'body' => "Cher(e) {{$result_1->name}},
                        Veuillez trouver ci-joint votre attestation de scolarité.
                        Si vous avez des questions ou besoin d'autres documents, n'hésitez pas à nous contacter.
                        Cordialement,  
                        École nationale des sciences appliquées de Tétouan - service de scolarité  <br><br>
                        ensate@uae.ac.ma
                        Avenue de la Palestine Mhanech I, TÉTOUAN ",
            'path'=> '\app\public\ATTESTATION_SCOLARITE.pdf',
        ];
        Demande::where('id', $id)->update([
            'status' => 'Traitée',
        ]);
        
        $mpdf->Output($path, 'F');
        Mail::to('maroun.ilias@etu.uae.ac.ma')->send(new EmailEnvoyer($data));
        return redirect('/demandes');
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
            ->where('annee', $result->annee);
        $notes= $query->get();
        $average = $query->avg('note');
        $mpdf = new Mpdf();
        $html = view('demande.relevee_notes',[
        'average'=> $average ,
        'result' => $result,
        'notes' => $notes,
        ])->render();
        $mpdf->WriteHTML($html);
        $path = storage_path('app/public/Releve_de_notes.pdf'); // Par exemple dans /storage/app/public

        $data = [
            'subject' => ' votre Relevé de notes',
            'body' => "Cher(e) {$result->name},
                        Nous vous transmettons votre relevé de notes pour la période concernée. Ce document est joint à cet email au format PDF.
                         Si vous avez des questions ou si une erreur s'est glissée, merci de nous le signaler au plus vite.
                        Cordialement,  
                        École nationale des sciences appliquées de Tétouan - service de scolarité  <br><br>
                        ensate@uae.ac.ma
                        Avenue de la Palestine Mhanech I, TÉTOUAN ",
            'path'=> '\app\public\Releve_de_notes.pdf',
        ];
        Demande::where('id', $id)->update([
            'status' => 'Traitée',
        ]);

        $mpdf->Output($path, 'F');
        Mail::to('maroun.ilias@etu.uae.ac.ma')->send(new EmailEnvoyer($data));

        return redirect('/demandes');
    }


    public function refuser_demande_document($id){
    $result = Demande::where('id', $id)
        ->first();
    if ($result->type_demande == "Convention de Stage"){
        $data = [
            'subject' => "Refus de la demande d'attestation de stage",
            'body' => "Votre demande d'attestation de stage a été refusée.\n\n" .
                      "Cordialement,\n" .
                      "École nationale des sciences appliquées de Tétouan - service de scolarité\n" .
                      "ensate@uae.ac.ma\n" .
                      "Avenue de la Palestine Mhanech I, TÉTOUAN"
        ];
        

    } else if($result->type_demande == "Relevé des Notes"){
        $data = [
            'subject' => "Refus de la demande de relevé de notes",
            'body' => "Votre demande de relevé de notes a été refusée.\n\n" .
                      "Cordialement,\n" .
                      "École nationale des sciences appliquées de Tétouan - service de scolarité\n" .
                      "ensate@uae.ac.ma\n" .
                      "Avenue de la Palestine Mhanech I, TÉTOUAN"
        ];

    }else if($result->type_demande == "Attestation de Scolarité"){
        $data = [
            'subject' => "Refus de la demande de certificat de scolarité",
            'body' => "Votre demande de certificat de scolarité a été refusée.\n\n" .
                      "Cordialement,\n" .
                      "École nationale des sciences appliquées de Tétouan - service de scolarité\n" .
                      "ensate@uae.ac.ma\n" .
                      "Avenue de la Palestine Mhanech I, TÉTOUAN"
        ];
        

    }else {
        $data = [
            'subject' => "Refus de la demande d'attestation de réussite",
            'body' => "Votre demande d'attestation de réussite a été refusée.\n\n" .
                      "Cordialement,\n" .
                      "École nationale des sciences appliquées de Tétouan - service de scolarité\n" .
                      "ensate@uae.ac.ma\n" .
                      "Avenue de la Palestine Mhanech I, TÉTOUAN"
        ];

    }
    Mail::to('maroun.ilias@etu.uae.ac.ma')->send(new EmailEnvoyerRec($data));
    return redirect('/demandes');

        
    }

    
        public function indexDashboard()
        {
            // Demandes
            $totalDemandes = Demande::count();
            $demandesTraitees = Demande::where('status', 'Traitée')->count();
            $demandesEnCours = Demande::where('status', 'En Cours')->count();
            $demandesNonTraitees = Demande::where('status', 'Non Traitée')->count();
    
            $attestationScolarite = Demande::where('type_demande', 'Attestation de Scolarité')->count();
            $attestationReussite = Demande::where('type_demande', 'Attestation de Réussite')->count();
            $releveNotes = Demande::where('type_demande', 'Relevé des Notes')->count();
            $conventionStage = Demande::where('type_demande', 'Convention de Stage')->count();
    
            // Réclamations
            $totalReclamations = Reclamation::count();
            $reclamationsTraitees = Reclamation::where('status', 'Traitée')->count();
            $reclamationsEnCours = Reclamation::where('status', 'En Cours')->count();
            $reclamationsNonTraitees = Reclamation::where('status', 'Non Traitée')->count();
    
            $problemeTechnique = Reclamation::where('type', 'Problème Technique')->count();
            $problemeService = Reclamation::where('type', 'Problème de Service à l´école')->count();
            $autreProbleme = Reclamation::where('type', 'Autre Problème')->count();
    
            return Inertia::render('Admin/Dashboard', [
                'totalDemandes' => $totalDemandes,
                'demandesTraitees' => $demandesTraitees,
                'demandesEnCours' => $demandesEnCours,
                'demandesNonTraitees' => $demandesNonTraitees,
                'attestationScolarite' => $attestationScolarite,
                'attestationReussite' => $attestationReussite,
                'releveNotes' => $releveNotes,
                'conventionStage' => $conventionStage,
    
                'totalReclamations' => $totalReclamations,
                'reclamationsTraitees' => $reclamationsTraitees,
                'reclamationsEnCours' => $reclamationsEnCours,
                'reclamationsNonTraitees' => $reclamationsNonTraitees,
                'problemeTechnique' => $problemeTechnique,
                'problemeService' => $problemeService,
                'autreProbleme' => $autreProbleme,
            ]);
        }



}



?>