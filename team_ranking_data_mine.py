#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Jul 20 16:17:29 2018

@author: cody
"""
#	
# {
# 	"2017" : {
# 		"Alabama" : 1,
# 		"Texas" : 2
# 	}
# }
#
#
from bs4 import BeautifulSoup
import glob
import re

years = {}
for file in glob.glob("/Users/codyblakeney/football_analysis/*.html"):
	years[file] = {}
	with open(file, 'rb') as page:
		soup = BeautifulSoup(page)
		for stuff in soup.find_all(name="div", attrs={"class" : "name"}):
			for other in stuff.findChildren():
				print(stuff, '\n' , other.get_text())
				years[file][other.get_text()] = 1

		print(years[file])