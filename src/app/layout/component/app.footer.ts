import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',

    template: `<div class="layout-footer">
    <span class="font-medium mr-2">Software Desenvolvido</span> por <span class="font-medium mr-2">NISAC</span>
</div>`



})
export class AppFooter {
    /**template: `<div class="layout-footer">
        SAKAI by
        <a href="https://primeng.org" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">PrimeNG</a>
    </div>` */
}
