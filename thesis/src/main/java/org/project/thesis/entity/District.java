package org.project.thesis.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "district")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class District {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column
	private String districtName;
	@Column
	private String capital;
	@Column
	private Double latitude;
	@Column
	private Double solarRadiationOnDecember;
	@Column
	private Double medianTemperatureOnDecember;
	@Column
	private Double medianTemperatureYearly;
	@Column
	private Double coefficientOfTemperatureCorrection;
	@Column
	private Double coefficientOfPollution;
	@Column
	private Double coefficientOfAgeing;
	@Column
	private Double coefficientOfInputLosses;
	@Column
	private Double coefficeintOfHeterogeneity;
	@Column
	private Double coefficientOfCabling;
	@Column
	private Double coefficientOfSolarPanelLosses;
	@Column
	private Double coefficientOfEnergyTransferLosses;
	@Column
	private Double solarDensityOnDecember;
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "district_id")
	private List<MonthlyTemperature> medianTemperature;
}
