import { Component, OnInit } from '@angular/core';
import { MemberService } from '../service/member.service';
import { Member } from '../model/member.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent implements OnInit {
  members: Member[] = [];
  currentMember: Member | null = null;
  searchQuery:String='';

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.loadMembers();
  }

  // Search circulations by name
  searchMembers(): void {
    const query = this.searchQuery.toLowerCase();
    this.members = this.members.filter((record) =>
      record.name.toLowerCase().includes(query)
    );
  }

  loadMembers(): void {
    this.memberService.getAllMembers().subscribe((data) => {
      this.members = data;
    });
  }

  addMember(): void {
    this.currentMember = { name: '', email: '', phone: '' };
  }

  saveMember(): void {
    if (this.currentMember) {
      if (this.currentMember.id) {
        this.memberService.updateMember(this.currentMember.id, this.currentMember).subscribe(() => {
          this.loadMembers();
          this.resetForm();
        });
      } else {
        this.memberService.addMember(this.currentMember).subscribe(() => {
          this.loadMembers();
          this.resetForm();
        });
      }
    }
  }

  deleteMember(id: string | undefined): void {
    if (id) { // Check if the id is defined
      this.memberService.deleteMember(id).subscribe(
        () => {
          this.loadMembers();  // Reload the list after deletion
        },
        (error) => {
          console.error('Error deleting member:', error);  // Log the error from backend
          alert('Failed to delete the member. Please check the backend logs.');
        }
      );
    } else {
      console.error('Invalid member ID');
      alert('Invalid member ID');
    }
  }
  

  resetForm(): void {
    this.currentMember = null;
  }
}







