package backend2.example.backend2.repository;

import backend2.example.backend2.entity.Circulation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CirculationRepository extends JpaRepository<Circulation, String> {
    // Custom query methods if needed
}


