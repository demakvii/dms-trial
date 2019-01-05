package com.org.dms.interceptor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;


@Configuration
@EnableWebMvc
@Component
public class ServiceInterceptorAppConfig implements WebMvcConfigurer{

	
	@Value("${spring.mvc.view.prefix}")
	private String prefix;
	
	@Value("${spring.mvc.view.suffix}")
	private String suffix;
	
	@Value("${interceptor.logging}")
	private Boolean isInterceptorLogging;
	
	
	@Autowired
	ServiceInterceptor serviceInterceptor;
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		if(isInterceptorLogging)
			registry.addInterceptor(serviceInterceptor);
	}
	
	@Bean
	public ViewResolver getViewResolver() {
		InternalResourceViewResolver resolver = new InternalResourceViewResolver();
		if(prefix != null && prefix.length() > 0)
			resolver.setPrefix(prefix);
		if(suffix != null || suffix.length() > 0)
			resolver.setSuffix(suffix);
		return resolver;
	}

	@Override
	public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
		configurer.enable();
	}
	
	

}
