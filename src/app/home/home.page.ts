import { Component, inject, OnInit } from '@angular/core';
import todos from '../data/todos';
import { InfiniteScrollCustomEvent, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage implements OnInit {
//   todos: Todo[] = [];
//   constructor(private router: Router) {}

//   openNewTodo(todoId: number) {
//     this.router.navigate(['/todos', todoId]);
//   }

//   ngOnInit() {
//     this.todos = todos;
//     this.generateItems();
//   }

//   items: string[] = [];

//   private generateItems() {
//     const count = this.items.length + 1;
//     for (let i = 0; i < 50; i++) {
//       this.items.push(`Item ${count + i}`);
//     }
//   }

//   onIonInfinite(ev: InfiniteScrollCustomEvent, t: string) {
//     console.log('ev', ev, t);
//     // this.generateItems();
//     // setTimeout(() => {
//     //   (ev as InfiniteScrollCustomEvent).target.complete();
//     // }, 500);
//   }
// }

@Component({
  selector: 'app-home',
  template: `
    <div>
      <cdk-virtual-scroll-viewport itemSize="50" class="example-viewport">
        <div
          *cdkVirtualFor="let item of items; let i = index"
          class="example-item"
        >
          {{ item }}
        </div>
      </cdk-virtual-scroll-viewport>
    </div>
  `,
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
}
