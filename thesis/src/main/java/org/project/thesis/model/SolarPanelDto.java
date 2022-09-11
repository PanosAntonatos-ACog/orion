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

	private Integer numberOfSolarPanels;
	private String name;
	private Integer watts;
	private String inverterName;
	private String inverterValue;
	private Integer output;
	private Integer powerAt25;
	private Integer powerAt25W;
	private Integer maxWatts;
	private Integer numberOfSolarPanelsInParallel;
}