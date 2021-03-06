package se.sigma.cognitive.security.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import se.sigma.cognitive.security.model.User;
import se.sigma.cognitive.security.repository.UserRepository;
import se.sigma.cognitive.security.service.UserService;

import java.util.Collection;

@Controller
@RequestMapping("/user")
public class UserController {

    private static String UPLOADED_FOLDER = "C://test//";

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;
//    @Autowired
//    private ReportService reportService;

    @RequestMapping(value = {"/index"} , method = RequestMethod.GET)
    public String showIndex(Model model ) {




        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();


        String userName = userDetails.getUsername();
        Collection<? extends GrantedAuthority> roles = userDetails.getAuthorities();


        User user = userRepository.findByEmail(userName);
        String firstName = user.getFirstName();
        String lastName = user.getLastName();
        String other = user.getPublicUserId();

        String userPublicId= user.getPublicUserId();

        model.addAttribute("email", userName);
        model.addAttribute("firstName", firstName);
        model.addAttribute("lastName", lastName);
        model.addAttribute("other", other);
        model.addAttribute("roles", roles);


        return "index";
    }





}
