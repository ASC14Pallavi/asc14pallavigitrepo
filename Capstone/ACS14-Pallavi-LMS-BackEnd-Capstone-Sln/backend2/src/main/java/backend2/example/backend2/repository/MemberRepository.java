package backend2.example.backend2.repository;

import backend2.example.backend2.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, String> {
    // JpaRepository already provides methods like existsById() and deleteById()
}



