package backend2.example.backend2.controller;

import backend2.example.backend2.service.CirculationService;
import backend2.example.backend2.entity.Circulation;
import backend2.example.backend2.entity.Member;
import backend2.example.backend2.entity.Catalogue;
import backend2.example.backend2.repository.CirculationRepository;
import backend2.example.backend2.repository.MemberRepository;
import backend2.example.backend2.repository.CatalogueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/circulations")
@CrossOrigin(origins = "http://localhost:4200")
public class CirculationController {

    @Autowired
    private CirculationService circulationService;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private CatalogueRepository catalogueRepository;

    // CREATE operation
    @PostMapping
    public ResponseEntity<Circulation> createCirculation(@RequestBody Circulation circulation) {
        Member member = memberRepository.findById(circulation.getMember().getId())
                .orElseThrow(() -> new RuntimeException("Member not found with ID: " + circulation.getMember().getId()));

        Catalogue catalogue = catalogueRepository.findById(circulation.getCatalogue().getId())
                .orElseThrow(() -> new RuntimeException("Catalogue not found with ID: " + circulation.getCatalogue().getId()));

        circulation.setMember(member);
        circulation.setCatalogue(catalogue);

        Circulation savedCirculation = circulationService.saveCirculation(circulation);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCirculation);
    }

    // READ operation
    @GetMapping
    public ResponseEntity<List<Circulation>> getAllCirculations() {
        List<Circulation> circulations = circulationService.getAllCirculations();
        return ResponseEntity.ok(circulations);
    }

    // UPDATE operation
    @PutMapping("/{id}")
    public ResponseEntity<Circulation> updateCirculation(@PathVariable String id, @RequestBody Circulation updatedCirculation) {
        Circulation updated = circulationService.updateCirculation(id, updatedCirculation);
        return ResponseEntity.ok(updated);
    }

    // DELETE operation
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCirculation(@PathVariable String id) {
        circulationService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}




