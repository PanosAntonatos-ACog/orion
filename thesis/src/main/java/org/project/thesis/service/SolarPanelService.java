package org.project.thesis.service;

import lombok.extern.slf4j.Slf4j;
import org.project.thesis.model.SolarPanelDto;
import org.project.thesis.model.SolarPanelRequirements;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class SolarPanelService {

    private static final Integer SMOL_BOI = Integer.valueOf(8500);
    private static final Integer MEDIUM_BOI = Integer.valueOf(16000);
    private static final Integer LARGE_BOI = Integer.valueOf(30000);

    public SolarPanelDto calculateNotAutonomousSystem(SolarPanelRequirements request) {

//		if (request.getTotalEnergyWasteOfDecember() <= SMOL_BOI) {
//			return SolarPanelDto.builder().watts(Double.valueOf(5.3)).build();
//		} else if (request.getTotalEnergyWasteOfDecember() <= MEDIUM_BOI) {
//			return SolarPanelDto.builder().watts(Double.valueOf(9.8)).build();
//		} else if (request.getTotalEnergyWasteOfDecember() <= LARGE_BOI) {
//			return SolarPanelDto.builder().watts(Double.valueOf(20)).build();
//		} else {
//			log.error("Wrong input");
//			throw new RuntimeException("Wrong input");
//		}
        return SolarPanelDto.builder().build();
    }

    public SolarPanelDto calculateAutonomousSystem(SolarPanelRequirements request) {

        return SolarPanelDto.builder().build();

    }

}