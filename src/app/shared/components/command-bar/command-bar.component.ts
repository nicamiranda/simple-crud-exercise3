import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {
  @Input() componentTitle : string | undefined;
  @Output() deleteAllEmitter = new EventEmitter<string>();

  constructor(private router: Router,
    private activatedroute: ActivatedRoute) {}

  ngOnInit(): void {}

  goToPage($myParam: string = ''): void {
    let s = this.router.url;
    const navigationDetails: string[] = [s]; 
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

deleteAll () {
  this.deleteAllEmitter.emit();
}

}
