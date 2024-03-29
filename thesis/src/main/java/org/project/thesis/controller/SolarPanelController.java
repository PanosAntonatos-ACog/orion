package org.project.thesis.controller;

import org.project.thesis.model.SolarPanelDto;
import org.project.thesis.model.SolarPanelRequirements;
import org.project.thesis.service.SolarPanelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/solarPanel")
@Tag(name = "Solar panel API. Set of endpoints for all operations regarding solar panels")
public class SolarPanelController {

	@Autowired
	SolarPanelService solarPanelService;

	@PostMapping()
	@Operation(summary = "Suggest optimal solar panel", description = "Endpoint that calculates the optimal solar panel given the district, days of autonomy needed and the total electric energy waste during December", method = "GET")
	public ResponseEntity<SolarPanelDto> suggestSolarPanel(@Valid @RequestBody SolarPanelRequirements request) {

		if (Boolean.TRUE.equals(request.getIsAutonomous())) {
			return ResponseEntity.ok(solarPanelService.calculateAutonomousSystem(request));
		}

		return ResponseEntity.ok(solarPanelService.calculateNotAutonomousSystem(request));
	}

}