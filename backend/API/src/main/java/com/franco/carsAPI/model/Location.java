package com.franco.carsAPI.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table( name = "locations")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id ;
    @Column
    String address ;
    @Column( name = "address_number")
    String addressNumber ;
    @Column
    String latitude ;
    @Column
    String longitude ;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn( name = "city_id")
    City city ;
    @OneToOne( mappedBy = "location")
    @JsonIgnore
    Product product ;

}
