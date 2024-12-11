import { Component, OnInit } from '@angular/core';
import { CirculationService } from '../service/circulation.service';
import { Circulation } from '../model/circulation.model';

@Component({
  selector: 'app-circulation',
  templateUrl: './circulation.component.html',
  styleUrls: ['./circulation.component.css']
})
export class CirculationComponent implements OnInit {
  circulations: Circulation[] = [];
  currentCirculation: Circulation | null = null;
  searchQuery: String='';

  constructor(private circulationService: CirculationService) {}

  ngOnInit(): void {
    this.loadCirculations();
  }

  // Search circulations by ID
  searchCirculations(): void {
    const query = this.searchQuery.toLowerCase();
    this.circulations = this.circulations.filter((record) =>
      record.id.toLowerCase().includes(query)
    );
  }
  // Load all circulations
  loadCirculations(): void {
    this.circulationService.getCirculations().subscribe(data => {
      this.circulations = data;
    }, error => console.error('Error fetching circulations:', error));
  }

  // Start editing an existing circulation
  editCirculation(circulation: Circulation): void {
    this.currentCirculation = { ...circulation };
  }

  // Initialize the form for adding a new circulation
  addNewCirculationForm(): void {
    this.currentCirculation = {
      id: '',
      catalogue: { id: '', title: '' },
      member: { id: '', name: '' },
      issueDate: '',
      returnDate: '',
      status: ''
    };
  }

  // Reset the form and clear the currentCirculation
  resetForm(): void {
    this.currentCirculation = null;
  }

  // Save the circulation (add new or update existing)
  saveCirculation(): void {
    if (this.currentCirculation) {
      if (this.currentCirculation.id) {
        // Update existing circulation
        this.circulationService.updateCirculation(this.currentCirculation.id, this.currentCirculation).subscribe(() => {
          this.loadCirculations();
          this.resetForm();
        }, error => console.error('Error updating circulation:', error));
      } else {
        // Add new circulation
        this.circulationService.addCirculation(this.currentCirculation).subscribe(newCirculation => {
          this.circulations.push(newCirculation);
          this.resetForm();
        }, error => console.error('Error adding circulation:', error));
      }
    }
  }

  // Delete a circulation
  deleteCirculation(id: string): void {
    if (confirm('Are you sure you want to delete this circulation?')) {
      this.circulationService.deleteCirculation(id).subscribe(() => {
        this.loadCirculations();
      }, error => console.error('Error deleting circulation:', error));
    }
  }
}









