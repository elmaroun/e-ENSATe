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
            font-size:40px; font-weight:bold ;font-family:Antonio;">Attestation de Scolarite
            </td>
        </tr>
    </table>
    <hr style="height: 2px; color:black; margin-top:0; margin-bottom:0;">

    <table style="width:100%; margin-top:1cm; margin-left:0.5cm;">
        <tr> 
            <td style="font-size:20px;"> Je soussigné, Le Directeur de  L’Ecole Nationale des Sciences Appliquées de Tétouan, atteste que</td>
        </tr>
    </table>
    @foreach($results as $result)
    <table style="width:60%; margin-top:1cm; margin-left:1cm;">
        <tr style="margin-bottom:0.8cm;"> 
            <td style="font-size:20px;width:3cm;font-weight:bold "> l'etudiant</td>
            <td style="font-size:20px;margin-left:10%; margin-right:10%; "> : </td>
            <td style="font-size:20px; width:7cm;"> {{ $result->name}}</td>
        </tr>
        <tr style="margin-bottom:0.8cm;"> 
            <td style="font-size:20px;width:3cm;font-weight:bold "> N_Apogee</td>
            <td style="font-size:20px;margin-left:10%; margin-right:10%; "> : </td>
            <td style="font-size:20px; width:7cm;"> {{ $result->N_Apogee}}</td>
        </tr>
        <tr style="margin-bottom:0.8cm;"> 
            <td style="font-size:20px;width:3cm;font-weight:bold "> CNE</td>
            <td style="font-size:20px;margin-left:10%; margin-right:10%; "> : </td>
            <td style="font-size:20px; width:7cm;"> {{ $result->CNE}}</td>
        </tr>
         <tr style="margin-bottom:0.8cm;"> 
            <td style="font-size:20px;width:3cm;font-weight:bold ">Ne le </td>
            <td style="font-size:20px;margin-left:10%; margin-right:10%; "> : </td>
            <td style="font-size:20px; width:7cm;"> 25-05-03 a tetouan</td>
        </tr>

    </table>
    <table style="width:100%; margin-top:1cm; margin-left:0.5cm;">
        <tr> 
            <td style="font-size:20px;"> Poursuit ses études, à L’Ecole Nationale des Sciences Appliquées de Tetouan, au titre de l'année universitaire : {{$result->annee1}}/{{$result->annee2}}</td>
        </tr>
    </table>
    <table style="width:60%; margin-top:1cm; margin-left:1cm;">
        <tr style="margin-bottom:0.8cm;"> 
            <td style="font-size:20px;width:3cm;font-weight:bold "> Diplome</td>
            <td style="font-size:20px;margin-left:10%; margin-right:10%; "> : </td>
            <td style="font-size:20px; width:100%;"> íngenieur(e) d'état</td>
        </tr>
        <tr style="margin-bottom:0.8cm;"> 
            <td style="font-size:20px;width:3cm; font-weight:bold">Filiere</td>
            <td style="font-size:20px;margin-left:10%; margin-right:10%; "> : </td>
            <td style="font-size:20px;width:100%;">{{ $result->filiere}}</td>
        </tr>


    </table>
    @endforeach   
    
    
</body>
</html>
