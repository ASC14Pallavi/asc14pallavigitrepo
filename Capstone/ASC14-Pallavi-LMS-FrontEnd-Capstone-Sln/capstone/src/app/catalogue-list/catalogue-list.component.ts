import { Component, OnInit } from '@angular/core';
import { Catalogue } from '../model/catalogue.model';
import { CatalogueService } from '../service/catalogue.service copy';

@Component({
  selector: 'app-catalogue-list',
  templateUrl: './catalogue-list.component.html',
  styleUrls: ['./catalogue-list.component.css']
})
export class CatalogueListComponent implements OnInit {

  catalogues: Catalogue[] = [];
  filteredCatalogues: Catalogue[] = [];
  currentCatalogue: Catalogue = { id: '', title: '', author: '', publicationYear: 0, status: '' };
  searchQuery: string = '';
  isSuccess: boolean = false;
  isError: boolean = false;

  constructor(private catalogueService: CatalogueService) {}

  ngOnInit(): void {
    this.loadCatalogues();
  }

  // Search circulations by ID
  searchCatalogues(): void {
    const query = this.searchQuery.toLowerCase();
    this.catalogues = this.catalogues.filter((record) =>
      record.id.toLowerCase().includes(query)
    );
  }
  
  loadCatalogues(): void {
    this.catalogueService.getCatalogues().subscribe(data => {
      this.catalogues = data;
    });
  }

  

  // Add a new catalogue or edit an existing one
  saveCatalogue(): void {
    if (this.currentCatalogue.id) {
      this.updateCatalogue();  // Update the catalogue
    } else {
      this.addCatalogue();  // Add new catalogue
    }
  }

  // Add a new catalogue
  addCatalogue(): void {
    this.currentCatalogue.id = '';  // Ensure id is not sent in the request
    this.catalogueService.addCatalogue(this.currentCatalogue).subscribe(
      (data) => {
        this.catalogues.push(data);
        this.isSuccess = true;
        this.isError = false;
        this.resetForm();
      },
      (error) => {
        this.isSuccess = false;
        this.isError = true;
        console.error("Error adding catalogue:", error);
      }
    );
  }

  // Update an existing catalogue
  updateCatalogue(): void {
    this.catalogueService.updateCatalogue(this.currentCatalogue.id, this.currentCatalogue).subscribe(
      (data) => {
        const index = this.catalogues.findIndex(catalogue => catalogue.id === this.currentCatalogue.id);
        if (index !== -1) {
          this.catalogues[index] = data;  // Update the catalogue in the list
        }
        this.isSuccess = true;
        this.isError = false;
        this.resetForm();
      },
      (error) => {
        this.isSuccess = false;
        this.isError = true;
        console.error("Error updating catalogue:", error);
      }
    );
  }

  // Edit a catalogue (populate the form with existing data)
  editCatalogue(catalogue: Catalogue): void {
    this.currentCatalogue = { ...catalogue };  // Copy the catalogue data into the form
  }

  // Delete a catalogue
  deleteCatalogue(id: string): void {
    this.catalogueService.deleteCatalogue(id).subscribe(() => {
      this.catalogues = this.catalogues.filter(catalogue => catalogue.id !== id);
    });
  }

  // Reset the form
  resetForm(): void {
    this.currentCatalogue = { id: '', title: '', author: '', publicationYear: 0, status: '' };
  }
}







