package org.kol.iBlog.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="User")
@Getter
@Setter
public class User {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column
        private String userName;

        @Column
        private String password;

        @Column
        private String email;


}
