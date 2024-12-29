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

             
        </tr>

    </table>

    </div>

    <table style="width: 100%; margin-top:1cm">
        <tr>
            <td  style="text-align: center; vertical-align: middle;
            font-size:40px; font-weight:bold ;font-family:Antonio;">Releve Des Notes</td>
        </tr>
    </table>
    <hr style="height: 2px; color:black; margin-top:0; margin-bottom:0;">

    
    <table style="width:60%; margin-top:1cm; margin-left:1cm;">
        <tr style="margin-bottom:0.8cm;"> 
            <td style="font-size:20px;width:3cm;font-weight:bold "> NOM </td>
            <td style="font-size:20px;margin-left:10%; margin-right:10%; "> : </td>
            <td style="font-size:20px; width:7cm;"> {{$result->name}}</td>
        </tr>
        <tr style="margin-bottom:0.8cm;"> 
            <td style="font-size:20px;width:3cm;font-weight:bold ">  CNE </td>
            <td style="font-size:20px;margin-left:10%; margin-right:10%; "> : </td>
            <td style="font-size:20px; width:7cm;"> {{$result->CNE}}</td>
        </tr>
        <tr style="margin-bottom:0.8cm;"> 
            <td style="font-size:20px;width:3cm;font-weight:bold "> N_Apogee</td>
            <td style="font-size:20px;margin-left:10%; margin-right:10%; "> : </td>
            <td style="font-size:20px; width:7cm;"> {{$result->N_Apogee}}</td>
        </tr>
        <tr style="margin-bottom:0.8cm;"> 
            <td style="font-size:20px;width:3cm;font-weight:bold ">ANEE  </td>
            <td style="font-size:20px;margin-left:10%; margin-right:10%; "> : </td>
            <td style="font-size:20px; width:7cm;"> {{$result->annee}}</td>
        </tr>
         <tr style="margin-bottom:0.8cm;"> 
            <td style="font-size:20px;width:3cm;font-weight:bold ">FILIERE  </td>
            <td style="font-size:20px;margin-left:10%; margin-right:10%; "> : </td>
            <td style="font-size:20px; width:7cm;"> {{$result->filiere}}</td>
        </tr>
        <tr style="margin-bottom:0.8cm;"> 
            <td style="font-size:20px;width:3cm;font-weight:bold ">SEMESTRE </td>
            <td style="font-size:20px;margin-left:10%; margin-right:10%; "> : </td>
            <td style="font-size:20px; width:7cm;"> 1</td>
        </tr>
        

    </table>
    <table style="width:100%; margin-top:1cm; margin-left:0.5cm;">
        <tr> 
            <td style="font-size:15px;"> A Obtenue les notes suivants  :</td>
        </tr>
    </table>
    <table style="width:100% ;margin-top:0.4cm; margin-left:0.5cm;">
                <tr>
                    <th style="border: 1px solid #ddd;padding: 8px;text-align: left; background-color:#f2f2f2;color: #333;">MOdule</th>
                    <th style="border: 1px solid #ddd;padding: 8px;text-align: left; background-color:#f2f2f2;color: #333;">NOTE</th>
                </tr>
                @foreach($notes as $note)
                <tr>
                    <td style="border: 1px solid #ddd;padding: 8px;text-align: left;">{{$note->Module}}</td>
                    <td style="border: 1px solid #ddd;padding: 8px;text-align: left;">{{$note->note}}</td>
                </tr>
                @endforeach
                
        </table>
    <div class="footer_note" style="margin-top:10px;">
        Resultat admission : {{$average}}        
    </div>
   
    
    
</body>
</html>