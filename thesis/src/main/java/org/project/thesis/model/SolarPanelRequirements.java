package org.project.thesis.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SolarPanelRequirements {

	private String districtName;
	private Integer daysOfAutonomy;
	private Double totalEnergyWasteOfDecember;
	private Boolean isAutonomous;
	private Double userElectricalUsage;
}
