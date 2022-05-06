import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Image } from 'src/models/image';
import { DeleteComponent } from './delete/delete.component';
import { DialogComponent } from './dialog/dialog.component';
import { WebRequestService } from './web-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  masonryItems!: Image[];

  label!: string;
  url!: string;

  constructor(private webService: WebRequestService, public dialog: MatDialog) { }

  ngOnInit() {
    this.webService.getImage().subscribe((data: Image[]) => {
      this.masonryItems = data;
    }, err => {
      console.log(err);
    })
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'dialog-container',
      width: 'auto',
      // maxWidth: '100%',
      // minWidth: '40%',
      height: 'auto',
      position: { top: '10%' },
      data: { label: this.label, url: this.url }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.webService.postImage(result).subscribe((data: Image) => {
          this.masonryItems.push(data);
        }, err => {
          console.log(err);
        })
      }

    })
  }

  openAnotherDialog(id: string) {
    let dialogRef = this.dialog.open(DeleteComponent, {
        panelClass: 'dialog-container',
        width: 'auto',
        height: 'auto',
        data: { _id: id }
      });

      dialogRef.afterClosed().subscribe(result => {
        this.masonryItems = this.masonryItems.filter((item) => item._id !== result)
  
      })
  }

  displayId(id: string) {
    console.log(id);
  }



}
