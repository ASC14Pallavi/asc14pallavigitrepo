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

    public List<Circulation> getAllCirculations() {
        return circulationRepository.findAll();
    }

    public Circulation saveCirculation(Circulation circulation) {
        if (circulation.getId() == null || circulation.getId().isEmpty()) {
            circulation.setId(generateId());
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

    private String generateId() {
        long count = circulationRepository.count() + 1;
        return "CIR" + String.format("%03d", count);
    }
}


