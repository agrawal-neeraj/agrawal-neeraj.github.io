---
layout: cv
permalink: /cv/
title: cv
nav: true
nav_order: 5
toc:
  sidebar: left
---

<div class="post">

  <div class="text-right mb-4">
    <a href="{{ '/assets/pdf/resume.pdf' | relative_url }}" target="_blank" class="btn btn-sm btn-outline-primary" rel="noopener noreferrer">
      <i class="fa-solid fa-file-pdf"></i> Download PDF Resume
    </a>
  </div>

  <div class="cv">
    {% for entry in site.data.cv.sections %}
      <a class="anchor" id="{{ entry[0] | slugify }}"></a>
      <div class="cv-item mb-5">
        <h3 class="font-weight-bold text-uppercase text-secondary mb-2" id="{{ entry[0] | slugify }}">{{ entry[0] }}</h3>
        <hr class="mt-0 mb-3">
        
        {% if entry[0] == "Skills" %}
          <div class="skills-list font-weight-light text-dark">
            {% for skill in entry[1] %}
              <div class="mb-3">
                <span class="text-primary font-weight-bold" style="font-size: 1rem; display: inline-block; width: 220px;">{{ skill.name }}:</span>
                <span style="font-size: 0.95rem;">{{ skill.keywords }}</span>
              </div>
            {% endfor %}
          </div>
        
        {% else %}
          <ul class="list-unstyled font-weight-light text-dark">
            {% for item in entry[1] %}
              <li class="mb-4">
                <div class="d-flex justify-content-between align-items-baseline flex-wrap">
                  <h5 class="m-0 font-weight-bold text-primary" style="font-size: 1.05rem;">
                    {% if item.position %}{{ item.position }}{% else %}{{ item.title }}{% endif %}
                  </h5>
                  <span class="text-muted font-italic" style="font-size: 0.85rem;">
                    {% if item.start_date %}{{ item.start_date }} - {{ item.end_date }}{% else %}{{ item.date }}{% endif %}
                  </span>
                </div>
                
                <h6 class="m-0 font-weight-normal text-secondary mt-1" style="font-size: 0.95rem;">
                  {% if item.company %}{{ item.company }}{% elsif item.institution %}{{ item.institution }}{% endif %}
                  {% if item.awarder %}Awarded by: {{ item.awarder }}{% endif %}
                  {% if item.location %} • <span style="font-size: 0.9rem;">{{ item.location }}</span>{% endif %}
                  {% if item.score %} • <span class="badge badge-info font-weight-bold" style="font-size: 0.8rem; color: #fff;">{{ item.score }}</span>{% endif %}
                </h6>
                
                {% if item.summary %}
                  <p class="m-0 mt-2 font-weight-light" style="font-size: 0.95rem; line-height: 1.45rem;">{{ item.summary }}</p>
                {% endif %}
                
                {% if item.highlights %}
                  <ul class="mt-2 pl-4" style="font-size: 0.9rem; line-height: 1.45rem;">
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