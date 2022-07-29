package com.example.demo.controllers;

import com.example.demo.domain.Place;
import com.example.demo.domain.PlaceRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/project/projects")
public class controller {

    private PlaceRepository placeRepository=PlaceRepository.getInstance();

    @GetMapping("/new-form")
    public String newForm(){
        return "new-form";
    }



    @PostMapping("/save")
        public String save( @RequestParam("kindofhouse") int kindofhouse,
            @RequestParam("address") String address,
            @RequestParam("transportation_score") double transportation_score,
            @RequestParam("building_score")double building_score,
            @RequestParam("environment_score") double environment_score,
            @RequestParam("living_score") double living_score,
            @RequestParam("main_score") double main_score,
            @RequestParam("pros") String pros,
            @RequestParam("cons") String cons,
            Model model){


            Place place=new Place(kindofhouse, address, transportation_score, building_score,
            environment_score, living_score, main_score, pros, cons);
            placeRepository.save(place);

            model.addAttribute("place",place);
            return "save-result";
        }

    @GetMapping(path="/find")
    public String information(@RequestParam(name="address") String address1, Model model){
        List<Place> places=placeRepository.findAll();

        List<Place> ne=new ArrayList<>();

        for(Place item: places){
            if(item.address.equals(address1)){
                System.out.println("hello");
                ne.add(item);
            }
        }

        System.out.println("ne: "+ne);

        model.addAttribute("place",ne);
        return "place1";
    }


    @GetMapping
    public String places(Model model){
        List<Place> places=placeRepository.findAll();
        model.addAttribute("places",places);
        return "places";
    }


}
