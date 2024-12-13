package backend2.example.backend2.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;

@Entity
public class Member {
    @Id
    private String id; // Custom ID in the format "CXXXX"
    private String name;
    private String email;
    private String phone;

    // Generate custom ID before persisting
    @PrePersist
    private void generateId() {
        if (this.id == null || this.id.isEmpty()) {
            this.id = generateCustomId();
        }
    }

    private String generateCustomId() {
        // Generate ID in the format CXXXX (e.g., C1234)
        int randomNumber = (int) (Math.random() * 9000) + 1000; // Generate 4-digit random number
        return "C" + randomNumber;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
