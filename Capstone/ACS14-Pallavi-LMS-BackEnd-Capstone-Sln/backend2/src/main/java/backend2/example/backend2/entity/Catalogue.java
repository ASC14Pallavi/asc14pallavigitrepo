package backend2.example.backend2.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Catalogue {

    @Id
    private String id;  // The ID will be auto-generated in the format CNNNN

    private String title;
    private String author;
    private int publicationYear;
    private String status;

    // Default constructor
    public Catalogue() {
    }

    // Parameterized constructor
    public Catalogue(String id, String title, String author, int publicationYear, String status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.status = status;
    }

    // Getters and Setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getPublicationYear() {
        return publicationYear;
    }

    public void setPublicationYear(int publicationYear) {
        this.publicationYear = publicationYear;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    // Optional: Override toString() for easier logging or debugging
    @Override
    public String toString() {
        return "Catalogue{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", publicationYear=" + publicationYear +
                ", status='" + status + '\'' +
                '}';
    }
}

