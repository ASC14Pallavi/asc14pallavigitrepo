package backend2.example.backend2.service;
import backend2.example.backend2.repository.MemberRepository;
import org.springframework.stereotype.Service;
import backend2.example.backend2.entity.Member;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@Service
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    public Member getMemberById(String id) {
        return memberRepository.findById(id).orElse(null);
    }

    public Member addMember(Member member) {
        return memberRepository.save(member);
    }

    public Member updateMember(String id, Member member) {
        member.setId(id);
        return memberRepository.save(member);
    }

    public void deleteMember(String id) {
        memberRepository.deleteById(id);
    }
}








