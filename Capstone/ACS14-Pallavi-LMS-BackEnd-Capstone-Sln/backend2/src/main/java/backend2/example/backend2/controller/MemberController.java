package backend2.example.backend2.controller;
import backend2.example.backend2.entity.Member;
import backend2.example.backend2.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/members")
@CrossOrigin(origins="http://localhost:4200") // Allow cross-origin requests from frontend

public class MemberController {

    @Autowired
    private MemberService memberService;

    @GetMapping
    public List<Member> getAllMembers() {
        return memberService.getAllMembers();
    }

    @GetMapping("/{id}")
    public Member getMemberById(@PathVariable String id) {
        return memberService.getMemberById(id);
    }

    @PostMapping
    public Member addMember(@RequestBody Member member) {
        return memberService.addMember(member);
    }

    @PutMapping("/{id}")
    public Member updateMember(@PathVariable String id, @RequestBody Member member) {
        return memberService.updateMember(id, member);
    }

    @DeleteMapping("/{id}")
    public void deleteMember(@PathVariable String id) {
        memberService.deleteMember(id);
    }
}







