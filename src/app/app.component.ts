import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pdfData1: string | null = null;
  pdfData2: string | null = null;
  
  title = 'pdfPruebas';

  loadPdfData(event: any, pdfNumber: number) {
    console.log("🚀 ~ AppComponent ~ loadPdfData ~ event:", event)
    const file = event.target.files[0];
    if (file) {
      if (file.size <= 25 * 1024 * 1024) {
        const reader = new FileReader();
        reader.onload = () => {
          const base64Data = reader.result as string;
          if (pdfNumber === 1) {
            this.pdfData1 = base64Data;
            console.log("🚀 ~ AppComponent ~ loadPdfData ~  this.pdfData1:",  this.pdfData1)
          } else if (pdfNumber === 2) {
            this.pdfData2 = base64Data;
            console.log("🚀 ~ AppComponent ~ loadPdfData ~ this.pdfData2:", this.pdfData2)
          }
        };
        reader.readAsDataURL(file);
      } else {
        alert('El tamaño del archivo excede los 25 MB permitidos.');
      }
    }
  }
}
