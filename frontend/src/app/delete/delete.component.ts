import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Image } from 'src/models/image';
import { WebRequestService } from '../web-request.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private webService: WebRequestService, 
    private router: Router,
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit(): void {
  }

  deleteImage(id: string) {
    console.log(id);
    this.webService.deleteImage(id).subscribe((result) => {
      return result;
    }, err => {
      console.log(err)
    })
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
