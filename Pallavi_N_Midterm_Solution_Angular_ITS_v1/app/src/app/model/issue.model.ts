export interface Issue {
    id?: number; // Optional for newly created users
    Title?: string;
    Description: string;
    Priority: string;
    Status:string;
    Assignee:string;
    date: Date;
  }

  