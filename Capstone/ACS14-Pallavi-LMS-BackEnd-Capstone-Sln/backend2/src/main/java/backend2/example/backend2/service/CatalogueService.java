package backend2.example.backend2.service;

import backend2.example.backend2.entity.Catalogue;
import backend2.example.backend2.repository.CatalogueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CatalogueService {

    @Autowired
    private CatalogueRepository catalogueRepository;


    // Create a new catalogue and assign it a unique ID
    public Catalogue createCatalogue(Catalogue catalogue) {
        String newId = generateCatalogueId();  // Generate unique ID for new catalogue
        catalogue.setId(newId);
        catalogue.setStatus("Available");  // Default status for a new catalogue
        return catalogueRepository.save(catalogue);
    }

    // Generate unique catalogue ID
    private String generateCatalogueId() {
        Catalogue lastCatalogue = catalogueRepository.findTopByOrderByIdDesc();  // Get last catalogue from DB
        if (lastCatalogue == null) {
            return "C0001";  // If no catalogues exist, start with C0001
        }
        String lastId = lastCatalogue.getId();  // Extract ID from the Catalogue entity
        int lastNumber = Integer.parseInt(lastId.substring(1));  // Extract number from last ID
        int nextNumber = lastNumber + 1;  // Increment number
        return "C" + String.format("%04d", nextNumber);  // Return next catalogue ID in format "C0002"
    }

    // Get all catalogues
    public List<Catalogue> getAllCatalogues() {
        return catalogueRepository.findAll();
    }

    // Delete catalogue by ID
    public void deleteCatalogue(String id) {
        catalogueRepository.deleteById(id);
    }

    // Update an existing catalogue
    public Catalogue updateCatalogue(String id, Catalogue catalogueDetails) {
        Catalogue existingCatalogue = catalogueRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Catalogue not found"));
        existingCatalogue.setTitle(catalogueDetails.getTitle());
        existingCatalogue.setAuthor(catalogueDetails.getAuthor());
        existingCatalogue.setPublicationYear(catalogueDetails.getPublicationYear());
        existingCatalogue.setStatus(catalogueDetails.getStatus());
        return catalogueRepository.save(existingCatalogue);
    }
}



