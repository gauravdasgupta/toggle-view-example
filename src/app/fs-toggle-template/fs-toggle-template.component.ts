import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fs-toggle-template',
  templateUrl: './fs-toggle-template.component.html',
  styleUrls: ['./fs-toggle-template.component.css']
})
export class FsToggleTemplateComponent implements OnInit {

  public view = "gallery";
  constructor() { }

  ngOnInit(): void {
  }

  toggleView(){
    this.view = this.view === "table" ? "gallery" : "table";
  }

}
