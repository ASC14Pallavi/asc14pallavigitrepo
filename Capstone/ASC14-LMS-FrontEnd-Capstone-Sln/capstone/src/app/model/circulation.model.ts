export interface Circulation {
    id: string;
    catalogue: {
      id: string;
      title: string;  // Add any other relevant fields
    };
    member: {
      id: string;
      name: string;  // Add any other relevant fields
    };
    issueDate: string;
    returnDate: string;
    status: string;
  }
  
  
  
