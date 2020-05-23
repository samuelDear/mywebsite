import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {
  project: any;
  typographies: any;
  colors: any;
  features: any;
  id: any;

  showInputTablet: boolean;
  showInputLaptop: boolean;

  editForm= this.fb.group({
    id: [0, [Validators.required]],
    code: ['', [Validators.required]],
    name: ['', [Validators.required]],
    datecreated: ['', [Validators.required]],
    rolEs: ['', [Validators.required]],
    rolEn: ['', [Validators.required]],
    agencyEs: ['', [Validators.required]],
    agencyEn: ['', [Validators.required]],
    resumeEs: ['', [Validators.required]],
    resumeEn: ['', [Validators.required]],
    introductionEs: ['', [Validators.required]],
    introductionEn: ['', [Validators.required]],
    dscEsProject: ['', [Validators.required]],
    dscEnProject: ['', [Validators.required]]
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private projectsServicio: ProjectsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.typographies = [""];
    this.colors = [""];
    this.features = [""];

    this.showInputLaptop = true;
    this.showInputTablet = true;

    this.activatedRoute.paramMap.subscribe(params => {
      let nameProject = {
        id: params.get('id'),
      }
      this.id = parseInt(nameProject.id);

      console.log(nameProject.id);
      if(parseInt(nameProject.id) != 0){
        this.projectsServicio.getById(nameProject).subscribe((res: any) => {
          this.project = res.entry;
          this.colors = this.project.colors;
          let features = [];

          for(let i = 0; i < this.project.en.features.length; i++){
            features.push({
              tituloEs: this.project.es.features[i].title,
              tituloEn: this.project.en.features[i].title,
              dscEs: this.project.es.features[i].dsc,
              dscEn: this.project.en.features[i].dsc
            });
          }

          this.features = features;
          this.typographies = this.project.typographies;
          this.updateForm(this.project);
          console.log(this.project);
        },
        (error) => {
          console.log(error);
        });
      }
    });
  }

  updateForm(project: any){
    this.editForm.patchValue({
      id: project.id,
      code: project.code,
      name: project.name,
      datecreated: project.datecreated,
      rolEs: project.es.role,
      rolEn: project.en.role,
      agencyEs: project.es.agency,
      agencyEn: project.en.agency,
      resumeEs: project.es.resume,
      resumeEn: project.en.resume,
      introductionEs: project.es.introduction,
      introductionEn: project.en.introduction,
      dscEsProject: project.es.dsc,
      dscEnProject: project.en.dsc
    });
  }

  addColor(id){
    let regx = /^\#?[A-Fa-f0-9]{3}([A-Fa-f0-9]{3})?$/;
    let colorhex = document.getElementById('colorhex' + id) as HTMLInputElement;
    console.log(regx.test(colorhex.value));
    if(colorhex.value != "" && regx.test(colorhex.value)){
      this.colors[id] = {
        colorhex: colorhex.value
      }
      colorhex.value = "";
      this.colors.push("");
    }else{
      alert('Color en Hexadecimal requerido');
    }
    console.log(this.colors);
  }

  deleteColors(index){
    this.colors.splice(index, 1);
    if(index == 0){
      this.colors.push("");
    }
  }

  addTypography(id){
    let name = document.getElementById('typographyName' +id) as HTMLInputElement;
    let url = document.getElementById('urlTypography' + id) as HTMLInputElement;

    if(name.value != "" && url.value != ""){
      this.typographies[id] = {
        name: name.value,
        url: url.value
      }
      name.value = "";
      url.value = "";
      this.typographies.push("");
    }else{
      alert('Nombre y URL requerido');
    }
    console.log(this.typographies);
  }

  deleteTypography(index){
    this.typographies.splice(index, 1);
    if(index == 0){
      this.typographies.push("");
    }
  }

  navigate(url){
    this.router.navigateByUrl("cms/" + url);
  }

  addFeature(id){
    let tituloEs = document.getElementById('tituloEs' + id) as HTMLInputElement;
    let tituloEn = document.getElementById('tituloEn' + id) as HTMLInputElement;
    let dscEs = document.getElementById('dscEs' + id) as HTMLInputElement;
    let dscEn = document.getElementById('dscEn' + id) as HTMLInputElement;

    if(tituloEs.value != "" && tituloEn.value != "" &&
    dscEs.value != "" && dscEn.value != ""){
      this.features[id] = {
        tituloEs: tituloEs.value,
        tituloEn: tituloEn.value,
        dscEs: dscEs.value,
        dscEn: dscEn.value
      }

      tituloEn.value = "";
      tituloEs.value = "";
      dscEs.value = "";
      dscEn.value = "";
      this.features.push("");
    }else{
      alert('Todos los campos son requeridos');
    }
    console.log(this.features);
  }

  deleteFeatures(index){
    this.features.splice(index, 1);
    if(index == 0){
      this.features.push("");
    }
  }

  save(){
    if(this.id != 0){
      if(this.editForm.valid){

        let principalimg = document.getElementById('principalImg') as HTMLInputElement;
        let fcellphoneimg = document.getElementById('cellphone1Img') as HTMLInputElement;
        let scellphoneimg = document.getElementById('cellphone2Img') as HTMLInputElement;

        let params = {
          sessionid: localStorage.sessionid,
          id: this.editForm.get('id').value,
          code: this.editForm.get('code').value,
          name: this.editForm.get('name').value,
          datecreated: this.editForm.get('datecreated').value,
          roles: this.editForm.get('rolEs').value,
          rolen: this.editForm.get('rolEn').value,
          agencyes: this.editForm.get('agencyEs').value,
          agencyen: this.editForm.get('agencyEn').value,
          resumees: this.editForm.get('resumeEs').value,
          resumeen: this.editForm.get('resumeEn').value,
          introductiones: this.editForm.get('introductionEs').value,
          introductionen: this.editForm.get('introductionEn').value,
          dscesproject: this.editForm.get('dscEsProject').value,
          dscenproject: this.editForm.get('dscEnProject').value,
          principalimg: principalimg.files[0],
          fmobileimg: fcellphoneimg.files[0],
          smobileimg: scellphoneimg.files[0],
        }

        let laptopimg = document.getElementById('laptopImg') as HTMLInputElement;
        let tabletimg = document.getElementById('tabletImg') as HTMLInputElement;

        if(this.showInputLaptop){
          params['laptopimg'] = laptopimg.files[0];
        }

        if(this.showInputTablet){
          params['tabletimg'] = tabletimg.files[0];
        }

        console.log(params);

        this.projectsServicio.saveProject(params).subscribe(res =>{
          console.log(res);
          //this.router.navigateByUrl("cms/projects");
        },
        (error) => {
          console.log(error);
        });
      }else{
        alert("Nada de campos vacios");
      }
    }else{
      if(this.editForm.valid && this.features.length > 1 &&
      this.colors.length > 1 && this.typographies.length > 1){
        let colors = "";
        for(let i = 0; i < this.colors.length; i++){
          colors += this.colors[i].colorhex == undefined ? '' : this.colors[i].colorhex + "~";
        }
        colors = colors.slice(0,-1);
        console.log(colors);

        let typographiesName = "";
        let typographiesUrl = "";
        for(let i = 0; i < this.typographies.length; i++){
          typographiesName += this.typographies[i].name == undefined ? '' : this.typographies[i].name + "~";
          typographiesUrl += this.typographies[i].url == undefined ? '' : this.typographies[i].url + "~";
        }
        typographiesName = typographiesName.slice(0,-1);
        typographiesUrl = typographiesUrl.slice(0,-1);
        console.log(typographiesName);
        console.log(typographiesUrl);

        let tituloEs = "";
        let tituloEn = "";
        let dscEs = "";
        let dscEn = "";
        for(let i = 0; i < this.features.length; i++){
          tituloEs += this.features[i].tituloEn == undefined ? '' : this.features[i].tituloEn + "~";
          tituloEn += this.features[i].tituloEs == undefined ? '' : this.features[i].tituloEs + "~";
          dscEs += this.features[i].dscEs == undefined ? '' : this.features[i].dscEs + "~";
          dscEn += this.features[i].dscEn == undefined ? '' : this.features[i].dscEn + "~";
        }

        tituloEs = tituloEs.slice(0, -1);
        tituloEn = tituloEn.slice(0, -1);
        dscEs = dscEs.slice(0, -1);
        dscEn = dscEn.slice(0, -1);

        let principalimg = document.getElementById('principalImg') as HTMLInputElement;
        let fcellphoneimg = document.getElementById('cellphone1Img') as HTMLInputElement;
        let scellphoneimg = document.getElementById('cellphone2Img') as HTMLInputElement;

        let params = {
          sessionid: localStorage.sessionid,
          id: this.editForm.get('id').value,
          code: this.editForm.get('code').value,
          name: this.editForm.get('name').value,
          datecreated: this.editForm.get('datecreated').value,
          roles: this.editForm.get('rolEs').value,
          rolen: this.editForm.get('rolEn').value,
          agencyes: this.editForm.get('agencyEs').value,
          agencyen: this.editForm.get('agencyEn').value,
          resumees: this.editForm.get('resumeEs').value,
          resumeen: this.editForm.get('resumeEn').value,
          introductiones: this.editForm.get('introductionEs').value,
          introductionen: this.editForm.get('introductionEn').value,
          dscesproject: this.editForm.get('dscEsProject').value,
          dscenproject: this.editForm.get('dscEnProject').value,
          tituloes: tituloEs,
          tituloen: tituloEn,
          dsces: dscEs,
          dscen: dscEn,
          colors: colors,
          typographiesname: typographiesName,
          typographiesurl: typographiesUrl,
          principalimg: principalimg.files[0],
          fmobileimg: fcellphoneimg.files[0],
          smobileimg: scellphoneimg.files[0],
        }

        let laptopimg = document.getElementById('laptopImg') as HTMLInputElement;
        let tabletimg = document.getElementById('tabletImg') as HTMLInputElement;

        if(this.showInputLaptop){
          params['laptopimg'] = laptopimg.files[0];
        }

        if(this.showInputTablet){
          params['tabletimg'] = tabletimg.files[0];
        }

        console.log(params);

        this.projectsServicio.saveProject(params).subscribe(res =>{
          console.log(res);
          this.router.navigateByUrl("cms/projects");
        },
        (error) => {
          console.log(error);
          if(error.status == 200){
            this.router.navigateByUrl("cms/projects");
          }
        });
      }else{
        alert('Todos los datos son requeridos');
      }
    }
  }


  noShowIt(whichInput){
    if(whichInput == "laptop"){
      this.showInputLaptop = !this.showInputLaptop;
    }else if(whichInput == "tablet"){
      this.showInputTablet = !this.showInputTablet;
    }
  }
}
