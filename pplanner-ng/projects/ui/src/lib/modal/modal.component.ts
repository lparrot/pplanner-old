import {AfterViewInit, ApplicationRef, Component, ComponentFactoryResolver, EmbeddedViewRef, Injector, Input, OnDestroy, ViewChild} from '@angular/core'
import {TailwindMaxWidthSize} from '../ui.models'
import {CdkPortal, DomPortalOutlet} from '@angular/cdk/portal'

@Component({
	selector: 'tw-modal',
	template: `
		<ng-template cdkPortal>
			<div *ngIf="show" aria-labelledby="modal-title" aria-modal="true" class="fixed z-10 inset-0 overflow-y-auto" role="dialog">
				<div class="flex items-center justify-center min-h-screen py-4 px-4 text-center block">
					<div (click)="toggleModal()" aria-hidden="true" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

					<span aria-hidden="true" class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

					<div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle modal-{{ size }} sm:w-full">
						<div class="bg-primary-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<ng-content select="[title]"></ng-content>
						</div>
						<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<ng-content select="[content]"></ng-content>
						</div>
						<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
							<ng-content select="[actions]"></ng-content>
						</div>
					</div>
				</div>
			</div>
		</ng-template>

	`
})
export class ModalComponent implements AfterViewInit, OnDestroy {

	@Input() size: TailwindMaxWidthSize = 'md'
	@Input() fullscreen: boolean = false

	@ViewChild(CdkPortal)
	portal: CdkPortal
	show = false
	private embeddedViewRef: EmbeddedViewRef<any>

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private applicationRef: ApplicationRef,
		private injector: Injector,
	) {
	}

	ngAfterViewInit(): void {
		this.embeddedViewRef = new DomPortalOutlet(document.body, this.componentFactoryResolver, this.applicationRef, this.injector)
			.attachTemplatePortal(this.portal)
	}

	ngOnDestroy() {
		this.embeddedViewRef.destroy()
	}

	toggleModal() {
		this.show = !this.show
	}

}
