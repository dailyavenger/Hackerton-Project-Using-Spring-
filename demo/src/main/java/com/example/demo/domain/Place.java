package com.example.demo.domain;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Place {


    private int kindofhouse;
    private Long id;
    public String address;
    private double transportation_score;
    private double building_score;
    private double environment_score;
    private double living_score;
    private double main_score;
    public String pros;
    public String cons;
    private int number_of_reviews;


    private PlaceRepository placeRepository = PlaceRepository.getInstance();

    public Place() {

    }


    public Place(int kindofhouse, String address, double transportation_score, double building_score,
                 double environment_score, double living_score, double main_score, String pros, String cons) {

                this.kindofhouse = kindofhouse;
                this.address = address;
                this.transportation_score = transportation_score;
                this.building_score = building_score;
                this.environment_score = environment_score;
                this.living_score = living_score;
                this.main_score = main_score;
                this.pros = pros;
                this.cons = cons;
                this.number_of_reviews = 1;

        }
    }

