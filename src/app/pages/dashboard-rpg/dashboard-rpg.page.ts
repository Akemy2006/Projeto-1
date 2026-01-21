import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard-rpg',
  templateUrl: './dashboard-rpg.page.html',
  styleUrls: ['./dashboard-rpg.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DashboardRPGPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
