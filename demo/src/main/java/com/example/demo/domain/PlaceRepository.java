package com.example.demo.domain;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PlaceRepository {

    private static Map<Long,Place> store=new HashMap<>();
    private static long sequence = 0L;

    private static final PlaceRepository instance = new PlaceRepository();

    public static PlaceRepository getInstance(){
        return instance;
    }

    private PlaceRepository (){

    }

    public Place save(Place place){

        place.setId(++sequence);
        store.put(place.getId(), place);
        return place;
    }


    public Place findById(Long id){
        return store.get(id);

    }

    public List<Place> findAll(){
        return new ArrayList<>(store.values());
    }

    public void clearStore(){
        store.clear();
    }
}

