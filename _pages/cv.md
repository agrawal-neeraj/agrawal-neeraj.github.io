---
layout: cv
permalink: /cv/
title: cv
description: Curriculum Vitae detailing professional timeline, academic milestones, and engineering skills.
nav: true
nav_order: 3
---

<div class="post">

  <div class="text-right mb-4">
    <a href="{{ '/assets/pdf/resume.pdf' | relative_url }}" target="_blank" class="btn btn-sm btn-outline-primary" rel="noopener noreferrer">
      <i class="fa-solid fa-file-pdf"></i> Download PDF Resume
    </a>
  </div>

  <div class="cv">
    {% for entry in site.data.cv.sections %}
      <a class="anchor" id="{{ entry[0] }}"></a>
      <div class="card mt-3 p-3">
        <h3 class="card-title font-weight-bold text-uppercase">{{ entry[0] }}</h3>
        <hr class="mt-0">
        
        {% if entry[0] == "Skills" %}
          <div class="row">
          {% for skill in entry[1] %}
            <div class="col-md-6 mb-3">
              <h5 class="font-weight-bold m-0">{{ skill.name }}</h5>
              <p class="text-muted m-0" style="font-size: 0.95rem;">{{ skill.keywords }}</p>
            </div>
          {% endfor %}
          </div>
        
        {% else %}
          <ul class="card-text font-weight-light list-unstyled">
          {% for item in entry[1] %}
            <li class="mb-4">
              <div class="d-flex justify-content-between align-items-baseline flex-wrap">
                <h5 class="m-0 font-weight-bold text-primary">
                  {% if item.position %}{{ item.position }}{% else %}{{ item.title }}{% endif %}
                </h5>
                <span class="text-muted font-italic" style="font-size: 0.85rem;">
                  {{ item.start_date }}{% if item.end_date %} - {{ item.end_date }}{% endif %}
                </span>
              </div>
              
              <h6 class="m-0 font-weight-normal text-secondary" style="font-size: 1rem;">
                {% if item.company %}{{ item.company }}{% else %}{{ item.institution }}{% endif %}
                {% if item.location %} • <span style="font-size: 0.9rem;">{{ item.location }}</span>{% endif %}
                {% if item.score %} • <span class="badge badge-info">{{ item.score }}</span>{% endif %}
              </h6>
              
              {% if item.summary %}
                <p class="m-0 mt-2 text-dark font-weight-normal" style="font-size: 0.95rem;">{{ item.summary }}</p>
              {% endif %}
              
              {% if item.highlights %}
                <ul class="mt-2 pl-4" style="font-size: 0.95rem; line-height: 1.45rem;">
                {% for highlight in item.highlights %}
                  <li class="mb-1">{{ highlight }}</li>
                {% endfor %}
                </ul>
              {% endif %}
            </li>
          {% endfor %}
          </ul>
        {% endif %}
      </div>
    {% endfor %}
  </div>

</div>