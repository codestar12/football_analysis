#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Jul 20 16:17:29 2018

@author: cody
"""

from bs4 import BeautifulSoup
import glob
import re

for file in glob.glob("/home/cody/football_analysis/*.html"):
    with open(file, 'rb') as page:
        soup = BeautifulSoup(page)
        for stuff in soup.find_all("span", {"class": "tltp_arw_tp"}):
            print(stuff)