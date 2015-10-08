---
layout: page
title: Skills
permalink: /skills/
feature-img: "img/blank.svg"

languages:
  html:
    img: "img/blank.svg"
    title: HTML & CSS
    test: yup

max: 100
html:
  value: 100
  date: December 4, 2014
javascript:
  value: 100
  date: August 24, 2015
jQuery:
  value: 100
  date: August 26, 2015
php:
  value: 54
angular:
  value: 100
  date: August 26, 2015
ruby:
  value: 1
rails:
  value: 0
python:
  value: 0
---

<!-- <div class="languages">
  <div class="lang-img">
    <img src={{ page.languages.hmtl.test }}>
  </div>
    <h4 class="bigger">{{ page.languages.html.title }}</h4>
</div> -->

##Codecademy Courses
This is where it all started. I found the online coding platform that taught me how to write basic HTML & CSS in the Fall of 2014. If only I knew I would at that time that I would receive an offer for a full-time position as a web designer in the summer of 2015! With my roots in Codecademy, I continue to grow my skills there. This includes:

<div class="skills">
  <h4 class="bigger">HTML &amp; CSS - {{ page.html.value }}%</h4>
  <progress value="{{ page.html.value }}" max="{{ page.max }}" style="width: 100%;"></progress>
  <h6>Completed on: {{ page.html.date }}</h6>
</div>

<div class="skills">
  <h4 class="bigger">Javascript - {{ page.javascript.value }}%</h4>
  <progress value="{{ page.javascript.value }}" max="{{ page.max }}" style="width: 100%;"></progress>
  <h6>Completed on: {{ page.javascript.date }}</h6>
</div>

<div class="skills">
  <h4 class="bigger">jQuery - {{ page.jQuery.value }}%</h4>
  <progress value="{{ page.jQuery.value }}" max="{{ page.max }}" style="width: 100%;"></progress>
  <h6>Completed on: {{ page.jQuery.date }}</h6>
</div>

<div class="skills">
  <h4 class="bigger">PHP - {{ page.php.value }}%</h4>
  <progress value="{{ page.php.value }}" max="{{ page.max }}" style="width: 100%;"></progress>
</div>

<div class="skills">
  <h4 class="bigger">Angular Js - {{ page.angular.value }}%</h4>
  <progress value="{{ page.angular.value }}" max="{{ page.max }}" style="width: 100%;"></progress>
  <h6>Completed on: {{ page.angular.date }}</h6>
</div>

<div class="skills">
  <h4 class="bigger">Ruby - {{ page.ruby.value }}%</h4>
  <progress value="{{ page.ruby.value }}" max="{{ page.max }}" style="width: 100%;"></progress>
</div>

<div class="skills">
  <h4 class="bigger">Rails - {{ page.rails.value }}% :(</h4>
  <progress value="{{ page.rails.value }}" max="{{ page.max }}" style="width: 100%;"></progress>
</div>

<div class="skills">
  <h4 class="bigger">Python - {{ page.python.value }}% :(</h4>
  <progress value="{{ page.python.value }}" max="{{ page.max }}" style="width: 100%;"></progress>
</div>
