import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-layout-default',
	templateUrl: './layout-default.component.html',
	styleUrls: [ './layout-default.component.scss' ],
})
export class LayoutDefaultComponent implements OnInit {

	showMenu = false

	constructor () {
	}

	ngOnInit (): void {
	}

	toggleNavbar () {
		this.showMenu = !this.showMenu
	}

}
