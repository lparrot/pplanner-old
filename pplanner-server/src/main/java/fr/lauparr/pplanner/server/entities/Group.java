package fr.lauparr.pplanner.server.entities;

import fr.lauparr.pplanner.server.entities.abstracts.BaseEntity;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@Table(name = "groups")
@ToString(onlyExplicitlyIncluded = true)
@EqualsAndHashCode(onlyExplicitlyIncluded = true, callSuper = false)
public class Group extends BaseEntity {

	private String name;

	@Enumerated(EnumType.STRING)
	@CollectionTable(name = "groups_roles")
	@ElementCollection(fetch = FetchType.EAGER)
	private List<Role> roles;

	@Builder
	public Group(final String name, @Singular final List<Role> roles) {
		this.name = name;
		this.roles = roles;
	}
}
