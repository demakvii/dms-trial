package com.org.dms.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {

	@RequestMapping("/dms")
	public String loginHome() {
		return "index";
	}
	
	@RequestMapping("/")
	public String index() {
		return loginHome();
	}
}
