package org.project.thesis.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SolarPanelDto {

	private Integer numberOfSolarPanel;
	private String inverterName;
	private String inverterValue;
}