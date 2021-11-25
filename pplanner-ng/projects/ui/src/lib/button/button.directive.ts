import { Directive, HostBinding, Input, OnInit } from '@angular/core'
import { TailwindColors } from '../ui.models'

@Directive({
	selector: '[twButton]',
})
export class ButtonDirective implements OnInit {

	@Input() color: TailwindColors = 'default'
	@Input() outlined: boolean = false

	constructor () {
	}

	@HostBinding('class') get class () {
		const classes = [ 'btn', `btn-${ this.color }` ]
		if (this.outlined) {
			classes.push('btn-outlined')
		}
		return classes
	}

	ngOnInit (): void {
	}

}