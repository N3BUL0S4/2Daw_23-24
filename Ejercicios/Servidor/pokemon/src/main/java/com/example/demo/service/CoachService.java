package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.CoachDTO;
import com.example.demo.mapper.CoachMapper;
import com.example.demo.repository.CoachRepository;

@Service
public class CoachService {
	
	@Autowired
	private CoachRepository coachRepository;
	
	@Autowired
	private CoachMapper mapper;
	
	public List<CoachDTO> getAllCoach(){
		return mapper.coachDtoToCoach(coachRepository.findAll());
	}
	
	public CoachDTO getCoachByName(String name) {
		return mapper.coachDtoToCoach(coachRepository.findCoachByName(name));
	}

}
