package backend2.example.backend2.service;

import backend2.example.backend2.entity.Circulation;
import backend2.example.backend2.repository.CirculationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CirculationService {

    @Autowired
    private CirculationRepository circulationRepository;

    private int lastGeneratedNumber = 0;  // Track the last generated number

    public List<Circulation> getAllCirculations() {
        return circulationRepository.findAll();
    }

    public Circulation saveCirculation(Circulation circulation) {
        // If ID is not provided, generate it
        if (circulation.getId() == null || circulation.getId().isEmpty()) {
            circulation.setId(generateId());  // Generate ID if not provided
        }
        return circulationRepository.save(circulation);
    }

    public Circulation updateCirculation(String id, Circulation updatedCirculation) {
        Circulation existingCirculation = circulationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Circulation not found with id: " + id));
        existingCirculation.setCatalogue(updatedCirculation.getCatalogue());
        existingCirculation.setMember(updatedCirculation.getMember());
        existingCirculation.setIssueDate(updatedCirculation.getIssueDate());
        existingCirculation.setReturnDate(updatedCirculation.getReturnDate());
        existingCirculation.setStatus(updatedCirculation.getStatus());
        return circulationRepository.save(existingCirculation);
    }

    public void deleteById(String id) {
        Circulation circulation = circulationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Circulation not found with id: " + id));
        circulationRepository.delete(circulation);
    }

    // Auto-increment ID generation method
    private String generateId() {
        // Increment the number each time a new ID is generated
        lastGeneratedNumber++;

        // Format the number as a 3-digit string (e.g., "001", "002", etc.)
        String formattedNumber = String.format("%03d", lastGeneratedNumber);

        // Generate the ID: "A" + 3-digit number (e.g., "A001", "A002", ...)
        return "A" + formattedNumber;
    }
}




