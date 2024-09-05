import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
import { ContextMenuComponent, ContextMenuModule, MenuEventArgs } from '@syncfusion/ej2-angular-navigations'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContextMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('contextmenu')
  public contextmenu?: ContextMenuComponent;

  public menuItems: MenuItemModel[] = [
    {
      text: 'Cut',
      iconCss: 'e-icons e-cut'
    },
    {
      text: 'Copy',
       iconCss: 'e-icons e-copy'
    },
    {
      text: 'Paste',
      iconCss: 'e-icons e-paste',
      // items: [
      //   {
      //     text: 'Merge Formatting'
      //   },
      //   {
      //     text: 'Keep Source Formatting'
      //   }
      // ]
    },
    {
      text: 'Navigate',
      url: 'https://ej2.syncfusion.com/angular/documentation/context-menu/getting-started'
    }
  ];

  public animation = {
    effect: 'FadeIn',
    duration: 800
  };
  public itemBeforeEvent(args: MenuEventArgs) {
    args.element.classList.add('custom');
  }

  onCreated(): void {
    debugger;
    (this.contextmenu as ContextMenuComponent).enableItems(['Copy'], false);
  }
}
