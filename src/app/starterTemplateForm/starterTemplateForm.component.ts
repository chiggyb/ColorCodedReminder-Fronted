import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';




@Component({
    selector: 'starter-template-form',
    templateUrl: './starterTemplateForm.component.html',
    styleUrls:['./starterTemplateForm.css',]
})
export class StarterTemplateFormComponent implements OnInit {
    customer: any;
    message: string;

    constructor(private route: ActivatedRoute, private router: Router, private http: Http ) { }

    ngOnInit() { 
        this.customer = {
            info1: '',
            color1:'',
            quant1:'',
            time1:'',
            info2: '',
            color2:'',
            quant2:'',
            time2:'',
            info3: '',
            color3:'',
            quant3:'',
            time3:''
        };
    }

    onSubmit() {
        // this.message = 'You typed: ' + this.customer.info1+this.customer.color1+this.customer.quant1+this.customer.time1+this.customer.info2+this.customer.color2+this.customer.quant2+this.customer.time2+this.customer.info3+this.customer.color3+this.customer.quant3+this.customer.time3;
        const sendScore = this.http.post('https://cc-reminder.herokuapp.com/api/Details', {
            data:"balle balle",
            name:'Chiggy',
            med_1:this.customer.info1,
            med_2:this.customer.info2,
            med_3:this.customer.info3,
            quant_1:this.customer.quant1,
            quant_2:this.customer.quant2,
            quant_3:this.customer.quant3,
            color_1:this.customer.color1,
            color_2:this.customer.color2,
            color_3:this.customer.color3,
            time_1:this.customer.time1,
            time_2:this.customer.time2,
            time_3:this.customer.color3
          })
            .subscribe(
              res => {
                console.log(res);
              },
              err => {
                console.log("Error occured");
              }
            );
   
    }

}