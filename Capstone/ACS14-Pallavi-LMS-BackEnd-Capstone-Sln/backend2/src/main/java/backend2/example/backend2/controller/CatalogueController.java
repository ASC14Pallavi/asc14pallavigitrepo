package backend2.example.backend2.controller;

import backend2.example.backend2.entity.Catalogue;
import backend2.example.backend2.service.CatalogueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200") // Enable CORS for Angular frontend
@RequestMapping("/catalogues")
public class CatalogueController {

    @Autowired
    private CatalogueService catalogueService;

    // Create a new catalogue
    @PostMapping("/create")
    public ResponseEntity<Catalogue> createCatalogue(@RequestBody Catalogue catalogue) {
        try {
            Catalogue createdCatalogue = catalogueService.createCatalogue(catalogue);
            return ResponseEntity.ok(createdCatalogue);  // Return the created catalogue
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);  // Handle creation failure
        }
    }

    // Fetch all catalogues
    @GetMapping
    public ResponseEntity<List<Catalogue>> getCatalogues() {
        return ResponseEntity.ok(catalogueService.getAllCatalogues());
    }

    // Delete catalogue by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCatalogue(@PathVariable String id) {
        try {
            catalogueService.deleteCatalogue(id);  // Call service method to delete catalogue by ID
            return ResponseEntity.noContent().build();  // Return 204 if successful
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();  // Return error if delete fails
        }
    }

    // Update an existing catalogue by ID
    @PutMapping("/{id}")
    public ResponseEntity<Catalogue> updateCatalogue(@PathVariable("id") String id, @RequestBody Catalogue catalogueDetails) {
        Catalogue updatedCatalogue = catalogueService.updateCatalogue(id, catalogueDetails);
        return ResponseEntity.ok(updatedCatalogue);  // Return the updated catalogue
    }
}



