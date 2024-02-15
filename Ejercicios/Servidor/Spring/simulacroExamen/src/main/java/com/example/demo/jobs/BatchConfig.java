package com.example.demo.jobs;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
public class BatchConfig {
	
	
	@Bean
    public Job payJob(JobRepository jobRepository, PlatformTransactionManager transactionManager) {
        return new JobBuilder("payJob", jobRepository)
          .start(step1(jobRepository, transactionManager))
          .build();
    }
	
    @Bean
    protected Step step1(JobRepository jobRepository, PlatformTransactionManager transactionManager) {
        return new StepBuilder("step1", jobRepository)
          .tasklet(payTasklet(), transactionManager)
          .build();
    }
    
    
    @Bean
    public PayTasklet payTasklet() {
    	PayTasklet tasklet = new PayTasklet();
	    	return tasklet;
    }

}