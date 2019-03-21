import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  /* Actions Button text */

  ButtonText = ["Create Loans", "Clear Loans", "Archives Loans"];
  textitem = ["Search", "Active Loans"];

  /* Angular Data Table Library */

  personList: any = [
    {
      id: 1,
      name: "Aurelia Vega",
      Date: "30-Jan-2019",
      AmountRequired: "200000",
      NoofInstallments: "16",
      Status: "Active"
    },
    {
      id: 2,
      name: "Aurelia Vega",
      Date: "30-Jan-2019",
      AmountRequired: "200000",
      NoofInstallments: "16",
      Status: "Active"
    },
    {
      id: 3,
      name: "Aurelia Vega",
      Date: "30-Jan-2019",
      AmountRequired: "200000",
      NoofInstallments: "16",
      Status: "Active"
    },
    {
      id: 4,
      name: "Aurelia Vega",
      Date: "30-Jan-2019",
      AmountRequired: "200000",
      NoofInstallments: "16",
      Status: "Active"
    },
    {
      id: 5,
      name: "Aurelia Vega",
      Date: "30-Jan-2019",
      AmountRequired: "200000",
      NoofInstallments: "16",
      Status: "Active"
    },
    {
      id: 6,
      name: "Aurelia Vega",
      Date: "30-Jan-2019",
      AmountRequired: "200000",
      NoofInstallments: "16",
      Status: "Active"
    },
    {
      id: 7,
      name: "Aurelia Vega",
      Date: "30-Jan-2019",
      AmountRequired: "200000",
      NoofInstallments: "16",
      Status: "Active"
    },
    {
      id: 8,
      name: "Aurelia Vega",
      Date: "30-Jan-2019",
      AmountRequired: "200000",
      NoofInstallments: "16",
      Status: "Active"
    },
    {
      id: 9,
      name: "Aurelia Vega",
      Date: "30-Jan-2019",
      AmountRequired: "200000",
      NoofInstallments: "16",
      Status: "Active"
    },
    {
      id: 10,
      name: "Aurelia Vega",
      Date: "30-Jan-2019",
      AmountRequired: "200000",
      NoofInstallments: "16",
      Status: "Active"
    }
  ];

  color = "Black";
  dataPerPage = 5;

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
