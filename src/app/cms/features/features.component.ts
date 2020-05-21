import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FeaturesService } from '../../services/features.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  features: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private featuresService: FeaturesService
  ) { }

  ngOnInit() {
    let user = {
      sessionid: localStorage.sessionid,
    }
    this.featuresService.getFeaturesCms(user).subscribe((result:any) => {
      this.features = result.records;
      console.log(this.features);
    },
    (error) => {
      console.log(error);
    });
  }
}
