import { Component, Input, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FileUploadService } from '../file-upload.service';
import { empty, isEmpty, Observable } from 'rxjs';
import { newArray } from '@angular/compiler/src/util';
import {DomSanitizer,SafeHtml,SafeResourceUrl} from '@angular/platform-browser'
import { SafePipe } from '../sanitizer.pipe';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-televerser',
  templateUrl: './televerser.component.html',
  styleUrls: ['./televerser.component.scss']
})
export class TeleverserComponent implements OnInit {

  ngOnInit(): void {}


      //pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
      source!: string;
      iFile!: number
      afficher: boolean = false;
      listeFactures: boolean = true;
      clickInfos: boolean = false;
      file!: File; // Variable to store file
      base64Output? : string;
      // Variable to store files
      lesFichiers: File[] = [];
      
       // Inject service 
    constructor(private fileUploadService: FileUploadService, private sanitizer: DomSanitizer, private http: HttpClient ) { }
    // On file Select
    onChange(event) {
      this.file = event.target.files[0];
  }


  // OnClick of button Upload
  onUpload() {
    if (this.file != undefined)
    {
      this.lesFichiers.push(this.file);//Tableau de fichiers
    }
    else
    {
      console.log("Pas de fichier");
    }
    //console.log(this.file);
    
    }

    //onClick on button Supprimer
    onSupprimer(index: number) {
      this.lesFichiers.splice(index, 1);
      this.afficher = false;
    }


    //onClick on button Afficher
    onAfficher(index: number){
      this.afficher = true;
      this.source = URL.createObjectURL(this.lesFichiers[index]);      //Source du fichier en local
      this.iFile = index;

   // console.log(this.source);
    }

    bypass(source: string): SafeResourceUrl{
      return this.sanitizer.bypassSecurityTrustResourceUrl(source);
    }

    onClickInfos()
    {
      //console.log("Infos OK");
      this.listeFactures = false;
      this.clickInfos = true;
      //Connexion admin/admin
      //Connexion au serv linux => Fichier pdf dans le module verifier => recuperer la sortie
      //Client REST
      //maarchRM
      var ipAPI = "http://193.70.36.192";
      //var index
      //Header 
      /*Accept          application/json
        Content-Type    application/json
      */


//Token : phdF9WkJuTKkDuPXoqDZuPs4jdJfIZgY1YdaR7KyXTIIk1lVCXIue90gVMokQcOtWMgKKlqZnlwUbZV7TNWZOrkca+hpNm7ikteuIZV1TooZ5fmUQc4kKi3PAX9m6NF01AEbaVKAWDHVPaAc2lsLMA==
//Token encodé : phdF9WkJuTKkDuPXoqDZuPs4jdJfIZgY1YdaR7KyXTIIk1lVCXIue90gVMokQcOtWMgKKlqZnlwUbZV7TNWZOrkca%2BhpNm7ikteuIZV1TooZ5fmUQc4kKi3PAX9m6NF01AEbaVKAWDHVPaAc2lsLMA%3D%3D

//HEADER //

     const observer = {
       next : x => console.log('REQUETE OK : ', x),
     }

     const httpOptions = { headers: new HttpHeaders({
       'Accept' : 'application/pdf',
       'Content-Type': 'application/pdf',
       'Access-Control-Allow-Origin' : "127.0.0.1",
       'Access-Control-Allow-Methods' : 'POST,GET,PUT',
       'Access-Control-Allow-Headers' : 'Content-Type,Response-Type,Origin,Accept,X-Requested-With',
       'Response-Type' : 'json'
       //'Cookie': 'LAABS-AUTH=phdF9WkJuTKkDuPXoqDZuPs4jdJfIZgY1YdaR7KyXTIIk1lVCXIue90gVMokQcOtWMgKKlqZnlwUbZV7TNWZOrkca%2BhpNm7ikteuIZV1TooZ5fmUQc4kKi3PAX9m6NF01AEbaVKAWDHVPaAc2lsLMA%3D%3D'
     })}

 
     var reader = new FileReader();
     reader.readAsBinaryString(this.lesFichiers[this.iFile])
     const result = !reader.result;
      this.base64Output = reader.result?.toString()
      var rep = this.http.put(ipAPI+"/#/instance/upload/verifier",JSON.stringify({"messageFile" : this.base64Output, "attachments": {}}),httpOptions);
      rep.subscribe(observer);
    }


    onClickCompta()
    {
      console.log("Compta OK");
    }

    onRetour(){
      this.listeFactures = true;
      this.clickInfos = false;
    }


}

