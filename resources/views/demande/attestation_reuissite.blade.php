<!DOCTYPE html>
<html>
<head>

    <title>Generated Report</title>
    <style>
  html, body {
    height: 100%; 
    margin: 0;
    padding-top:0;


}
body{
    width: 100%;
    padding-top:0;
    margin:0px;
    padding-top:0px;
}
.header_container {
    width: 100%;
    margin-left: 0cm;
    margin-right: 0cm;
    margin-top:0;
}
.header_table{
    margin:0;
    padding:0;
}

.image_logo {
    display: table-cell;
    vertical-align: middle;
    width: 2cm;
    text-align: left; /* Align image to the left */
    margin-right:0.3cm;
}

.title {
    display: table-cell;
    vertical-align: middle;
    font-weight: bold;
    color: black; 
    font-size:30px;
    text-align: center; 
}
.footer_note {
            margin: 30px auto;
            font-size: 13px;
            color: black;
        }



</style>

</head>
<body >
    <div class="header_container" >
    <table class="header_table">
    <tr>
        <td class="title" style="width: 20%; font-size:15px; ">Université Abdelmalek Essaâdi Ecole Nationale des Sciences Appliquées Tétouan</td>
        <td style="width: 2cm; background-color:green;"></td>
        <td style="width: 30%; background-color:white;"></td>
             
        </tr>

    </table>

    </div>

    <table style="width: 100%; margin-top:1cm">
        <tr>
            <td  style="text-align: center; vertical-align: middle;
            font-size:40px; font-weight:bold ;font-family:Antonio;">Attestation de Réussite
            </td>
        </tr>
    </table>
    <hr style="height: 2px; color:black; margin-top:0; margin-bottom:0;">

    <table style="width:100%; margin-top:1cm; margin-left:0.5cm;">
        <tr> 
            <td style="font-size:20px;"> Le Directeur de  L’Ecole Nationale des Sciences Appliquées, Université Abdelmalek Essaâdi - Tétouan, atteste que :</td>
        </tr>
    </table>

    <table style="width:60%; margin-top:1cm; margin-left:1cm;">
        <tr style="margin-bottom:0.8cm;"> 
            <td style="font-size:20px;width:8cm;font-weight:bold "> Mr (Mlle) </td>
            <td style="font-size:20px;margin-left:10%; margin-right:10%; "> : </td>
            <td style="font-size:20px; width:7cm;"> {{ $result->name }}</td>
        </tr>
        <tr style="margin-bottom:0.8cm;"> 
            <td style="font-size:20px;width:8cm;font-weight:bold "> Né(e) le </td>
            <td style="font-size:20px;margin-left:10%; margin-right:10%; "> : </td>
            <td style="font-size:20px; width:7cm;"> 21-01-2003 a OUAZZANE</td>
        </tr>
        <tr style="margin-bottom:0.8cm;"> 
            <td style="font-size:20px;width:8cm;font-weight:bold "> Portant le CNE </td>
            <td style="font-size:20px;margin-left:10%; margin-right:10%; "> : </td>
            <td style="font-size:20px; width:7cm;"> {{$result->CNE}}</td>
        </tr>
         <tr style="margin-bottom:0.8cm;"> 
            <td style="font-size:20px;width:8cm;font-weight:bold ">Numéro Apogée  </td>
            <td style="font-size:20px;margin-left:10%; margin-right:10%; "> : </td>
            <td style="font-size:20px; width:7cm;"> {{$result->N_Apogee}}</td>
        </tr>

    </table>
    @if($average > 10)
    <table style="width:100%; margin-top:1cm; margin-left:0.5cm;">
        <tr> 
            <td style="font-size:20px;"> A réussi les examens de la {{$result->niveau}}  en validant tous les modules de la filière :</td>
        </tr>
    </table>
    @else
    <table style="width:100%; margin-top:1cm; margin-left:0.5cm;">
        <tr> 
            <td style="font-size:20px;"> N'a pas réussi les examens de la {{$result->niveau}}  </td>
        </tr>
    </table>
    @endif
    <table style="width:60%; margin-top:1cm; margin-left:1cm;">
        <tr style="margin-bottom:0.8cm;"> 
            <td style="font-size:20px;width:3cm;font-weight:bold "> Filière </td>
            <td style="font-size:20px;margin-left:10%; margin-right:10%; "> : </td>
            <td style="font-size:20px; width:100%;"> {{$result->filiere}}</td>
        </tr>
        <tr style="margin-bottom:0.8cm;"> 
            <td style="font-size:20px;width:3cm; font-weight:bold">Session </td>
            <td style="font-size:20px;margin-left:10%; margin-right:10%; "> : </td>
            <td style="font-size:20px;width:100%;">Printemps {{$result->annee1}}/{{$result->annee2}}</td>
        </tr>
        <tr style="margin-bottom:0.8cm;"> 
            <td style="font-size:20px;width:6cm; font-weight:bold">Avec mention :</td>
            <td style="font-size:20px;margin-left:10%; margin-right:10%; "> : </td>
            <td style="font-size:20px;width:100%;">{{$average}}</td>
        </tr>
    </table>
    <div class="footer_note" style="margin-top:250px;">
        <hr>
        NB : La présente attestation n'est délivrée qu'en un seul exemplaire. Il appartient à l'étudiant d'en faire des photocopies certifiées conformes.
    </div>
   
    
    
</body>
</html>