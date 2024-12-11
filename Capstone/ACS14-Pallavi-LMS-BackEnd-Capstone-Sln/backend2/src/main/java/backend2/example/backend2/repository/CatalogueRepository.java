package backend2.example.backend2.repository;

import backend2.example.backend2.entity.Catalogue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CatalogueRepository extends JpaRepository<Catalogue, String> {

    // Method to find the catalogue with the highest ID
    Catalogue findTopByOrderByIdDesc();
}



