import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  active_Link()
  {
    /*
    const lista=document.getElementById("lista1")?.textContent;
    console.log("prueba" + lista);
*/
    document.getElementById("lista1")?.classList.add("activada");
    document.getElementById("lista2")?.classList.remove("activada");
    document.getElementById("lista3")?.classList.remove("activada");
    document.getElementById("lista4")?.classList.remove("activada");
    document.getElementById("lista5")?.classList.remove("activada");
  }
  active_Link2()
  {
    document.getElementById("lista2")?.classList.add("activada");
    document.getElementById("lista1")?.classList.remove("activada");
    document.getElementById("lista3")?.classList.remove("activada");
    document.getElementById("lista4")?.classList.remove("activada");
    document.getElementById("lista5")?.classList.remove("activada");
  }
  active_Link3()
  {
    document.getElementById("lista3")?.classList.add("activada");
    document.getElementById("lista2")?.classList.remove("activada");
    document.getElementById("lista1")?.classList.remove("activada");
    document.getElementById("lista4")?.classList.remove("activada");
    document.getElementById("lista5")?.classList.remove("activada");
  }
  active_Link4()
  {
    document.getElementById("lista4")?.classList.add("activada");
    document.getElementById("lista2")?.classList.remove("activada");
    document.getElementById("lista3")?.classList.remove("activada");
    document.getElementById("lista1")?.classList.remove("activada");
    document.getElementById("lista5")?.classList.remove("activada");
  }
  active_Link5()
  {
    document.getElementById("lista5")?.classList.add("activada");
    document.getElementById("lista2")?.classList.remove("activada");
    document.getElementById("lista3")?.classList.remove("activada");
    document.getElementById("lista4")?.classList.remove("activada");
    document.getElementById("lista1")?.classList.remove("activada");
  }

}
