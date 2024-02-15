package es.riberamolinos.examfinal.job;

import org.springframework.batch.core.StepContribution;
import org.springframework.batch.core.scope.context.ChunkContext;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;

import es.riberamolinos.examfinal.service.SaleService;

public class deleteTasklet implements Tasklet{
    @Autowired
    private SaleService ss;

    @Override
    @Scheduled(cron = "0/250 * * * * ?")
    public RepeatStatus execute(StepContribution contribution, ChunkContext chunkContext) throws Exception {
		ss.deleteSales();
        return RepeatStatus.FINISHED;
    }

}
