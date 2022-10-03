package org.project.thesis.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SolarPanelRequirements {

    private String districtName;
    @Min(1)
    @Max(6)
    private Integer daysOfAutonomy;
    private Double totalEnergyWasteOfDecember;
    private Boolean isAutonomous;
    private Double userElectricalUsage;
}
