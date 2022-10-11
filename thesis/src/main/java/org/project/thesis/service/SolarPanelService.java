package org.project.thesis.service;

import lombok.extern.slf4j.Slf4j;
import org.project.thesis.entity.District;
import org.project.thesis.model.SolarPanelDto;
import org.project.thesis.model.SolarPanelRequirements;
import org.project.thesis.repository.DistrictRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class SolarPanelService {

    @Autowired
    private DistrictRepository districtRepository;

    private static final Integer SMOL_BOI = Integer.valueOf(8500);
    private static final Integer MEDIUM_BOI = Integer.valueOf(16000);
    private static final Integer LARGE_BOI = Integer.valueOf(30000);
    private static final Integer WATTS = 445;

    public SolarPanelDto calculateNotAutonomousSystem(SolarPanelRequirements request) {

        if (request.getUserElectricalUsage() <= SMOL_BOI) {
            return SolarPanelDto
                    .builder()
                    .name("Sharp")
                    .numberOfSolarPanels(12)
                    .watts(445)
                    .inverterName("Fronius Symo")
                    .inverterValue("5.0 Kw")
                    .build();
        } else if (request.getUserElectricalUsage() <= MEDIUM_BOI) {
            return SolarPanelDto
                    .builder()
                    .name("Sharp")
                    .numberOfSolarPanels(14)
                    .watts(445)
                    .inverterName("Fronius Symo")
                    .inverterValue("6.0 Kw")
                    .build();
        } else if (request.getUserElectricalUsage() <= LARGE_BOI) {
            return SolarPanelDto
                    .builder()
                    .name("Sharp")
                    .numberOfSolarPanels(19)
                    .watts(445)
                    .inverterName("Fronius Symo")
                    .inverterValue("8.2 Kw")
                    .build();
        } else {
            log.error("Wrong input");
            throw new RuntimeException("Wrong input");
        }
    }

    public SolarPanelDto calculateAutonomousSystem(SolarPanelRequirements request) {
        if (request.getDaysOfAutonomy() > 6 || request.getDaysOfAutonomy() < 1) {
            throw new RuntimeException("Pick days of autonomy between 1 - 6 ");
        }

        SolarPanelDto solar = new SolarPanelDto();
        District dist = districtRepository.findByDistrictName(request.getDistrictName());
        Double userElectricalUsage = request.getTotalEnergyWasteOfDecember() / 31;
        Integer numberOfSolarPanels = (int) Math.round(Math.ceil(200 * userElectricalUsage / 445));
        Integer volts = null;
        if (userElectricalUsage <= 3) {
            volts = 12;

        } else if (userElectricalUsage <= 10) {
            volts = 24;
        } else if (userElectricalUsage <= 15) {
            volts = 48;
        } else if (userElectricalUsage > 15) {
            throw new RuntimeException("Electrical usage exceeds 15 kWp");
        }


        if (userElectricalUsage <= 3) {
            solar.setInverterName("Victron Phoenix 1200 VA 24V");
            solar.setInverterValue("9.5-17 V");
            solar.setOutput(230);
            solar.setPowerAt25(1200);
            solar.setPowerAt25W(1000);
            solar.setMaxWatts(2400);
        } else if (userElectricalUsage <= 5.4) {
            solar.setInverterName("Victron Phoenix 1200 VA 24V");
            solar.setInverterValue("19-33 V");
            solar.setOutput(230);
            solar.setPowerAt25(1200);
            solar.setPowerAt25W(1000);
            solar.setMaxWatts(2400);
        } else if (userElectricalUsage <= 10) {
            solar.setInverterName("Victron Phoenix 3000 VA");
            solar.setInverterValue("19-33 V");
            solar.setOutput(230);
            solar.setPowerAt25(3000);
            solar.setPowerAt25W(2500);
            solar.setMaxWatts(6000);
        } else if (userElectricalUsage <= 15) {
            solar.setInverterName("Victron Phoenix 5000 VA");
            solar.setInverterValue("38-66 V");
            solar.setOutput(230);
            solar.setPowerAt25(5000);
            solar.setPowerAt25W(4500);
            solar.setMaxWatts(10000);
        }

        if (numberOfSolarPanels / 2 % 2 == 0) {
            solar.setNumberOfSolarPanelsInParallel((int) Math.ceil(numberOfSolarPanels / 2));
        } else {
            solar.setNumberOfSolarPanelsInParallel(numberOfSolarPanels / 2 + 1);
        }

        Integer numberOfAccumulator = volts / 12;
        solar.setNumberOfAccumulator(numberOfAccumulator * request.getDaysOfAutonomy());
        solar.setWatts(445);
        solar.setName("Sharp");
        solar.setNumberOfSolarPanels(numberOfSolarPanels);

        return solar;
    }

}