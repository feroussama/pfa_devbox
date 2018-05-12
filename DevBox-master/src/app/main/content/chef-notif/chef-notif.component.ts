import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chef-notif',
  templateUrl: './chef-notif.component.html',
  styleUrls: ['./chef-notif.component.scss']
})
export class ChefNotifComponent implements OnInit {

  notifs: any;
  constructor() { }

  ngOnInit() {

    this.notifs = [
      {
        'titre': 'Proident tempor est nulla irure ad est',
        'description': 'Id nulla nulla proident deserunt deserunt proident in quis. Cillum reprehenderit labore id anim laborum.'
      },
      {
        'titre': 'Ullamco duis commodo sint ad aliqua aute',
        'description': 'Sunt laborum enim nostrud ea fugiat cillum mollit aliqua exercitation ad elit.'
      },
      {
        'titre': 'Eiusmod non occaecat pariatur Lorem in ex',
        'description': 'Nostrud anim mollit incididunt qui qui sit commodo duis. Anim amet irure aliquip duis nostrud sit quis fugiat ullamco non dolor labore. Lorem sunt voluptate laboris culpa proident. Aute eiusmod aliqua exercitation irure exercitation qui laboris mollit occaecat eu occaecat fugiat.'
      },
      {
        'titre': 'Lorem magna cillum consequat consequat mollit',
        'description': 'Velit ipsum proident ea incididunt et. Consectetur eiusmod laborum voluptate duis occaecat ullamco sint enim proident.'
      },
      {
        'titre': 'Quis irure cupidatat ad consequat reprehenderit excepteur',
        'description': 'Esse nisi mollit aliquip mollit aute consequat adipisicing. Do excepteur dolore proident cupidatat pariatur irure consequat incididunt.'
      },
      {
        'titre': 'Officia voluptate tempor ut mollit ea cillum',
        'description': 'Deserunt veniam reprehenderit do elit magna ut.'
      },
      {
        'titre': 'Sunt fugiat officia nisi minim sunt duis',
        'description': 'Eiusmod eiusmod sint aliquip exercitation cillum. Magna nulla officia ex consectetur ea ad excepteur in qui.'
      },
      {
        'titre': 'Non cupidatat enim quis aliquip minim laborum',
        'description': 'Qui cillum eiusmod nostrud sunt dolore velit nostrud labore voluptate ad dolore. Eu Lorem anim pariatur aliqua. Ullamco ut dolor velit esse occaecat dolore eu cillum commodo qui. Nulla dolor consequat voluptate magna ut commodo magna consectetur non aute proident.'
      },
      {
        'titre': 'Dolor ex occaecat magna labore laboris qui',
        'description': 'Incididunt qui excepteur eiusmod elit cillum occaecat voluptate cillum nostrud. Dolor ullamco ullamco eiusmod do sunt adipisicing pariatur. In esse esse labore id reprehenderit sint do. Pariatur culpa dolor tempor qui excepteur duis do anim minim ipsum.'
      },
      {
        'titre': 'Nisi et ullamco minim ea proident tempor',
        'description': 'Dolor veniam dolor cillum Lorem magna nisi in occaecat nulla dolor ea eiusmod.'
      },
      {
        'titre': 'Amet sunt et quis amet commodo quis',
        'description': 'Nulla dolore consequat aliqua sint consequat elit qui occaecat et.'
      },
      {
        'titre': 'Ut eiusmod ex ea eiusmod culpa incididunt',
        'description': 'Fugiat non incididunt officia ex incididunt occaecat. Voluptate nostrud culpa aliquip mollit incididunt non dolore.'
      },
      {
        'titre': 'Proident reprehenderit laboris pariatur ut et nisi',
        'description': 'Reprehenderit proident ut ad cillum quis velit quis aliqua ut aliquip tempor ullamco.'
      },
      {
        'titre': 'Aliqua aliquip aliquip aliquip et exercitation aute',
        'description': 'Adipisicing Lorem tempor ex anim. Labore tempor laboris nostrud dolore voluptate ullamco. Fugiat ex deserunt anim minim esse velit laboris aute ea duis incididunt. Elit irure id Lorem incididunt laborum aliquip consectetur est irure sunt. Ut labore anim nisi aliqua tempor laborum nulla cillum. Duis irure consequat cillum magna cillum eiusmod ut. Et exercitation voluptate quis deserunt elit quis dolor deserunt ex ex esse ex.'
      }
    ];
  }

}
