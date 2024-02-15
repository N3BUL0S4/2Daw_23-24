package com.example.demo.jobs;

import org.springframework.batch.core.StepContribution;
import org.springframework.batch.core.scope.context.ChunkContext;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import com.example.demo.service.SubscriberService;


public class PayTasklet implements Tasklet {

	@Autowired
	private SubscriberService subscriberService;

	
	@Override
    public RepeatStatus execute(StepContribution contribution, ChunkContext chunkContext) throws Exception {
		subscriberService.insertMoney(subscriberService.checkNewSubscribersToPay());
        return RepeatStatus.FINISHED;
    }
}
