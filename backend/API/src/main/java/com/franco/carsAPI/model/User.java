package com.franco.carsAPI.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "users")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    Long id ;
    @Column
    String name ;
    @Column(name = "last_name")
    String lastName ;
    @Column
    String email;
    @Column
    String password;
    @ManyToOne( fetch = FetchType.EAGER)
    @JoinColumn( name = "role_id")
    Role role;
    @OneToMany( mappedBy = "user" , fetch = FetchType.EAGER , cascade = CascadeType.ALL)
    @Column( name = "score_id" )
    @JsonIgnore
    Set<Score> scoreSet ;
    @OneToMany( mappedBy = "user" , fetch = FetchType.EAGER , cascade = CascadeType.ALL)
    @Column( name = "reservation_id")
    @JsonIgnore
    Set<Reservation> reservationSet ;
    @OneToMany( mappedBy = "user" , fetch = FetchType.EAGER , cascade = CascadeType.ALL)
    @Column( name = "favorite_id")
    @JsonIgnore
    Set<Favorite> favoriteSet ;
}
