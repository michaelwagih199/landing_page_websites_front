import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { AppWidgetBaseImageSlider } from "../../widgets/app-widget-image-sliderbase.component";

@Component({
  templateUrl: 'dialog-pdf-viewer.html',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, AppWidgetBaseImageSlider],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogPDFViwer implements OnInit {
   readonly dialogRef = inject(MatDialogRef<DialogPDFViwer>);

   ngOnInit(): void {
    window.open('assets/files/java-performance.pdf', '_blank');
  }

}
