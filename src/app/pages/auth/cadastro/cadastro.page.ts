// src/app/pages/cadastro/cadastro.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService} from 'src/app/services/auth.service';
import { User, UserPreferences } from 'src/app/models/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  userData: User = {
    name: '',
    email: '',
    password: '',
    preferences: {
      theme: 'auto',
      notifications: true,
      defaultView: 'projects',
      rpgSystem: 'dnd5e'
    }
  };
  
  confirmPassword: string = '';
  showPassword: boolean = false;
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async register() {
    // Validações
    if (!this.userData.name || !this.userData.email || !this.userData.password) {
      this.showAlert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (this.userData.password !== this.confirmPassword) {
      this.showAlert('Erro', 'As senhas não coincidem.');
      return;
    }

    if (this.userData.password.length < 6) {
      this.showAlert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.userData.email)) {
      this.showAlert('Erro', 'Por favor, insira um email válido.');
      return;
    }

    this.loading = true;

    try {
      // Mostrar loading
      const loading = await this.loadingController.create({
        message: 'Criando sua conta...',
      });
      await loading.present();

      // Registrar usuário
      const success = await this.authService.register(this.userData);
      
      await loading.dismiss();

      if (success) {
        this.showAlert('Sucesso!', 'Conta criada com sucesso!', true);
      } else {
        this.showAlert('Erro', 'Este email já está em uso.');
      }
    } catch (error) {
      this.loading = false;
      this.showAlert('Erro', 'Ocorreu um erro ao criar a conta. Tente novamente.');
    }
  }

  async showAlert(header: string, message: string, success: boolean = false) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: success ? [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['/dashboard']);
          }
        }
      ] : ['OK']
    });

    await alert.present();
  }
}
